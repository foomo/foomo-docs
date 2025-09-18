---
title: DNS
slug: /security/dns
authors: [philipp]
---

# DNS Security

A simple yet effective measure to enhance your online privacy and security is by using a secure DNS resolver. This can help block malicious websites, trackers, and ads.

## Home Network Solutions

For those who want more control over their home network, setting up a dedicated ad-blocking DNS server is a great option.

### Pi-hole

[Pi-hole](https://pi-hole.net/) is a popular open-source network-wide ad blocker. It acts as a DNS sinkhole, meaning it intercepts DNS queries and blocks those for known ad-serving domains. It can be installed on a Raspberry Pi or any other low-power computer on your network.

### AdGuard Home

[AdGuard Home](https://adguard.com/adguard-home.html) is another excellent option. Similar to Pi-hole, it's a network-wide ad and tracker blocker. It offers a user-friendly interface and can be run on various platforms.

## Public DNS Resolvers

If you prefer a simpler solution that doesn't require setting up your own hardware, you can use a public, privacy-focused DNS resolver. You can configure this on your router to protect your whole network, or on individual devices.

### DNS4EU

[DNS4EU](https://www.joindns4.eu/for-public#resolver-options) is a privacy-focused DNS resolver based in Europe, compliant with GDPR. It offers various resolver options, including ones that block ads and trackers.

### Quad9

[Quad9](https://quad9.net) is a free, recursive, anycast DNS platform that provides end users with robust security protections, high-performance, and privacy. It blocks lookups of malicious host names from an up-to-the-minute list of threats. It is also known for its speed.
