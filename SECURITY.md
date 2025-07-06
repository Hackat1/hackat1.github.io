# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly by emailing:

**📧 chris.hack01@gmail.com**

We appreciate responsible disclosure and will respond promptly.

---

## Policy Location

This repository follows the [RFC 9116](https://datatracker.ietf.org/doc/html/rfc9116) standard.

**Security.txt File:**  
https://hackat1.github.io/.well-known/security.txt

_Note: Full compliance requires a custom domain name. Until one is configured, some clients may not detect the security.txt file due to GitHub Pages URL limitations._

---

## Additional Security Headers

This site implements common security headers:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-UA-Compatible: IE=edge`
- `Referrer-Policy: no-referrer`
- `Permissions-Policy: geolocation=(), camera=(), microphone=(), interest-cohort=()`
- `Content-Security-Policy: default-src 'self'; style-src 'self' fonts.googleapis.com; font-src fonts.gstatic.com;`

---

## Robots & Sitemap

- `robots.txt` is configured to allow full crawling and references the `sitemap.xml`.
- `sitemap.xml` is available at:  
  https://hackat1.github.io/sitemap.xml
