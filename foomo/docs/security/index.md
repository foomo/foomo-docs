---
id: index
sidebar_position: 0
---

# Security

Secure software development is a practice that integrates security considerations into every phase of the software development lifecycle (SDLC). The goal is to build resilient and robust software that can withstand attacks, protect user data, and maintain the integrity of the systems it runs on. This involves a shift from a reactive "patch-on-breach" model to a proactive, "secure-by-design" approach. By thinking about potential threats and building defenses from the very beginning, we can reduce vulnerabilities, mitigate risks, and create more trustworthy products. This guide provides an overview of various security domains, from organizational policies to specific hardening techniques for different platforms and technologies.

## Table of Contents

- [Containers](./containers.md) - Best practices for securing Docker containers, covering the entire lifecycle from building hardened, minimal images to securing the runtime environment and managing data safely.
- [DNS](./dns.md) - Explains how to enhance online privacy and security by using secure DNS resolvers, covering home network solutions like Pi-hole and public resolvers like Quad9.
- [Kubernetes](./kubernetes.md) - A comprehensive guide to Kubernetes security, detailing how to secure control plane components, implement network policies, harden workloads with admission controllers, and manage secrets and data.
- [Linux](./linux.md) - A baseline for hardening Linux systems, focusing on user and access management, automated patching, filesystem encryption, network security with host-based firewalls, and logging.
- [macOS](./macos.md) - Actionable guidance for securing corporate Macs by leveraging native platform features like FileVault, Gatekeeper, and System Integrity Protection, enforced through a Mobile Device Management (MDM) solution.
- [Organization](./organization.md) - Outlines a holistic security program, defining core pillars like Identity and Access Management (IAM), Application Security (AppSec), and Incident Response, with maturity milestones and checklists for governance.
- [Passwords](./passwords.md) - Provides guidance on creating strong, secure passwords, explaining the importance of length, complexity, and uniqueness, and recommends using password managers and two-factor authentication.
- [Pentests](./pentests.md) - A pragmatic guide to penetration testing methodology, covering planning, reconnaissance, exploitation, and reporting for web applications, APIs, and networks, aligned with OWASP standards.
- [Web Development](./web-development.md) - Engineering-focused best practices for building secure web applications, covering the secure SDLC, defense-in-depth principles, and specific controls for mitigating common vulnerabilities like XSS, SQLi, and CSRF.
- [Windows](./windows.md) - A high-level guide to hardening Windows security, centered on applying comprehensive security templates and scripts to reduce the attack surface, enforce strong policies, and leverage built-in controls like Defender and BitLocker.
