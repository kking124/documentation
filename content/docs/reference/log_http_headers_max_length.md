---
id: log-http-headers-max-length
title: Log HTTP Headers Max Length
description: |
  Set the maxium character length for the additional HTTP headers that pomerium logs.
keywords:
  - reference
  - Log HTTP Headers Max Length
pagination_prev: null
pagination_next: null
---

# Log HTTP Headers Max Length

- Environmental Variable: `LOG_HTTP_HEADERS_MAX_LENGTH`
- Config File Key: `log_http_headers_max_length`
- Kubernetes: not supported
- Type: `int`
- Default: `32`

Log HTTP Headers Max Length sets the maximum character length for the additional headers logged by pomerium. To disable the limit, set the value to `0`.
