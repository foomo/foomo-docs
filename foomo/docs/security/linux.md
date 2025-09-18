---
title: Linux Security
slug: /security/linux
authors: [philipp]
---

## Overview

This document provides a baseline for hardening Linux servers and workstations. It focuses on practical, enforceable security controls that protect against common threats. The recommendations are distribution-agnostic where possible, but may include examples for Debian-based and RHEL-based systems.

## Table of Contents

- [Overview](#overview)
- [Linux Security Foundations](#linux-security-foundations)
- [Opinionated Baseline](#opinionated-baseline-what-we-enforce)
  - [User and Access Management](#user-and-access-management)
  - [System and Software Updates](#system-and-software-updates)
  - [Filesystem and Data Encryption](#filesystem-and-data-encryption)
  - [Network Security](#network-security)
  - [Secure Configurations](#secure-configurations)
  - [Logging and Monitoring](#logging-and-monitoring)
- [Quick Reference Checklists](#quick-reference-checklists)

## Linux Security Foundations

Linux's security model is built on a mature, multi-user architecture with robust permissions and process isolation. Key foundations include:
- **Open-Source Transparency**: The source code for the kernel and most system components is publicly available for scrutiny, enabling rapid discovery and patching of vulnerabilities by a global community.
- **Principle of Least Privilege**: The user/group/other permission model for files and the distinction between user and root (`sudo`) privileges are core to limiting the impact of a compromise.
- **Security Modules (LSM)**: Frameworks like [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) and [AppArmor](https://en.wikipedia.org/wiki/AppArmor) provide Mandatory Access Control (MAC) to enforce fine-grained restrictions on what processes are allowed to do, even if running as root.
- **Namespaces and Cgroups**: These kernel features are the foundation of containerization technologies like Docker, providing process, network, and filesystem isolation.

## Opinionated Baseline (what we enforce)

Harden in layers: identity, system state, data, network, and logging. Use configuration management tools (e.g., Ansible, Puppet) to apply and verify settings at scale.

### User and Access Management

- [ ] **Enforce Least Privilege**: Users should operate as non-root accounts. Use `sudo` for administrative tasks with a restrictive `sudoers` configuration.
- [ ] **Centralized Authentication**: Use a system like OpenLDAP or an identity provider (IdP) integration via SSSD/PAM to manage user accounts and enforce consistent policies.
- [ ] **Strong Password Policies**: Enforce password complexity, length, and history requirements using `pam_pwquality` or similar modules.
- [ ] **Multi-Factor Authentication (MFA)**: Require MFA for SSH and console logins, especially for privileged accounts. Use tools like `libpam-google-authenticator` or commercial solutions.
- [ ] **Monitor User Activity**: Log all login attempts, `sudo` usage, and significant commands. Forward these logs to a central SIEM.
- [ ] **Disable Guest Account**: Ensure no default or guest accounts are active.
- [ ] **SSH Hardening**:
  - [ ] Disable root login (`PermitRootLogin no`).
  - [ ] Use key-based authentication; disable password authentication (`PasswordAuthentication no`).
  - [ ] Use a non-standard port if security-through-obscurity is part of the strategy.
  - [ ] Configure `AllowUsers` or `AllowGroups` to restrict who can log in.

### System and Software Updates

- [ ] **Automate Patching**: Configure the system to automatically install critical security updates.
  - Debian/Ubuntu: `unattended-upgrades`
  - RHEL/CentOS: `dnf-automatic`
- [ ] **Regularly Review Updates**: While automated, have a process to review applied patches and manually handle updates that require service restarts or further configuration.
- [ ] **Minimize Software Installation**: Only install necessary packages. A smaller footprint reduces the attack surface.

### Filesystem and Data Encryption

- [ ] **Full-Disk Encryption (FDE)**: Use LUKS (Linux Unified Key Setup) during installation to encrypt the entire disk for physical security, especially on laptops.
- [ ] **Encrypt Backups**: Ensure all backup data is encrypted both in transit and at rest. Use tools with built-in encryption like BorgBackup or Duplicity.
- [ ] **Strict File Permissions**:
  - [ ] Set restrictive default permissions with `umask` (e.g., `027`).
  - [ ] Regularly audit for world-writable files or incorrect ownership.
  - [ ] Use `chattr` to make critical files immutable (`+i`) where appropriate.
- [ ] **Use Access Control Lists (ACLs)**: For complex permissions scenarios, use filesystem ACLs (`getfacl`, `setfacl`) to grant specific users/groups access without altering base permissions.

### Network Security

- [ ] **Implement a Host-Based Firewall**: Configure `iptables`, `nftables`, or `firewalld` to block all incoming traffic by default and only allow required services.
- [ ] **Secure Network Services**:
  - [ ] Ensure services are bound only to necessary network interfaces.
  - [ ] Disable or uninstall unused network services (e.g., `telnetd`, `rshd`).
- [ ] **Monitor Network Connections**: Use tools like `netstat` or `ss` to regularly check for unexpected listening ports or active connections.
- [ ] **Use VPNs**: For remote access or communication over untrusted networks, use a VPN like OpenVPN or WireGuard.

### Secure Configurations

- [ ] **Implement Mandatory Access Control (MAC)**:
  - [ ] Use SELinux (on RHEL-based systems) or AppArmor (on Debian/SUSE-based systems) in `enforcing` mode.
  - [ ] Use or develop policies to confine critical services, especially those exposed to the network.
- [ ] **Harden System Configurations**:
  - [ ] Apply security settings to the kernel via `/etc/sysctl.conf` (e.g., disable IP forwarding if not a router, enable TCP SYN cookies).
  - [ ] Secure shared memory (`/dev/shm`).
- [ ] **Leverage Configuration Management**: Use tools like Ansible to apply a consistent, secure baseline to all systems and prevent configuration drift.

### Logging and Monitoring

- [ ] **Enable Comprehensive Logging**: Configure `rsyslog` or `journald` to capture logs from all relevant services.
- [ ] **Centralize Logs**: Forward logs from all systems to a central SIEM for aggregation, correlation, and alerting.
- [ ] **Use `auditd`**: The Linux Audit Daemon can be configured to log specific events required for compliance or threat hunting, such as file access, use of specific system calls, or security attribute modifications.
- [ ] **Deploy an EDR Agent**: For critical systems, deploy an Endpoint Detection and Response agent that can detect and respond to threats in real-time.

## Quick Reference Checklists

### Minimum Baseline (must-have)

- [ ] SSH hardened (keys only, no root login)
- [ ] Automated security updates enabled
- [ ] Host-based firewall active (default deny)
- [ ] Strong password policy enforced, with MFA for privileged access
- [ ] Unnecessary services and software removed
- [ ] Centralized logging configured
- [ ] Users operate as non-root with `sudo`

### Nice-to-Have (should-have)

- [ ] Full-disk encryption (especially for laptops)
- [ ] MAC enabled (SELinux/AppArmor in enforcing mode)
- [ ] `auditd` configured for critical event logging
- [ ] EDR agent deployed
- [ ] Regular vulnerability scanning

## Further Reading

- [Passwords](./passwords.md)

### See Also

- [DNS Security](./dns.md)
