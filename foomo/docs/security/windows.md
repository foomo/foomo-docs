---
title: Windows Security
slug: /security/windows
authors: [philipp]
---

## Overview

This document provides a high-level overview of Windows security hardening, with a focus on leveraging community-driven configurations. Unlike macOS and Linux, which are often hardened from a minimal baseline, Windows security can be significantly improved by applying comprehensive security templates and scripts.

This guide is primarily based on the principles and tools provided by the [Harden-Windows-Security](https://github.com/HotCakeX/Harden-Windows-Security) project. It is recommended to thoroughly read and understand the project's documentation before applying any configurations.

## Core Principles

- **Reduce Attack Surface**: Disable unnecessary features, services, and applications that could serve as entry points for attackers.
- **Enforce Strong Policies**: Use Group Policy, AppLocker, and other Windows features to enforce strict rules about what users and applications can do.
- **Leverage Built-in Security Features**: Maximize the use of Windows Defender, BitLocker, Controlled Folder Access, and other native security controls.
- **Automate and Standardize**: Use scripts and configuration management to apply a consistent and repeatable security baseline to all Windows systems.

## Recommended Implementation

The `Harden-Windows-Security` repository provides a collection of PowerShell scripts, Group Policy templates, and configuration files to automate the hardening process.

### Key Features from the Project:

- **Comprehensive Security Policies**: Hundreds of settings covering Group Policy, PowerShell configurations, and Windows Defender hardening.
- **Threat Mitigation**: Includes rules and settings to block common attack vectors, malware, and potentially unwanted programs (PUPs).
- **Usability vs. Security Profiles**: The project offers different levels of hardening, allowing administrators to choose a balance between maximum security and user convenience.
- **Regular Updates**: The project is actively maintained to adapt to new threats and changes in the Windows operating system.

### How to Use

1.  **Read the Documentation**: Start by reading the `README.md` and associated documentation in the [Harden-Windows-Security GitHub repository](https://github.com/HotCakeX/Harden-Windows-Security). Understand the different profiles and what each setting does.
2.  **Test in a Non-Production Environment**: **Do not** apply these settings directly to production machines. Test them thoroughly on a virtual machine or a dedicated test computer to ensure they do not break critical applications or workflows.
3.  **Choose a Profile**: Select a hardening profile from the repository that matches your organization's security requirements.
4.  **Deploy Systematically**: Use a phased approach to roll out the changes. Start with a small group of users and gradually expand the deployment.
5.  **Monitor and Audit**: After deployment, continuously monitor system logs and use security auditing tools to verify that the policies are being enforced correctly and are not causing unintended side effects.

## Quick Reference Checklist

This checklist summarizes the areas covered by the `Harden-Windows-Security` project. Refer to the project for detailed implementation steps.

- [ ] **System Hardening**:
  - [ ] Apply security-focused Group Policies.
  - [ ] Disable legacy protocols and features (e.g., SMBv1, PowerShell v2).
  - [ ] Harden Task Scheduler and other system components.
- [ ] **Application Control**:
  - [ ] Use AppLocker or Windows Defender Application Control (WDAC) to restrict application execution.
  - [ ] Block commonly exploited applications (e.g., legacy script hosts).
- [ ] **Data Protection**:
  - [ ] Enable BitLocker full-disk encryption.
  - [ ] Enable Controlled Folder Access to protect against ransomware.
- [ ] **Microsoft Defender Suite**:
  - [ ] Maximize Defender Antivirus protection levels.
  - [ ] Enable Attack Surface Reduction (ASR) rules.
  - [ ] Configure Defender Firewall with a default-deny policy.
- [ ] **Privacy**:
  - [ ] Disable non-essential telemetry and data collection.

## References

- [Harden-Windows-Security GitHub Repository](https://github.com/HotCakeX/Harden-Windows-Security)

## Further Reading

- [Passwords](./passwords.md)
- **Windows Subsystem for Linux (WSL)**: Consider using [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to have a Linux environment directly on Windows.

### See Also

- [DNS Security](./dns.md)
