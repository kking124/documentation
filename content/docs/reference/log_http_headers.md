---
id: log-http-headers
title: Log HTTP Headers
description: |
  Configure additional HTTP headers for pomerium to log.
keywords:
  - reference
  - Log HTTP Headers
pagination_prev: null
pagination_next: null
---

# Log HTTP Headers

- Environmental Variable: not currently available
- Config File Key: `log_http_headers`
- Kubernetes: not currently available
- Type: array of case-insensitive http header names as `string`
- Options: `none`, any `string`
- Excluded: `service`, `upstream-cluster`, `method`, `authority`, `path`, `user-agent`, `referer`, `forwarded-for`, `request-id`

Set the list of additional HTTP headers you wish to log on requests. The excluded list is a list of values already logged; they will be ignored if included in the list. If you put `none` in the list, none of the additional headers will be logged.

For example:

```yaml
log_http_headers:
  - Geolocation
  - X-Amzn-Trace-Id
  - User-Agent
```

This configuration will add `Geolocation` and `X-Amzn-Trace-Id` to an http request log if they are present in the request. `User-Agent` is ignored because it is already logged in the request. 

```yaml
log_http_headers:
  - Geolocation
  - X-Amzn-Trace-Id
  - User-Agent
  - none
```

The above example will log no additional headers because the `none` keyword is present.
