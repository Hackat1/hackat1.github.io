document.addEventListener("DOMContentLoaded", function () {
  const user = "Deidre.Buchan";
  const domain = "gmail.com";
  const email = user + "@" + domain;
  const link = "mailto:" + email;
  const buttonLabel = "Schedule a Consultation";

  // Insert CTA button
  const emailSpan = document.getElementById("email");
  if (emailSpan) {
    emailSpan.innerHTML =
      '<a href="' + link + '" class="cta-button" title="Opens your email app">' + buttonLabel + '</a>';
  }

  // Insert fallback email text
  const fallbackSpan = document.getElementById("fallback-email");
  if (fallbackSpan) {
    fallbackSpan.textContent = email;
  }
});