function toggleMenu() {
  const links = document.getElementById('navLinks');
  const button = document.querySelector('.hamburger');
  const isOpen = links.classList.toggle('show');
  button.setAttribute('aria-expanded', isOpen);
}