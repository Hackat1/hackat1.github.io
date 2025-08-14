document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", isOpen);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#navLinks a[href]");
  const here = new URL(location.href);

  // Normalize paths by removing a trailing "index.html"
  const norm = (u) => u.pathname.replace(/index\.html$/i, "").replace(/\/+$/, "");

  links.forEach((a) => {
    const target = new URL(a.getAttribute("href"), here);
    const isCurrent = norm(target) === norm(here);
    a.toggleAttribute("aria-current", isCurrent);
  });
});