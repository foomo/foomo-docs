---
title: macOS Security
slug: /security/macos
authors: [philipp]
---

## Overview

This document distills the macOS security model and recommended hardening practices into an actionable baseline for corporate Macs. It synthesizes Apple’s platform assurances with practical configuration guidance you can enforce via MDM.

- Sources referenced:
  - [Apple Platform Security Guide (macOS)](https://support.apple.com/guide/security/welcome/web)
  - [macOS Security and Privacy Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide)

## How to use this document

- Skim the Table of Contents to jump to what you need.
- Start with the Opinionated Baseline and apply via your MDM. Layer on role‑specific items.
- New to macOS security? Follow the inline links and short explanations next to key terms.

## Table of Contents

- [Overview](#overview)
- [How to use this document](#how-to-use-this-document)
- [Objectives and Scope](#objectives-and-scope)
- [Apple Platform Foundations](#apple-platform-foundations-what-macos-gives-you)
- [Opinionated Baseline](#opinionated-baseline-what-we-enforce)
  - [Baseline for All Corporate Macs](#baseline-for-all-corporate-macs)
  - [Additional Hardening for Admins and Developers](#additional-hardening-for-admins-and-developers)
  - [High-Risk or Data-Critical Roles](#high-risk-or-data-critical-roles)
- [Third-Party Security Tools](#third-party-security-tools)
- [Commercial Security Tools](#commercial-security-tools)
- [Operational Playbooks](#operational-playbooks-condensed)
- [Implementation Notes](#implementation-notes-mdm-first)
- [Quick Reference Checklists](#quick-reference-checklists)
- [References](#references)

## Objectives and Scope

- Protect corporate and user data by securing devices at rest and in transit, restricting lateral movement on the network, and preventing malware execution.
- Preserve user privacy while enabling essential productivity, IT support, and security observability.
- Prefer native, built-in macOS security controls. Use a Mobile Device Management (MDM) solution to enforce a secure-by-default posture that is centrally managed and auditable.

## Apple Platform Foundations

- Hardware Root of Trust and [Secure Boot](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_Boot): The system validates that only legitimate, Apple-signed code runs at startup, preventing boot-level malware from taking hold.
- [Secure Enclave](https://en.wikipedia.org/wiki/Apple_Silicon#Security_and_privacy) (SEP) and keybags: A dedicated hardware security processor that handles cryptographic operations for sensitive data like FileVault keys, Keychain items, and Touch ID, isolating them from the main OS.
- [System Integrity Protection](https://en.wikipedia.org/wiki/System_Integrity_Protection) (SIP) and code signing enforcement: Protects critical system files, processes, and kernel extensions from modification, even by the root user, and blocks unauthorized low-level code.
  ```bash
  # Check if SIP is enabled (System Integrity Protection)
  csrutil status
  # Expected output: System Integrity Protection status: enabled.
  ```
- [Gatekeeper](https://en.wikipedia.org/wiki/Gatekeeper_(macOS)) and [Notarization](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution): Before a downloaded app runs for the first time, Gatekeeper verifies that it’s from an identified developer and has been notarized by Apple—an automated check for malicious content.
- [App Sandbox](https://developer.apple.com/documentation/security/app_sandbox) and entitlements: Applications from the App Store are sandboxed, meaning they are restricted in their access to system resources and user data. They must declare required permissions (entitlements), limiting the potential damage if compromised.
- [Transparency, Consent, and Control](https://support.apple.com/en-gb/guide/security/secddd1d86a6/web) (TCC): The system prompts the user for explicit permission before an app can access sensitive data or services, such as the camera, microphone, location, contacts, or screen recording.
- [XProtect](https://support.apple.com/en-gb/guide/security/sec469d47bd8/web) and Apple malware removal: macOS includes built-in, signature-based antivirus capabilities that silently check for and block/remove known malware in the background. Apple pushes updates to it automatically.
- Full‑disk encryption ([FileVault](https://en.wikipedia.org/wiki/FileVault)): Provides strong, hardware-accelerated AES-XTS 256-bit encryption for the entire startup disk, protecting all data at rest. If a device is lost or stolen, the data is unreadable without the user's password or a secure recovery key.

## Opinionated Baseline

Harden in layers: identity, device state, data protections, network posture, app controls, and telemetry. Use MDM to apply and verify settings at scale.

### Baseline for All Corporate Macs

- Identity and Enrollment
  - [ ] Device enrolled in [MDM](https://en.wikipedia.org/wiki/Mobile_device_management) via Automated Device Enrollment ([Apple Business Manager (ABM)](https://www.apple.com/business/it/)/[Apple School Manager (ASM)](https://www.apple.com/education/schools/)) with supervision. This non-removable management profile ensures devices are corporate-owned and configured securely from their very first boot (zero-touch deployment).
  - [ ] Enforce compliant posture to access corporate resources (Single Sign-On (SSO), Multi-Factor Authentication (MFA), device compliance). For example, access to cloud apps can require that the device is managed, has FileVault enabled, and is running a recent OS version.

- Disk and Data Protection
  - [ ] Enable [FileVault](https://en.wikipedia.org/wiki/FileVault) (FV2) on all Macs; escrow recovery key to MDM/key escrow service. This ensures data at rest is encrypted. Escrowing the key allows IT to perform data recovery if a user forgets their password.
    ```bash
    # Check FileVault status
    fdesetup status
    # Expected output: FileVault is On.
    ```
  - [ ] Enforce strong passcode/password policy; disable automatic login. Example policy: require at least 12 characters, including mixed case, numbers, and symbols.
  - [ ] Require screen lock with password after sleep/screensaver (≤ 5 minutes). This minimizes the window for unauthorized access when a device is left unattended.
  - [ ] Encrypt [Time Machine](https://support.apple.com/en-us/HT201250) backups; restrict to approved destinations only, such as a designated, encrypted network share, to prevent data leakage via backups.

- Software Update and Patching
  - [ ] Enable automatic OS updates, app updates, background updates, and Rapid Security Responses (RSR). Timely patching is one of the most effective security measures. Rapid Security Responses are a new type of software release for macOS, iOS and iPadOS. They deliver important security improvements between software updates – for example, improvements to the Safari web browser, the WebKit framework stack, or other critical system libraries. They may also be used to mitigate some security issues more quickly, such as issues that might have been exploited or reported to exist “in the wild.”
    ```bash
    # Manually check for available software updates
    softwareupdate -l
    ```
  - [ ] Define maximum deferral windows and install deadlines via MDM. For example, allow users to defer a critical update for 3 days, after which installation is forced. This balances convenience with security.

- Account Model
  - [ ] Users operate as Standard accounts; use Just-In-Time (JIT) elevation or a separate, dormant Admin account. This enforces the principle of least privilege. Administrative tasks should require temporary, auditable privilege elevation.
  - [ ] Block local account creation outside IT workflows; disable Guest account. This prevents users from creating unauthorized accounts to bypass controls. The Guest account provides an unmanaged access vector and should be disabled.
    ```bash
    # Disable the guest account from the command line
    sudo dscl . -create /Users/guest UserShell /usr/bin/false
    sudo dscl . -create /Users/guest Password '*'
    ```

- Network and Sharing
  - [ ] Enable Application Firewall and Stealth Mode; block incoming connections by default. Stealth Mode prevents the Mac from responding to network probes (like pings), making it less visible.
    ```bash
    # Check Firewall status
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
    # Check Stealth Mode status
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getstealthmode
    ```
  - [ ] Disable Internet Sharing, Printer Sharing, Screen Sharing, Remote Apple Events by default. These services can create security holes if misconfigured and should only be enabled when explicitly required.
    ```bash
    # Example: Disable Screen Sharing
    sudo launchctl disable system/com.apple.screensharing
    ```
  - [ ] AirDrop set to Contacts Only (or Disabled for high-risk roles) to prevent receiving unsolicited, potentially malicious files from unknown sources.
  - [ ] Bluetooth restricted to approved peripherals; auto-disconnect when unused. Consider disabling discoverability when not actively pairing.

- Application Controls
  - [ ] [Gatekeeper](https://en.wikipedia.org/wiki/Gatekeeper_(macOS)) set to “App Store and identified developers”; require notarization. This should be enforced by MDM to prevent users from downgrading the setting.
    ```bash
    # Check Gatekeeper status
    spctl --status
    # Expected output: assessments enabled
    ```
  - [ ] Block legacy kernel extensions; prefer [System Extensions](https://developer.apple.com/documentation/systemextensions); approve only vetted Team IDs. Legacy kernel extensions (kexts) are being phased out. Modern System Extensions run in a more restricted userspace environment.
  - [ ] Privacy Preferences Policy Control (PPPC)/TCC: grant Full Disk Access, Accessibility, Screen Recording only to required tools (e.g., Endpoint Detection and Response (EDR)). Manage Privacy Preferences Policy Control (PPPC) centrally to grant powerful permissions sparingly and only to vetted security or IT support tools.
  - [ ] Application allow/deny lists managed by MDM for sensitive roles. For high-risk roles, an allow-list that only permits approved applications to run provides a very strong defense against untrusted code.

- Browser and Content Protections
  - [ ] Phishing/malware site warnings enabled; pop-ups and insecure plug-ins blocked. These are standard features in modern browsers (e.g., Google Safe Browsing) and should be enforced.
  - [ ] Enforce safe defaults via managed browser policies (Safari/Chrome/Firefox). For example, use MDM to block risky browser extensions, disable automatic downloads, and configure privacy settings.

- Privacy Protections (TCC)
  - [ ] Location, camera, microphone, screen recording, calendar/contacts: deny by default; allow per role via MDM profiles where possible.
  - [ ] Limit analytics/diagnostics sharing to minimum necessary; disable ad personalization.

- Telemetry, Detection, and Response
  - [ ] Deploy managed Endpoint Detection and Response (EDR)/Extended Detection and Response (XDR) using Apple’s [Endpoint Security](https://developer.apple.com/documentation/endpointsecurity) framework; verify coverage. An EDR agent is crucial for detecting and responding to advanced threats that bypass preventative controls.
  - [ ] Enable unified logging collection for security‑relevant events; forward to a [SIEM](https://en.wikipedia.org/wiki/Security_information_and_event_management). Centralize macOS logs in a SIEM to enable threat hunting, incident investigation, and compliance monitoring.
    ```bash
    # Example: stream logs in real-time to view security-related events
    log stream --predicate 'subsystem == "com.apple.security"'
    ```
  - [ ] Enable audit policy ([auditd](https://en.wikipedia.org/wiki/Auditd)) with a minimal, targeted ruleset where required by compliance. `auditd` provides detailed event logging but can be verbose; use it to meet specific requirements (e.g., PCI-DSS) rather than for general monitoring.

### Additional Hardening for Admins and Developers

- [ ] Stronger password policy and shorter screen-lock timers (e.g., 1 minute).
- [ ] Restrict developer tool entitlements (e.g., debugging, task_for_pid) to approved workflows. For example, the `get-task-allow` entitlement, which allows other processes to attach to an app, must be disabled for all production-signed software.
- [ ] Isolate build chains and package managers; verify signatures; prefer reproducible builds. Use tools like Docker or Nix to create isolated build environments. Always verify dependency signatures (e.g., using `npm audit` or checking GPG signatures).
- [ ] Limit container/VM networking and host mounts; disable privileged containers. By default, containers should not have access to the host network or sensitive file system locations. Always run containers as a non-root user.
- [ ] Rosetta installation only if required; remove when no longer needed. Rosetta 2, which enables Intel-based apps to run on Apple Silicon, increases the attack surface and should only be installed if absolutely necessary.
  ```bash
  # Check if Rosetta 2 is installed
  /usr/bin/pgrep -q oahd && echo "Rosetta 2 is installed" || echo "Rosetta 2 is not installed"
  ```

#### Uninstalling Rosetta 2

If Rosetta 2 is no longer required, you can uninstall it to reduce the system's attack surface. This process requires temporarily disabling System Integrity Protection (SIP).

**1. Disable SIP (System Integrity Protection)**

1.  Boot into Recovery Mode.
2.  Open a terminal (`Utilities > Terminal`).
3.  Disable SIP:
    ```bash
    csrutil disable
    ```
4.  Reboot into macOS.

**2. Uninstall Rosetta**

1.  List all files associated with the Rosetta package:
    ```bash
    pkgutil --files com.apple.pkg.RosettaUpdateAuto
    ```
2.  Carefully delete all the files and empty directories listed by the previous command.
3.  Remove the package receipt:
    ```bash
    sudo rm /Library/Apple/System/Library/Receipts/com.apple.pkg.RosettaUpdateAuto.*
    ```
    Alternatively, try to forget the package (this may not always work):
    ```bash
    sudo pkgutil --forget com.apple.pkg.RosettaUpdateAuto
    ```

**3. Enable SIP**

1.  Boot into Recovery Mode again.
2.  Open a terminal.
3.  Enable SIP:
    ```bash
    csrutil enable
    ```
4.  Confirm with `y` if prompted.
5.  Reboot into macOS.

*Source: [gist.github.com/p-mng](https://gist.github.com/p-mng/af31593eb2a65f39bcca9e4d2b8e)*

### High-Risk or Data-Critical Roles

- [ ] AirDrop disabled; external storage blocked or read-only; enforce USB device policy. Use MDM to control USB devices, for example by only allowing approved, encrypted storage.
- [ ] Network egress filtering/DNS filtering; VPN required; per-app VPN for sensitive tools. Use a network filter to block connections to known malicious domains. A per-app VPN can ensure that only specific, approved applications can access sensitive internal resources.
- [ ] Screen recording disabled except for approved collaboration tools.
- [ ] Camera/microphone disabled unless explicitly needed.

## Third-Party Security Tools

While macOS provides a strong security foundation, a layered defense is always best. The following free, open-source tools from [Objective-See](https://objective-see.org/tools.html) provide excellent visibility into system internals and can help detect advanced threats. All tools are open-source and available on [GitHub](https://github.com/objective-see).

- **LuLu**: A free, open-source firewall to monitor and block outgoing network connections.
- **Do Not Disturb**: Detects and alerts on physical access ("evil maid") attacks.
- **KnockKnock**: Uncovers persistently installed software to generically reveal malware.
- **TaskExplorer**: Visually explores all running processes, their signature status, loaded libraries, open files, and network connections.
- **ReiKey**: Scans for and detects persistent keyboard "event taps" that could be used to intercept keystrokes.
- **Netiquette**: A network monitor to inspect all sockets and connections.
- **BlockBlock**: Monitors persistence locations and alerts on any new persistent component.
- **RansomWhere?**: Generically stops ransomware by monitoring the file-system for the creation of encrypted files by suspicious processes.
- **OverSight**: Monitors a Mac's microphone and webcam, alerting when they are activated.
- **KextViewr**: Displays all loaded kernel extensions and their signing status.
- **Dylib Hijack Scanner**: Scans for applications susceptible to or already hijacked via dylib hijacking.
- **What's Your Sign**: A Finder extension to display code-signing information for any file.

## Commercial Security Tools

For on-demand scanning and removal of malware, adware, and potentially unwanted programs (PUPs), the following tool is highly recommended.

- **[Malwarebytes for Mac](https://www.malwarebytes.com)**: Provides a free, reputable on-demand scanner that can detect and remove threats that may be missed by built-in macOS protections. While it offers a premium real-time protection service, the free scanner is an excellent tool for periodic system health checks or for remediating an existing infection.
- **[Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)**: An advanced, host-based application firewall that allows you to monitor and control all outgoing network connections from your Mac. It excels at detecting and blocking malware that tries to phone home.
- **[Micro Snitch](https://www.obdev.at/products/microsnitch/index.html)**: A lightweight menu bar utility that monitors your Mac's microphone and camera activity. It provides an immediate notification and logs any activity, helping you detect if any application is secretly recording audio or video.

## Operational Playbooks

- Lost or Stolen Mac
  - [ ] Immediately mark device lost in MDM; enable Activation Lock and Lost Mode; attempt remote lock/wipe
  - [ ] Revoke tokens and sessions; monitor for access attempts; rotate keys if needed

- Malware Detection
  - [ ] EDR should isolate the host from the network. Collect triage artifacts (e.g., running processes, network connections) via MDM/EDR tooling. Eradicate the threat and reimage the machine if persistence is suspected.
  - [ ] Validate Gatekeeper/Notarization settings; review recent downloads and quarantine flags.

- Major OS Upgrade
  - [ ] Preflight compatibility checks (apps, drivers, security tools)
  - [ ] Staged rollout with telemetry gates; enforce install by deadline

- Offboarding
  - [ ] Disable accounts/tokens; revoke device compliance; remote wipe or reassign after backup/escrow.

## Implementation Notes

- Use Automated Device Enrollment and supervision to lock down Setup Assistant and require MDM profiles at first boot. This prevents users from bypassing enrollment.
- Enforce FileVault with personal recovery key escrow and, if policy requires, an institutional key held in a secure [HSM](https://en.wikipedia.org/wiki/Hardware_security_module)-backed secret manager.
- Manage TCC via Privacy Preferences Policy Control (PPPC) profiles; scope highly privileged grants *only* to tools that absolutely require them (like EDR).
- Prefer System Extensions and Network/System Content Filters; block and avoid legacy kernel extensions.
- Use Configuration Profiles for Firewall, Gatekeeper, Restrictions, and Software Updates; verify with compliance rules and periodic audits.

## Quick Reference Checklists

### Minimum Baseline

- [ ] MDM enrollment and supervision
- [ ] FileVault enabled with escrowed recovery key
- [ ] Automatic OS/app/Rapid Security Response (RSR) updates
- [ ] Standard user accounts; no auto-login; Guest disabled
- [ ] Firewall + Stealth Mode enabled; sharing services off
- [ ] Gatekeeper/Notarization enforced; no legacy kexts
- [ ] EDR deployed and reporting; logs forwarded

### Advanced Defense

- [ ] DNS/content filtering for phishing/malware
- [ ] Encrypted Time Machine backups to approved targets
- [ ] Keep Privacy Preferences Policy Control (PPPC) grants to a minimum
- [ ] Browser hardening via managed policies

### Team-Specific

- [ ] Developer entitlements and tools managed; signed artifacts; Software Bill of Materials (SBOMs)
- [ ] High-risk roles: removable media controls, stricter TCC, per-app VPN

## References

- [Apple Platform Security Guide](https://support.apple.com/guide/security/welcome/web)
- [macOS Security and Privacy Guide (GitHub)](https://github.com/drduh/macOS-Security-and-Privacy-Guide)
- [Jamf Pro Security Documentation](https://www.jamf.com/resources/product-documentation/jamf-pro-security-overview/)

## Further Reading

- [Passwords](./passwords.md)

### See Also

- [DNS Security](./dns.md)


