---
title: Secure Web Application Development
slug: /security/web-development
authors: [philipp]
---

## Overview

This guide distills practical, engineering-focused best practices for building and operating secure web applications. It emphasizes preventative controls, defense-in-depth, and testable requirements you can wire into your SDLC and CI/CD pipeline.

Primary sources: the [OWASP Web Security Testing Guide v4.2 (WSTG)](https://owasp.org/www-project-web-security-testing-guide/), [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/), and [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/). Controls are mapped to these standards to keep implementation and testing aligned.

## How to use this document

- Skim the Table of Contents to jump to a topic.
- For each section, use the checklist-style bullets during design, coding, and review.
- New to some terms? Inline links and short explanations are provided.

## Table of Contents

- [Overview](#overview)
- [How to use this document](#how-to-use-this-document)
- [Security Principles](#security-principles)
- [Secure SDLC](#secure-sdlc)
- [Quick Engineering Checklist (build-time)](#quick-engineering-checklist-build-time)
- [Runtime and Configuration Hardening](#runtime-and-configuration-hardening)
- [Area-by-Area Best Practices](#area-by-area-best-practices)
- [Pre-Release Test Checklist](#pre-release-test-checklist-mapping-to-wstg)
- [References](#references)

## Security Principles

These core principles should guide every engineering decision. They are ordered from most to least impactful.

- **Secure by default**: Systems should be secure out-of-the-box. This means enabling minimal features and privileges and using deny-by-default policies.
  - *Example*: A new firewall should block all traffic by default, requiring explicit rules to allow specific ports. User accounts should start with the lowest possible permissions.
- **Least privilege**: Grant only the minimum permissions necessary for an identity (user, service, or system) to perform its intended function.
  - *Example*: An application's database user should only have `SELECT`, `INSERT`, `UPDATE` permissions, not `DROP` or `ALTER`. An admin API token should be scoped to specific actions, not given full admin rights.
- **Defense in depth**: Implement multiple, layered, and independent security controls. If one control fails, others are in place to stop an attack.
  - *Example*: To prevent SQL injection, you might have: 1) a Web Application Firewall (WAF), 2) strict input validation, and 3) parameterized database queries. A failure in one layer is caught by the next.
- **Trust boundaries**: A trust boundary is any point where data crosses from a less-trusted area to a more-trusted area. Always validate and sanitize data crossing these boundaries. Never trust client-controlled input.
  - *Example*: In a client-server application, the API endpoint is a trust boundary. Validate all incoming data from the client, even if client-side validation already occurred.
- **Fail securely**: Applications should fail in a way that denies access and does not leak sensitive information.
  - *Example*: If a database connection is lost during an authorization check, the system must deny access, not grant it. Error pages should show a generic message and a correlation ID, not a full stack trace.
- **Privacy by design**: Build privacy considerations into the system from the start. Collect only the data you need, limit its purpose, and retain it for the shortest time necessary.
  - *Example*: Instead of storing a user's date of birth, store only their age or a boolean indicating if they are over 18, if that's all you need. Redact sensitive data like passwords and credit card numbers from logs.
- **Automate guardrails**: Encode security requirements into automated tests, CI/CD pipelines, and infrastructure templates. This makes security consistent and scalable.
  - *Example*: A CI pipeline could automatically run a Static Application Security Testing (SAST) tool and fail the build if any high-severity vulnerabilities are found.

## Secure SDLC

Integrating security into every phase of the Software Development Lifecycle (SDLC) is more effective and cheaper than trying to add it at the end.

- **Requirements & Threat Modeling**: Before writing code, define security requirements using a standard like OWASP ASVS. For any new feature or service, conduct threat modeling to identify potential abuse cases and data flow vulnerabilities.
  - *Example*: For a file upload feature, threats include uploading malware, oversized files (DoS), or a web shell. Controls would include file type validation, size limits, and malware scanning.
- **Standards & Reuse**: Codify security standards for your organization. Create reusable libraries and services for critical operations like authentication, authorization, and encryption. Enforce standards with linters and code review checklists.
- **Dependencies**: Use a dependency scanner ([SCA](https://en.wikipedia.org/wiki/Software_composition_analysis)) like Dependabot or Snyk to find and fix known vulnerabilities in your third-party packages. Use lockfiles (`package-lock.json`, `yarn.lock`, `go.sum`) to ensure builds are reproducible and verified.
- **Coding**: Write code with security in mind. Use frameworks with built-in security features (like auto-escaping to prevent XSS). Implement centralized authentication and authorization checks. Use contextual encoding for all output.
- **Reviews**: Perform security-focused code reviews, especially for sensitive changes (e.g., in auth logic, payment flows). A two-person review rule for critical components is a good practice.
- **Testing**:
  - **SAST** ([Static Application Security Testing](https://en.wikipedia.org/wiki/Static_application_security_testing)): Scan source code for vulnerabilities like SQL injection or insecure configurations. Tools: Snyk Code, SonarQube.
  - **SCA** ([Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)): Find known vulnerabilities in open-source dependencies.
  - **Secrets Scanning**: Scan code and git history for accidentally committed secrets. Tools: git-secrets, TruffleHog.
  - **IaC Scan** ([Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code)): Scan Terraform, CloudFormation, or Kubernetes manifests for misconfigurations. Tools: tfsec, checkov.
  - **DAST** ([Dynamic Application Security Testing](https://en.wikipedia.org/wiki/Dynamic_application_security_testing)): Test the running application for vulnerabilities by simulating attacks. Tools: OWASP ZAP, Burp Suite.
- **Pre-release**: Triage and fix all high and critical vulnerabilities before release. For significant new features, perform targeted manual penetration tests based on the WSTG.
- **Release & Config**: Use Infrastructure as Code (IaC) to manage and version your infrastructure. Fetch secrets at runtime from a secure vault (e.g., HashiCorp Vault, AWS Secrets Manager). Deploy applications with least-privilege service accounts and roles.
- **Operate**: Monitor application and infrastructure logs for security events. Use a WAF with rate limiting to protect against automated attacks. Have runbooks and playbooks ready for incident response.

## Quick Engineering Checklist (build-time)

A quick-reference list for engineers during development.

- **Choose a baseline**: Adopt an OWASP ASVS level (e.g., Level 1 for low-risk apps, Level 2 for most apps) and link to it in user stories.
- **Threat model new/changed flows**: Whiteboard potential attacks on new authentication flows, payment integrations, file uploads, admin panels, etc.
- **Secrets management**: Use a secrets vault. Never hardcode secrets in code, config files, or CI/CD variables. Rotate keys and scope permissions tightly.
- **Dependency hygiene**: Integrate SCA into your CI pipeline. Block builds with known critical vulnerabilities. Pin dependencies and update them regularly.
- **Static analysis**: Run SAST and secrets scanning on every commit. Enforce quality gates on main branches to prevent merging vulnerable code.
- **Authz tests**: Write automated tests that verify both positive and negative access control cases (e.g., "user A *can* access their own data," "user A *cannot* access user B's data").
- **Input validation & encoding**: Use centralized validation libraries. Rely on your framework's auto-escaping features for output.
- **Security headers**: Set strong security headers.
  - *Example*: `Content-Security-Policy: script-src 'self'; object-src 'none'; base-uri 'none';`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `X-Content-Type-Options: nosniff`
- **CORS**: Use an explicit allowlist of origins. Never use `*` with `Access-Control-Allow-Credentials: true`.
  - *Example*: `Access-Control-Allow-Origin: https://trusted.example.com`
- **Release gates**: Ensure no high or critical vulnerabilities are outstanding before release. Perform quick WSTG-based spot checks for new features.

## Runtime and Configuration Hardening

Securing the environment where your application runs.

- **TLS**: Enforce TLS 1.2 or higher. Use a tool like [SSL Labs Server Test](https://www.ssllabs.com/ssltest/) to check your configuration. Enable HSTS with preload for high-security sites.
- **Cookies & Sessions**: Set secure flags on cookies. Rotate session IDs on login or privilege changes.
  - *Example*: `Set-Cookie: sessionId=abc; HttpOnly; Secure; SameSite=Strict; Path=/;`
- **Headers**:
  - `Content-Security-Policy`: A strong CSP is one of the most effective ways to prevent XSS. Use nonces or hashes for inline scripts.
  - `X-Content-Type-Options: nosniff`: Prevents the browser from MIME-sniffing a response away from the declared content type.
  - `Permissions-Policy`: Restrict which browser features (e.g., camera, microphone, geolocation) the page can use.
  - `Referrer-Policy`: Control how much referrer information is sent with requests.
- **CORS**: Only allow trusted origins. Preflight requests should be enforced by the browser for non-simple requests.
- **Rate limiting & DoS**: Protect against brute-force and denial-of-service attacks by implementing rate limits on sensitive endpoints like login, password reset, and expensive API calls.
- **WAF/CDN**: Use a Web Application Firewall (WAF) to filter malicious traffic. A CDN can provide DDoS protection and performance benefits.
- **Egress control**: Restrict outbound network connections from your servers to only what is absolutely necessary. This can prevent data exfiltration and limit the impact of an SSRF vulnerability.
- **Secrets**: Fetch secrets at runtime from a vault. Use short-lived credentials and tokens where possible (e.g., AWS IAM roles, short-lived database credentials).
- **Observability**: Use structured logging (e.g., JSON) and forward logs to a centralized security monitoring system (SIEM). Alert on security-relevant events like authentication failures, privilege escalations, and spikes in 4xx/5xx errors.

## Area-by-Area Best Practices

### Authentication ([WSTG-ATHN](https://owasp.org/www-project-web-security-testing-guide/))
- **Centralize identity**: Use a dedicated, well-tested identity provider or library. Implement multi-factor authentication (MFA). Ensure password reset and account recovery flows are secure (e.g., using time-limited tokens sent to a verified email or phone).
- **Password storage**: Store password hashes using a memory-hard algorithm like [Argon2id](https://www.rfc-editor.org/rfc/rfc9106) (preferred) or bcrypt.
  ```go
  // Example using Go's bcrypt library
  hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
  ```
- **Throttling**: Throttle login attempts by IP address and username to slow down brute-force attacks. Implement account lockouts after a certain number of failed attempts.
- **Re-authentication**: Require users to re-enter their password before performing sensitive actions like changing their email address or deleting their account.

### Session Management ([WSTG-SESS](https://owasp.org/www-project-web-security-testing-guide/))
- **Session tokens**: Use high-entropy, randomly generated session IDs. Store them on the server-side (e.g., in a database or Redis cache). Avoid long-lived stateless tokens (like JWTs) for sessions unless you have a robust revocation strategy.
- **Cookie flags**:
  - `HttpOnly`: Prevents JavaScript from accessing the cookie, mitigating XSS.
  - `Secure`: Ensures the cookie is only sent over HTTPS.
  - `SameSite=Lax` or `Strict`: A primary defense against CSRF. `Lax` is a good default.
- **Lifecycle**: Invalidate session tokens on the server-side immediately upon logout or a password change. Consider expiring idle sessions after a reasonable period (e.g., 15-30 minutes for sensitive applications).

### Authorization & Access Control ([WSTG-ATHZ](https://owasp.org/www-project-web-security-testing-guide/), IDOR)
- **Server-side enforcement**: Authorization checks *must* be performed on the server. Never rely on hiding UI elements on the client, as an attacker can always craft their own requests.
- **Object-level checks (IDOR)**: Insecure Direct Object References (IDOR) are a common and severe vulnerability. On every request that accesses a resource by an ID, verify that the current user is authorized to access that specific resource.
  ```go
  // Vulnerable:
  func GetOrder(c *gin.Context) {
    orderID := c.Param("id")
    order := db.FindByID(orderID) // Attacker can request any order ID
    c.JSON(200, order)
  }

  // Secure:
  func GetOrder(c *gin.Context) {
    currentUser := c.MustGet("user").(User)
    orderID := c.Param("id")
    order := db.FindByID(orderID)
    if order.UserID != currentUser.ID { // Check ownership
      c.JSON(403, "Forbidden")
      return
    }
    c.JSON(200, order)
  }
  ```
- **Function-level checks**: Verify that the user's role permits them to perform the requested action (e.g., a `viewer` cannot `edit`).
- **Multi-tenant isolation**: In multi-tenant systems, ensure all database queries are strictly scoped to the current tenant ID to prevent data leakage between tenants.

### Input Validation & Output Encoding ([WSTG-INPV](https://owasp.org/www-project-web-security-testing-guide/), XSS)
- **Input validation**: Validate all incoming data on the server. Use an allowlist approach (i.e., accept only known-good values) and enforce strict types, formats, and length limits.
- **Output encoding**: Encode all data before it is rendered in a template to prevent Cross-Site Scripting (XSS). Rely on the automatic contextual encoding provided by modern templating frameworks.
  ```html
  <!-- Go's html/template automatically escapes data -->
  <!-- If userInput is "<script>alert(1)</script>", it will be rendered as text, not executed. -->
  <div>{{ .userInput }}</div>

  <!-- React also auto-escapes -->
  <div>{userInput}</div>
  ```
- **Untrusted HTML**: If you must render user-supplied HTML, sanitize it with a robust library like DOMPurify. Never use `innerHTML` or similar functions with unsanitized data.

### Injection: SQL/NoSQL/Command/Template/LDAP ([WSTG-INPV](https://owasp.org/www-project-web-security-testing-guide/), [WSTG-INJ](https://owasp.org/www-project-web-security-testing-guide/))
- **Parameterized queries**: The single most effective defense against SQL injection is to use parameterized queries (also called prepared statements). Never build queries by concatenating strings.
  ```go
  // Vulnerable to SQL Injection
  query := "SELECT * FROM users WHERE username = '" + username + "'"
  db.Query(query)

  // Secure using parameterized query
  db.Query("SELECT * FROM users WHERE username = ?", username)
  ```
- **Command injection**: Avoid calling shell commands with user input. If you must, use functions that handle argument escaping properly and avoid parsing the command as a single string.
- **ORM/DB Libraries**: Use Object-Relational Mapping (ORM) libraries or database drivers that provide safe, parameterized APIs by default.

### Cross-Site Request Forgery ([WSTG-CRS](https://owasp.org/www-project-web-security-testing-guide/))
- **Synchronizer tokens**: The most robust defense is the synchronizer token pattern. A unique, unpredictable token is embedded in each form, and the server validates this token upon submission.
- **SameSite cookies**: Use `SameSite=Strict` or `SameSite=Lax` on your session cookies. This is a powerful defense that instructs the browser not to send cookies on cross-origin requests. It should be used in addition to synchronizer tokens for defense-in-depth.
- **Check HTTP method**: Always ensure that state-changing actions are performed only via `POST`, `PUT`, `PATCH`, or `DELETE` requests, never `GET`.

### Deserialization and Data Parsing ([WSTG-DV](https://owasp.org/www-project-web-security-testing-guide/), XXE)
- **Avoid unsafe deserialization**: In languages like Java, C#, and PHP, deserializing untrusted data can lead to remote code execution. Avoid generic deserialization of objects. Use simple data formats like JSON and parse them into strongly-typed objects.
- **XML External Entities (XXE)**: If you must parse XML, configure your parser to disable resolution of external entities (XXE) and DTDs to prevent information disclosure and SSRF.

### File Uploads & Downloads ([WSTG-BUSL](https://owasp.org/www-project-web-security-testing-guide/))
- **Upload validation**:
  - Validate the file type on the server using its content (magic bytes), not just the `Content-Type` header or file extension.
  - Enforce strict size limits.
  - Scan uploaded files for malware.
- **Storage**:
  - Store uploaded files in a location outside the web root (e.g., an S3 bucket or a dedicated directory).
  - Assign a new, randomized filename to the stored file to prevent path traversal or execution attacks.
- **Downloads**: For file downloads, set the `Content-Disposition: attachment; filename="user-facing-name.ext"` header to prevent the browser from rendering the file inline, which can lead to XSS.

### SSRF and Server-Side Fetches ([WSTG-SSR](https://owasp.org/www-project-web-security-testing-guide/))
- **Server-Side Request Forgery (SSRF)**: Occurs when an attacker can trick the server into making a request to an arbitrary destination.
  ```go
  // Vulnerable: fetches any URL provided by the user
  url := c.Query("imageUrl")
  http.Get(url)
  ```
- **Mitigation**:
  - **Allowlist**: Maintain a strict allowlist of permitted domains, IPs, and ports the server can connect to. Deny by default.
  - **Block internal networks**: Explicitly block requests to private IP ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) and cloud metadata endpoints (e.g., `169.254.169.254`).

### Path Traversal & Resource Access ([WSTG-ATHZ](https://owasp.org/www-project-web-security-testing-guide/), [WSTG-ATHN](https://owasp.org/www-project-web-security-testing-guide/))
- **Path normalization**: If accessing files based on user input, normalize the path to resolve sequences like `../` and ensure it is still within the intended directory.
  - *Example Attack*: `?filename=../../../etc/passwd`

### Error Handling, Logging, and Privacy ([WSTG-INFO](https://owasp.org/www-project-web-security-testing-guide/), [WSTG-CONF](https://owasp.org/www-project-web-security-testing-guide/))
- **Generic errors**: Show generic, non-technical error messages to the user.
  - **Bad**: `FATAL: connection to database "prod_db" failed: password authentication failed for user "webapp"`
  - **Good**: `An unexpected error occurred. Please try again. (Error ID: 9f4e1a2b)`
- **Structured logging**: Log security-relevant events in a structured format like JSON. Redact all sensitive data (passwords, PII, API keys) from logs.

### Cryptography & Data Protection ([WSTG-CRYP](https://owasp.org/www-project-web-security-testing-guide/))
- **Use standard libraries**: Use well-vetted, standard cryptographic libraries for your language. Do not invent your own crypto.
- **Modern algorithms**: Use modern, authenticated encryption (AEAD) ciphers like AES-256-GCM or ChaCha20-Poly1305.
- **Key management**: Encrypt sensitive data both in transit (TLS) and at rest (database/disk encryption). Use a dedicated Key Management Service (KMS) or Hardware Security Module (HSM) to manage encryption keys.

### Browser and Platform Security ([WSTG-CLNT](https://owasp.org/www-project-web-security-testing-guide/))
- **Content Security Policy (CSP)**: A strong CSP is a critical defense against XSS. Start with a strict policy and use nonces or `strict-dynamic` for scripts.
- **Clickjacking defense**: Use the `Content-Security-Policy: frame-ancestors 'self'` header (or the older `X-Frame-Options: SAMEORIGIN`) to prevent your site from being embedded in an iframe on a malicious site.
- **Subresource Integrity (SRI)**: When loading scripts or styles from a third-party CDN, use SRI to ensure the file has not been tampered with.
  `<script src="https://example.com/library.js" integrity="sha384-..." crossorigin="anonymous"></script>`

### CORS ([WSTG-CONF](https://owasp.org/www-project-web-security-testing-guide/))
- **Explicit allowlist**: Your server should respond with an `Access-Control-Allow-Origin` header that specifies the exact origin(s) allowed.
- **Credentials**: If you must set `Access-Control-Allow-Credentials: true`, the `Access-Control-Allow-Origin` header *cannot* be a wildcard (`*`). It must be an explicit origin.

### API (REST/GraphQL) Specifics ([WSTG-API](https://owasp.org/www-project-web-security-testing-guide/))
- **Schema validation**: Strictly validate all incoming requests against a defined schema. Reject any requests with unknown or malformed parameters.
- **Resource limiting**: Implement pagination on all endpoints that return lists of data. Limit the size and complexity of API requests to prevent denial-of-service.
- **GraphQL security**:
  - **Query depth/complexity limiting**: Prevent expensive, deeply nested queries that could overwhelm your database.
  - **Disable introspection**: Turn off GraphQL introspection in production environments to avoid leaking schema information.
  - **Authorization**: Implement authorization checks at the resolver level for each field.

### Secrets and Supply Chain ([WSTG-CONF](https://owasp.org/www-project-web-security-testing-guide/))
- **Central secret store**: Use a vault for all secrets. Your CI/CD pipeline, infrastructure, and applications should all fetch secrets from this central store at runtime.
- **Supply chain**:
  - **Signed builds**: Sign your build artifacts to ensure their integrity.
  - **SBOM**: Generate a Software Bill of Materials (SBOM) for your applications to inventory all dependencies.
  - **Image scanning**: Scan container images for known vulnerabilities before deploying them.

### CI/CD & Infrastructure
- **Least-privilege CI/CD**: CI/CD jobs should run with the minimum permissions needed. Use short-lived, scoped tokens for deployments.
- **Branch protections**: Enforce branch protection rules on your main branch, requiring mandatory code reviews and passing CI checks before merging.
- **Container security**:
  - **Minimal images**: Use minimal base images (e.g., `distroless`, `alpine`).
  - **Non-root user**: Run your application as a non-root user inside the container.
  - **Read-only rootfs**: Configure the container's root filesystem to be read-only where possible.
- **Network policies**: Use Kubernetes network policies or cloud security groups to restrict traffic between services (east-west) and from the internet (north-south).

## Pre-Release Test Checklist (mapping to WSTG)

- **Recon & Info**: review exposed endpoints, metadata, headers (WSTG-INFO)
- **Authn/Authz**: test login flows, MFA, password reset, IDOR, function-level authz (WSTG-ATHN/ATHZ)
- **Session**: cookie flags, rotation, invalidation (WSTG-SESS)
- **Input/Output**: XSS (reflected/stored/DOM), template injection, encoding (WSTG-INPV/CLNT)
- **Injection**: SQL/NoSQL/command/LDAP/ORM; path traversal (WSTG-INJ)
- **CSRF**: token presence/validation; method safety; SameSite (WSTG-CRS)
- **Files**: upload/download handling; MIME/extension; storage location (WSTG-BUSL)
- **SSRF/XXE**: deny internal targets; parser hardening (WSTG-SSR/XXE)
- **Config**: headers, CORS, TLS, error messages, directory listing (WSTG-CONF)
- **API**: schema validation, rate limiting, error handling, GraphQL limits (WSTG-API)

## References

- OWASP Web Security Testing Guide v4.2 — Detailed test cases for every category listed above ([OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/))
- OWASP Application Security Verification Standard — A catalog of security requirements to build into your development process ([OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/))
- OWASP Cheat Sheet Series — Concise, actionable guidance on specific security topics ([OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/))
