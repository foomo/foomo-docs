---
title: Kubernetes Security
slug: /security/kubernetes
authors: [philipp]
---

A comprehensive guide to Kubernetes security best practices, with examples and code snippets.

### Table of Contents

- [Securing Kubernetes Components](#securing-kubernetes-components)
  - [1. End-to-end TLS Communications for etcd](#1-end-to-end-tls-communications-for-etcd)
  - [2. Securing Kubelets](#2-securing-kubelets)
  - [3. Securing the API Server via Third-Party Authentication](#3-securing-the-api-server-via-third-party-authentication)
- [Kubernetes Network Security](#kubernetes-network-security)
  - [1. Network Policies](#1-network-policies)
  - [2. Monitoring Traffic and Communication](#2-monitoring-traffic-and-communication)
- [Security of Kubernetes Pods and Other Kubernetes Objects](#security-of-kubernetes-pods-and-other-kubernetes-objects)
  - [1. Admission Controllers and Validating Admission Policies](#1-admission-controllers-and-validating-admission-policies)
  - [2. Process Whitelisting](#2-process-whitelisting)
- [Kubernetes Credentials and Data Security](#kubernetes-credentials-and-data-security)
  - [1. Use Secret Managers](#1-use-secret-managers)
  - [2. Use a Service Account, Not Cloud Provider Credentials](#2-use-a-service-account-not-cloud-provider-credentials)
  - [3. Implement mTLS in Service-to-Service Communication](#3-implement-mtls-in-service-to-service-communication)
- [Kubernetes Security Checklist](#kubernetes-security-checklist)

### Securing Kubernetes Components

Securing the core components of your Kubernetes cluster is the first and most critical step in establishing a robust security posture. These components form the **control plane** of your cluster, and any compromise here could lead to a **complete takeover**.

#### 1. End-to-end TLS Communications for etcd

[`etcd`](https://etcd.io/) is the key-value store for all of Kubernetes' cluster data, acting as the single source of truth. It stores the entire state of the cluster, including configurations, specifications, and secrets. As such, it's a **prime target for attackers**. A compromised `etcd` means a compromised cluster. All communication with `etcd` must be encrypted using **TLS** (Transport Layer Security). This ensures that all data in transit is secure and that only authenticated clients and peers can access the data store, preventing both eavesdropping and unauthorized access.

For **client-to-server communication**, you should configure `etcd` to use TLS. Here are the flags you'll need:

*   `--cert-file=<path>`: The path to the SSL/TLS certificate.
*   `--key-file=<path>`: The path to the certificate's private key.
*   `--client-cert-auth`: When this flag is set, `etcd` will check all incoming HTTPS requests for a client certificate signed by a trusted **Certificate Authority (CA)**.
*   `--trusted-ca-file=<path>`: The path to the trusted CA file.
*   `--auto-tls`: This flag can be used to generate a self-signed certificate, which is useful for testing but **not recommended for production environments**.

For **server-to-server (peer) communication**, `etcd` also needs to be secured. Here are the relevant flags:

*   `--peer-cert-file=<path>`: The path to the SSL/TLS certificate for peer communication.
*   `--peer-key-file=<path>`: The path to the private key for the peer certificate.
*   `--peer-client-cert-auth`: This flag ensures that `etcd` will check all incoming peer requests for a valid signed client certificate.
*   `--peer-trusted-ca-file=<path>`: The path to the trusted CA file for peer communication.
*   `--peer-auto-tls`: Similar to `--auto-tls`, this flag enables the use of auto-generated self-signed certificates for peer-to-peer connections.

Here is an example of how you might start an `etcd` server with client and peer TLS enabled:

```bash
etcd --name=my-etcd-member \
  --data-dir=/var/lib/etcd \
  --listen-client-urls=https://127.0.0.1:2379 \
  --advertise-client-urls=https://127.0.0.1:2379 \
  --listen-peer-urls=https://127.0.0.1:2380 \
  --initial-advertise-peer-urls=https://127.0.0.1:2380 \
  --initial-cluster=my-etcd-member=https://127.0.0.1:2380 \
  --client-cert-auth \
  --trusted-ca-file=/path/to/ca.crt \
  --cert-file=/path/to/server.crt \
  --key-file=/path/to/server.key \
  --peer-client-cert-auth \
  --peer-trusted-ca-file=/path/to/peer-ca.crt \
  --peer-cert-file=/path/to/peer-server.crt \
  --peer-key-file=/path/to/peer-server.key
```

#### 2. Securing Kubelets

A `kubelet` is an agent that runs on each node in the cluster. It's responsible for everything on that node, from making sure containers are running in a Pod to reporting the node's health back to the control plane. Securing the `kubelet` is crucial to prevent a node from being compromised. A compromised `kubelet` could allow an attacker to run malicious containers on a node, access sensitive data, or disrupt services on that specific node, potentially leading to a wider cluster breach.

Here are some best practices for securing `kubelets`:

*   **Restrict the kubelet**: The [`NodeRestriction`](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) admission controller is a special-purpose admission controller that limits the `kubelet`'s permissions. This ensures that a `kubelet` can only modify the Pods that are bound to it and cannot access or modify resources (like secrets or other pods) on other nodes. This is a critical defense-in-depth measure.
*   **Disable anonymous access**: To prevent unauthenticated access to the `kubelet`'s API, you should **always** disable anonymous access. This can be done by starting the `kubelet` process with the `--anonymous-auth=false` flag. Leaving this enabled would expose node-level information and controls to anyone who can access the network.
*   **Verify the authorization mode**: Never run the `kubelet` with `--authorization-mode` set to `AlwaysAllow`. This would grant all requests, regardless of their origin, full access to the `kubelet`. Instead, use a more restrictive mode like `Webhook`. The `Webhook` mode delegates the authorization decision to the Kubernetes API server, which allows for more granular and centrally managed control over `kubelet` access.
*   **Shut down the read-only port**: By default, the `kubelet` exposes a read-only port that can be used to view information about the workloads running on the node. While read-only, this information can be invaluable for an attacker. This port should be disabled by setting `--read-only-port=0` to prevent attackers from gathering information during the **reconnaissance** phase.

Here is an example of a `kubelet` configuration file with these security settings applied:

```yaml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
authentication:
  anonymous:
    enabled: false
  webhook:
    enabled: true
authorization:
  mode: Webhook
readOnlyPort: 0
```

#### 3. Securing the API Server via Third-Party Authentication

The Kubernetes **API server** is the central point of interaction with the cluster; it's the gateway to your cluster's control plane. Securing access to the API server is paramount. While Kubernetes has its own authentication mechanisms, integrating with a third-party authentication provider can enhance security by leveraging existing identity management systems and enabling features like **multi-factor authentication (MFA)**.

Tools like [**Dex**](https://dexidp.io/), [**Infra**](https://infrahq.com/), [**Azure AD**](https://azure.microsoft.com/en-us/products/active-directory/), and the [**AWS IAM Authenticator for Kubernetes**](https://github.com/kubernetes-sigs/aws-iam-authenticator) can be used to provide a more robust authentication process. These tools can enforce **multi-factor authentication**, **single sign-on (SSO)**, and other advanced security features that are often standard in enterprise environments.

Most of these integrations work using the **OpenID Connect (OIDC)** protocol. When a user tries to authenticate, they are redirected to the third-party provider. After successful authentication, the provider issues an ID token, which is then sent to the Kubernetes API server. The API server validates the token and grants access to the user based on their identity and associated RBAC roles.

### Kubernetes Network Security

Once the Kubernetes components are secured, the next step is to secure the network traffic within the cluster.

#### 1. Network Policies

By default, all Pods in a Kubernetes cluster can communicate with each other. This **flat network model** is simple but can be a security risk, as a compromised Pod could be used to attack other Pods. **Network policies** allow you to restrict communication between Pods based on labels and ports. They are a fundamental tool for implementing the **principle of least privilege** at the network level, ensuring that pods can only communicate with the specific services they need to function.

For example, the following network policy only allows Pods with the label `app=backend` to receive traffic from Pods with the label `app=frontend`:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: backend-policy
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
```

Here is another example that denies all ingress traffic to Pods with the label `app=database` except from Pods with the label `app=backend` on TCP port `5432`:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend
    ports:
    - protocol: TCP
      port: 5432
```

It is a good practice to start with a **default-deny** policy that blocks all traffic and then explicitly whitelist the required communication paths. This approach ensures that no unintended traffic is allowed within the cluster.

#### 2. Monitoring Traffic and Communication

Monitoring the network traffic in your cluster can help you to detect and respond to security threats. Tools like [**Cilium's Hubble**](https://cilium.io/blog/2019/11/19/hubble-a-new-observability-platform-for-kubernetes/) can provide visibility into the network traffic, allowing you to identify patterns and **anomalies** that may indicate a security breach. These tools can help you to visualize **service dependencies**, identify communication bottlenecks, and detect unauthorized network activity, such as a pod trying to communicate with an external, malicious IP address.

### Security of Kubernetes Pods and Other Kubernetes Objects

The security of your Kubernetes workloads is just as important as the security of the cluster itself. In this section, we'll discuss how to safeguard your Pods, volumes, and other Kubernetes objects.

#### 1. Admission Controllers and Validating Admission Policies

**Admission controllers** are plugins that act as gatekeepers, governing and enforcing how the cluster is used. They can be used to set policies that must be met before an object can be created or updated in the cluster. This is a powerful mechanism for enforcing security best practices and preventing misconfigurations **before they happen**.

**Validating admission policies** offer a declarative, in-cluster way to create and apply policies using the [**Common Expression Language (CEL)**](https://github.com/google/cel-spec). CEL is designed to be simple, fast, and safe to execute. Here are some important policies you should consider applying:

*   **Deny deployment if privilege escalation is not set**: This policy can prevent containers from gaining more privileges than their parent process, which is a common tactic used in container breakouts. This helps enforce the **principle of least privilege**.
*   **Forbid certain registries**: This policy can be used to prevent images from being pulled from untrusted or forbidden container registries, reducing the risk of running malicious or unvetted code. This is a key part of securing your **software supply chain**.
*   **Deny resources with a mutable container filesystem**: An attacker with access to a container can download and execute malicious scripts. By enforcing an **immutable filesystem**, you can prevent such attacks, as the container's filesystem cannot be written to at runtime.

Here's an example of a validating admission policy that denies resources with a mutable container filesystem:

```yaml
apiVersion: admissionregistration.k8s.io/v1alpha1
kind: ValidatingAdmissionPolicy
metadata:
  name: "deny-mutable-filesystem"
spec:
  failurePolicy: Fail
  matchConstraints:
    resourceRules:
    - apiGroups:   [""]
      apiVersions: ["v1"]
      operations:  ["CREATE", "UPDATE"]
      resources:   ["pods"]
  validations:
    - expression: "object.spec.containers.all(c, !has(c.securityContext) || !has(c.securityContext.readOnlyRootFilesystem) || c.securityContext.readOnlyRootFilesystem == true)"
      message: "Containers must have a read-only root filesystem."
```

Here is another example of a policy that ensures that all images are pulled from a trusted registry:

```yaml
apiVersion: admissionregistration.k8s.io/v1alpha1
kind: ValidatingAdmissionPolicy
metadata:
  name: "enforce-trusted-registry"
spec:
  failurePolicy: Fail
  matchConstraints:
    resourceRules:
    - apiGroups:   [""]
      apiVersions: ["v1"]
      operations:  ["CREATE", "UPDATE"]
      resources:   ["pods"]
  validations:
    - expression: "object.spec.containers.all(c, c.image.startsWith('my-trusted-registry.com/'))"
      message: "Images must be pulled from my-trusted-registry.com."
```

#### 2. Process Whitelisting

**Process whitelisting** is a security mechanism that only allows a pre-approved set of processes to run in your Kubernetes nodes. This can be an effective way to prevent malicious code from executing, but it can also be a challenging task to implement and maintain, as every new application or update will require the whitelist to be updated. Tools like [`AppArmor`](https://kubernetes.io/docs/tutorials/security/apparmor/) and [`seccomp`](https://kubernetes.io/docs/tutorials/security/seccomp/) can be used to implement process whitelisting in Kubernetes by restricting the system calls a container can make.

### Kubernetes Credentials and Data Security

The final piece of the puzzle is to protect your data and security credentials. In this section, we'll discuss some best practices for managing secrets and credentials in Kubernetes.

#### 1. Use Secret Managers

By default, Kubernetes secrets are only **base64 encoded**, not encrypted. This is an encoding mechanism, not a security one, and it can be easily reversed. This means that anyone with access to the `etcd` data store can view the secrets in plain text. To mitigate this risk, you should use a dedicated **secret manager** like [**HashiCorp Vault**](https://www.vaultproject.io/). A secret manager can provide a secure way to store and manage your secrets, with features like **encryption at rest**, **dynamic secrets**, and fine-grained access control.

Integrating a secret manager with Kubernetes often involves using a sidecar container or a CSI driver to inject secrets into Pods at runtime. This approach avoids storing secrets directly in Kubernetes and ensures that applications only have access to the secrets they need, for as long as they need them. This also allows for better auditing and rotation of secrets.

#### 2. Use a Service Account, Not Cloud Provider Credentials

When a workload needs to connect to a cloud provider, you should always use a **service account** with the **principle of least privilege**. You should never store static, long-lived cloud provider credentials directly in your Kubernetes configuration or inside a container image. Most cloud providers offer a way to map Kubernetes service accounts to cloud IAM roles (a concept often called **workload identity**), which allows you to grant granular permissions to your workloads without having to manage static credentials. This is more secure as the credentials are automatically rotated and scoped to the specific pod.

#### 3. Implement mTLS in Service-to-Service Communication

**Mutual TLS (mTLS)** is a security protocol that can be used to encrypt communication between services. Unlike standard TLS, where only the client verifies the server, mTLS requires **both the client and the server to verify each other's identity**. By implementing mTLS, you can ensure that only authorized services can communicate with each other, and that all communication is encrypted. This can help to prevent **man-in-the-middle attacks** and other security threats. **Service meshes** like [**Istio**](https://istio.io/) and [**Linkerd**](https://linkerd.io/) can be used to automate the implementation of mTLS in your cluster, often without requiring any changes to your application code.

### Kubernetes Security Checklist

Here is a checklist of security best practices that you should follow to secure your Kubernetes cluster:

**Cluster Components**
- [ ] Secure `etcd` with TLS for client-to-server and peer-to-peer communication.
- [ ] Restrict `kubelet` permissions using the `NodeRestriction` admission controller.
- [ ] Disable anonymous access to the `kubelet` (`--anonymous-auth=false`).
- [ ] Use the `Webhook` authorization mode for the `kubelet` (`--authorization-mode=Webhook`).
- [ ] Disable the `kubelet`'s read-only port (`--read-only-port=0`).
- [ ] Integrate the API server with a third-party authentication provider.

**Network Security**
- [ ] Use network policies to restrict communication between Pods.
- [ ] Implement a default-deny network policy.
- [ ] Monitor network traffic for anomalies and security threats.

**Workload Security**
- [ ] Use admission controllers to enforce security policies.
- [ ] Enforce the use of trusted container registries.
- [ ] Run containers with a read-only root filesystem.
- [ ] Avoid running containers as root.
- [ ] Use process whitelisting tools like `AppArmor` and `seccomp`.

**Data Security**
- [ ] Use a secret manager to store and manage secrets.
- [ ] Avoid storing secrets directly in Kubernetes.
- [ ] Use service accounts with the principle of least privilege for cloud provider access.
- [ ] Implement mTLS for service-to-service communication.