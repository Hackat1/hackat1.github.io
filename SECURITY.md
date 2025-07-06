# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability related to this website, please report it directly to:

📧 **chris.hack01@gmail.com**

We take all reports seriously and aim to respond within **48 hours**.

---

## Current Security Measures

The Vincent Buchan Bookkeeping website is static (HTML/CSS only) and follows industry-recommended security practices:

- ✅ HTTPS enforced via GitHub Pages
- ✅ Two-Factor Authentication (2FA) enabled on the GitHub account
- ✅ Strong GitHub branch protection rules (PRs required for changes, linear history disabled)
- ✅ `Content-Security-Policy` header in use to limit resource loading
- ✅ `Referrer-Policy` set to `no-referrer` to avoid leaking origin data
- ✅ `Permissions-Policy` limits browser feature access
- ✅ No external JavaScript or third-party scripts used
- ✅ `robots.txt` allows crawl access; no sensitive directories present
- ✅ `.well-known/security.txt` implemented (pending full RFC compliance on custom domain)
- ✅ All fonts served via Google Fonts only (no additional external assets)

---

## Planned Improvements

- Add a custom domain name to enable full `.well-known` support
- Implement Subresource Integrity (SRI) if/when third-party scripts are used
- Conduct periodic accessibility and security audits as new content is added

---

_Last updated: July 2025_
