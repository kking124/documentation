---
id: dns-lookup-family
title: DNS Lookup Family
description: |
  The DNS IP address resolution policy.
keywords:
  - reference
  - DNS Lookup Family
pagination_prev: null
pagination_next: null
---

# DNS Lookup Family

- Environmental Variable: `DNS_LOOKUP_FAMILY`
- Config File Key: `dns_lookup_family`
- Kubernetes: not supported
- Type: `string`
- Options: `AUTO` `V4_ONLY` `V6_ONLY` `V4_PREFERRED` `ALL`
- Optional

The DNS IP address resolution policy. If not specified, the value defaults to `V4_PREFERRED`.
