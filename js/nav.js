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
  const path = location.pathname.replace(/\/+$/, ""); // strip trailing slash
  const current = path === "" || path === "/" ? "index.html" : path.split("/").pop();

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === current || (current === "index.html" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
});