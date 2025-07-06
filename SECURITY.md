# Security Policy

## Supported Scope

This security policy applies to the public-facing Vincent Buchan Bookkeeping website, hosted via GitHub Pages at [https://hackat1.github.io](https://hackat1.github.io). This includes the HTML/CSS source code in this repository, excluding GitHub infrastructure itself.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately and responsibly.

- **Contact:** chris.hack01@gmail.com  
- Please include as much detail as possible (steps to reproduce, affected files, browser/environment info).

We will aim to acknowledge receipt of reports within 2 business days.

## Security Measures in Place

We actively maintain and review this site’s security posture. The following measures are currently in place:

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

## No User Data Collected

This site does not collect, process, or store user information. GDPR, SOC 2, and CCPA compliance are currently not applicable.

## Future Considerations

- Integration with third-party services (e.g., QuickBooks) may require updates to referrer and CSP policies.  
- A formal vulnerability disclosure program (VDP) may be considered as the site expands.
