# Security Policy

## Supported Scope

If you discover a security vulnerability, please report it responsibly by emailing:
- Please include as much detail as possible (steps to reproduce, affected files, browser/environment info).
**📧 chris.hack01@gmail.com**

We appreciate responsible disclosure and will respond promptly.

## Policy Location

This repository follows the [RFC 9116](https://datatracker.ietf.org/doc/html/rfc9116) standard.

**Security.txt File:**  
https://hackat1.github.io/.well-known/security.txt

_Note: Full compliance requires a custom domain name. Until one is configured, some clients may not detect the security.txt file due to GitHub Pages URL limitations._

- **HTTPS Enforced:** GitHub Pages is configured to force HTTPS for all visitors.  
- **2FA Enabled:** All repository administrators are required to use Two-Factor Authentication.  
- **Branch Protections:** Main branch is protected; pull requests are required for changes.  
- **Content Security Policy (CSP):** Restrictive policy in place to prevent unauthorized script execution.  
- **Referrer Policy:** Set to `no-referrer` to limit information leakage (may change if integrations are added).  
- **Permissions Policy:** Opted out of browser features like geolocation, camera, microphone, and fullscreen.  
- **X-Frame-Options:** `DENY` to prevent clickjacking.  
- **X-Content-Type-Options:** `nosniff` to protect against MIME-sniffing attacks.  
- **Robots.txt:** Explicitly allows crawling of public pages; `security.txt` is accessible.  
- **Security.txt:** Available at [`/.well-known/security.txt`](https://hackat1.github.io/.well-known/security.txt) to support responsible disclosure.

## Additional Security Headers

This site implements common security headers:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-UA-Compatible: IE=edge`
- `Referrer-Policy: no-referrer`
- `Permissions-Policy: geolocation=(), camera=(), microphone=(), interest-cohort=()`
- `Content-Security-Policy: default-src 'self'; style-src 'self' fonts.googleapis.com; font-src fonts.gstatic.com;`

## No User Data Collected

This site does not collect, process, or store user information. GDPR, SOC 2, and CCPA compliance are currently not applicable.

## Robots & Sitemap

- `robots.txt` is configured to allow full crawling and references the `sitemap.xml`.
- `sitemap.xml` is available at:  
  https://hackat1.github.io/sitemap.xml

## Future Considerations
- Integration with third-party services (e.g., QuickBooks) may require updates to referrer and CSP policies.  
- A formal vulnerability disclosure program (VDP) may be considered as the site expands.
