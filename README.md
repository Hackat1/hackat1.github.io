# Vincent Buchan Bookkeeping Website

This repository contains the static website for **Vincent Buchan Bookkeeping**, a small business offering personalized bookkeeping services for individuals and small businesses. The site is designed to be clean, responsive, accessible, and easy to maintain.

---

## 🌐 Live Site

The site is currently hosted via **GitHub Pages** at:

**[https://hackat1.github.io](https://hackat1.github.io)**

This will be updated once a custom domain is implemented.

---

## 📁 Project Structure

📁 root/
├─ index.html # Homepage
├─ about.html # About Us page
├─ /assets/ # Images, icons, logos
├─ /styles/ # Custom CSS
├─ /.well-known/ # security.txt and other standards
├─ robots.txt # SEO crawler rules
├─ SECURITY.md # Responsible disclosure policy
└─ README.md # Project overview

---

## 🛡️ Security

This site follows key security best practices:

- Enforced HTTPS via GitHub Pages
- 2FA and branch protections enabled
- No third-party JavaScript
- `<meta>` security headers set:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `X-UA-Compatible: IE=edge`
  - `Referrer-Policy: no-referrer`
  - `Permissions-Policy: accelerometer=(), camera=(), geolocation=(), microphone=(), interest-cohort=()`
- CSP enforced via `<meta http-equiv="Content-Security-Policy">`
- [security.txt](https://hackat1.github.io/.well-known/security.txt) implemented per [RFC 9116](https://datatracker.ietf.org/doc/html/rfc9116)
  - Note: GitHub Pages subdomains may not fully support `.well-known/` detection until a custom domain is used.

For full details, see [`SECURITY.md`](./SECURITY.md).

---

## 👁️‍🗨️ Accessibility

This site is built with accessibility in mind and has been tested using modern Lighthouse accessibility standards.

- Semantic HTML with clear heading structure
- Color contrast meets WCAG AA compliance
- Keyboard navigation is supported
- ARIA labels added to navigation elements
- Responsive layout for all screen sizes
- `<meta name="referrer" content="no-referrer">` for added privacy

See [`accessibility.md`](accessibility.md) for a detailed summary of audit results and ongoing improvements.

---

## 🗼 Lighthouse Scores

This site is regularly audited for performance, accessibility, best practices, and SEO.

### 📱 Mobile
- **Performance**: 91
- **Accessibility**: 100
- **Best Practices**: 82
- **SEO**: 100

### 🖥️ Desktop
- **Performance**: 100
- **Accessibility**: 100
- **Best Practices**: 81
- **SEO**: 100

Scores reflect results from the July 7, 2025 audit. See [`accessibility.md`](accessibility.md) for audit history and remediation notes.

---

## 🔎 Search Engine Optimization (SEO)

This site is indexable and optimized for search engines:

- Descriptive `<title>` and `<meta name="description">` tags
- Open Graph and Twitter Card metadata for link sharing
- Sitemap.xml and robots.txt included
- Mobile-friendly and fast-loading for SEO compliance
- `robots.txt` allows crawling of all public content  
- `sitemap.xml` is available at [https://hackat1.github.io/sitemap.xml](https://hackat1.github.io/sitemap.xml)  
- Google Search Console verified via meta tag

---

## 🔒 Responsible Disclosure

If you discover a vulnerability, please report it privately via email:

📧 **chris.hack01@gmail.com**

We ask that you do not open public issues for security matters.

---

## 👥 Contributing

This repository is not currently accepting public contributions or deployments.

Future deployment and CI/CD automation will be handled privately by the project maintainers.

---

## 📌 Goals & Future Plans

- Add certification badges (e.g., QuickBooks Level 2)
- Display testimonials
- Optimize further for performance and accessibility
- Set up a custom domain (with `.well-known` compliance)
- Optional analytics and contact form integration

---

## 🧾 License

This site and its code are intended for internal use and business promotion by Vincent Buchan Bookkeeping. Licensing will be defined if/when the codebase is opened for reuse or collaboration.

---
