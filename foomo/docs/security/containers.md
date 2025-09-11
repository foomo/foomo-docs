---
title: Container Security
slug: /security/containers
authors: [philipp]
---

This document outlines best practices for securing Docker containers, from building images to running them in production. The information is largely based on the excellent [container-security-checklist by krol3](https://github.com/krol3/container-security-checklist).

## Table of Contents

- [Secure the Build](#secure-the-build)
  - [Image Hardening](#image-hardening)
  - [Image Scanning](#image-scanning)
  - [Image Signing](#image-signing)
- [Secure the Container Registry](#secure-the-container-registry)
- [Secure the Container Runtime (Docker)](#secure-the-container-runtime-docker)
- [Secure the Infrastructure](#secure-the-infrastructure)
- [Secure the Data](#secure-the-data)
- [Secure the Workloads (Running Containers)](#secure-the-workloads-running-containers)

## Secure the Build

The security of a container begins with the image from which it is built. A compromised or poorly constructed image can introduce vulnerabilities into every container that uses it.

### Image Hardening

Hardening an image involves minimizing its attack surface. The fewer components an image contains, the fewer potential vulnerabilities it has.

*   **Use minimal base images**: Always start with the smallest possible base image that your application can run on.
    *   [**Distroless**](https://github.com/GoogleContainerTools/distroless) images from Google are a great choice as they contain only your application and its runtime dependencies, without package managers, shells, or other utilities.
    *   [**Alpine Linux**](https://alpinelinux.org/) is a popular choice due to its small size (around 5MB).
    *   Many official images have a `slim` or `alpine` tag (e.g., `python:3.9-slim`, `node:16-alpine`) that provides a smaller version of the image.

*   **Remove unnecessary tools**: Do not include debugging tools (like `curl`, `netcat`), shells, or any utilities not strictly required by your application in a production image. An attacker who gains access to a container can use these tools for malicious activities.

*   **Run as a non-root user**: By default, containers run as the `root` user. This is a significant risk. If an attacker compromises the container, they will have root privileges inside it. Use the `USER` instruction in your `Dockerfile` to specify a non-root user for the application to run as.

    ```dockerfile
    FROM alpine:latest

    # Create a non-root user and group
    RUN addgroup -S appgroup && adduser -S appuser -G appgroup

    # Switch to the non-root user
    USER appuser

    WORKDIR /app
    COPY . .
    CMD ["./my-app"]
    ```

*   **Use multi-stage builds**: [Multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/) are a powerful feature that allows you to use multiple `FROM` instructions in a single `Dockerfile`. This lets you compile your code or build assets in a "build" stage with all the necessary dependencies and tools, and then copy only the final artifacts into a clean, minimal "runtime" stage. This prevents build tools and dependencies from being included in the final production image.

    ```dockerfile
    # ---- Build Stage ----
    FROM golang:1.19-alpine AS builder
    WORKDIR /src
    COPY . .
    # Build the application
    RUN CGO_ENABLED=0 go build -o /out/my-app .

    # ---- Runtime Stage ----
    FROM gcr.io/distroless/static-debian11
    # Copy the built application from the builder stage
    COPY --from=builder /out/my-app /
    # Set the entrypoint
    ENTRYPOINT ["/my-app"]
    ```

### Image Scanning

Automated scanning is crucial for identifying known vulnerabilities and secrets before they reach production.

*   **Scan for vulnerabilities**: Integrate image scanning into your CI/CD pipeline. This will check your image's components against databases of known Common Vulnerabilities and Exposures (CVEs).
    *   [**Trivy**](https://github.com/aquasecurity/trivy) by Aqua Security
    *   [**Clair**](https://github.com/quay/clair) by Quay
    *   [**Anchore**](https://anchore.com/)

    Example with Trivy:
    ```bash
    # Scan an image for vulnerabilities
    trivy image my-app:latest
    ```

*   **Scan for secrets**: Never hardcode secrets like API keys, passwords, or tokens in your `Dockerfile` or image layers. Use tools to scan for secrets that may have been committed by accident.
    *   [**GitGuardian Shield**](https://www.gitguardian.com/gitguardian-shield)
    *   [**detect-secrets**](https://github.com/Yelp/detect-secrets) by Yelp

### Image Signing

Image signing provides a level of trust by ensuring the integrity and authenticity of an image. It verifies that the image you are running is the one that the publisher intended to release and has not been tampered with.

*   **Use Docker Content Trust**: Enable [Docker Content Trust](https://docs.docker.com/engine/security/trust/) by setting the environment variable `DOCKER_CONTENT_TRUST=1`. This uses cryptographic signing to verify that images have been signed and are from a trusted source. It implements [The Update Framework (TUF)](https://theupdateframework.io/), a security framework to protect against various types of supply chain attacks.

    ```bash
    # Enable content trust for the current shell session
    export DOCKER_CONTENT_TRUST=1

    # With content trust enabled, 'docker pull' will only fetch signed images
    docker pull my-app:latest

    # Push an image with a signature
    docker push my-registry/my-app:latest
    ```

## Secure the Container Registry

The registry is where your images are stored. Securing it is as important as securing the images themselves.

*   **Control access**: Use Role-Based Access Control (RBAC) to enforce the principle of least privilege. Only grant permissions to push images to specific users or service accounts that are part of your CI/CD pipeline. Similarly, restrict pull access to only those hosts and services that need to run the container.

*   **Use a private registry**: For non-public images, always use a private registry (like Docker Hub private repos, Amazon ECR, Google Artifact Registry, or a self-hosted one like Harbor) that is protected behind your firewall. This reduces the risk of image tampering and unauthorized access.

## Secure the Container Runtime (Docker)

Securing the Docker daemon and its configuration is critical to prevent a container compromise from escalating to a host compromise.

*   **Secure the Docker daemon**:
    *   The Docker daemon socket (`/var/run/docker.sock`) is a Unix socket that the Docker CLI and other tools use to communicate with the daemon. **Access to this socket is equivalent to root access on the host.**
    *   Never expose it over an unencrypted TCP socket. If you need remote access, use [TLS to encrypt the connection](https://docs.docker.com/engine/security/protect-access/).
    *   Avoid mounting the socket inside containers. If a container needs to interact with the Docker API, consider using a secure proxy instead.

*   **Use rootless mode**: Running the Docker daemon in [rootless mode](https://docs.docker.com/engine/security/rootless/) executes the daemon and containers as a non-root user. This significantly mitigates the impact of a potential container breakout vulnerability, as the attacker would only gain the privileges of that unprivileged user on the host.

*   **Enable user namespaces**: [User namespaces](https://docs.docker.com/engine/security/userns-remap/) isolate containers by mapping the `root` user in a container to a non-privileged user on the host. This means that even if a process breaks out of the container as root, it will have very limited permissions on the host system.

*   **Don't disable security profiles**: Docker uses several Linux security features by default to protect the host. Do not disable them unless absolutely necessary.
    *   [**seccomp**](https://docs.docker.com/engine/security/seccomp/): Restricts the system calls a container can make. Docker applies a default profile that blocks about 44 syscalls out of 300+. Running with `--security-opt seccomp=unconfined` disables this protection.
    *   [**AppArmor**](https://docs.docker.com/engine/security/apparmor/) / [**SELinux**](https://docs.docker.com/engine/security/selinux/): Linux Security Modules that provide mandatory access control (MAC) to further confine container processes.

## Secure the Infrastructure

Because containers share the host's kernel, a vulnerability in the host can compromise all containers running on it.

*   **Keep the host patched**: This is one of the most critical aspects of container security. Regularly apply security patches to the host operating system and kernel to protect against known vulnerabilities that could lead to container escapes.

*   **Use CIS Benchmarks**: The Center for Internet Security (CIS) provides benchmarks for hardening various operating systems and container platforms, including Docker and Kubernetes. Follow the [CIS Docker Benchmark](https://www.cisecurity.org/benchmark/docker) to secure your host configuration.

*   **Isolate containers**: In addition to Docker's built-in isolation, using security modules like SELinux or AppArmor provides a robust second layer of defense, making it much harder for a compromised container to affect the host or other containers.

## Secure the Data

Protecting sensitive data, especially secrets, is paramount.

*   **Manage secrets carefully**:
    *   Never store secrets in image layers (e.g., in the `Dockerfile`) or pass them via environment variables, as they can be easily inspected.
    *   Use a dedicated secrets management solution. The best approach is to mount secrets into the container at runtime.
        *   [**Docker Secrets**](https://docs.docker.com/engine/swarm/secrets/) (for Swarm) and Kubernetes Secrets mount secrets as files in an in-memory `tmpfs` volume.
        *   External tools like [**HashiCorp Vault**](https://www.vaultproject.io/) or cloud provider services (AWS Secrets Manager, Azure Key Vault) provide centralized and secure secret storage with fine-grained access control.

*   **Apply least privilege**: Follow the principle of least privilege. A container should only be given access to the specific secrets it needs to function, and nothing more.

*   **Rotate secrets regularly**: Regularly rotate all credentials to reduce the window of opportunity for an attacker if a secret is compromised.

## Secure the Workloads (Running Containers)

These practices focus on securing the containers while they are running.

*   **Avoid privileged containers**: Never run containers with the `--privileged` flag. A privileged container has all the capabilities of the host machine, effectively disabling all isolation. It can load kernel modules, access all devices, and can easily take over the entire host.

    ```bash
    # Example of a dangerous command (DO NOT RUN in production)
    docker run --privileged my-app:latest
    ```

*   **Limit resources**: A compromised container could be used to launch a denial-of-service (DoS) attack or a cryptojacking campaign. Mitigate this by setting resource limits.
    *   Use `--memory` and `--cpus` to constrain memory and CPU usage.
    *   Use `--pids-limit` to prevent "fork bomb" attacks where a process rapidly replicates itself to exhaust system resources.

    ```bash
    docker run \
      --memory="512m" \
      --cpus="0.5" \
      --pids-limit=100 \
      my-app:latest
    ```

*   **Read-only root filesystem**: Run containers with a `--read-only` root filesystem. This prevents an attacker from overwriting application code, modifying configuration, or downloading malicious tools into the container. If the application needs to write files, mount a dedicated volume or a `tmpfs` for temporary data.

    ```bash
    docker run \
      --read-only \
      --tmpfs /tmp \ # Mount a temporary in-memory filesystem for temporary files
      my-app:latest
    ```

*   **Network segregation**: By default, all containers on the same host can communicate with each other over the default bridge network. This increases the "blast radius" of a compromise.
    *   Avoid the default `bridge` network for production workloads.
    *   Create custom [bridge networks](https://docs.docker.com/network/bridge/) to segment containers. This allows you to control which containers can communicate with each other, creating isolated groups.
    *   Only expose the necessary container ports to the host and the outside world.

    ```bash
    # Create a custom bridge network
    docker network create my-app-net

    # Run containers on the custom network
    docker run --network=my-app-net --name db ...
    docker run --network=my-app-net --name api ...
    ```

---

Source: [krol3/container-security-checklist on GitHub](https://github.com/krol3/container-security-checklist)
