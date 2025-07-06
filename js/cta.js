document.addEventListener("DOMContentLoaded", function () {
  const user = "Deidre.Buchan";
  const domain = "gmail.com";
  const link = "mailto:" + user + "@" + domain;
  const buttonLabel = "Schedule a Consultation";
  document.getElementById("email").innerHTML =
    '<a href="' + link + '" class="cta-button">' + buttonLabel + '</a>';
});
