document.addEventListener("DOMContentLoaded", async () => {
  const navbarDiv = document.getElementById("navbar");
  if (!navbarDiv) return;

  // Load the navbar HTML
  const response = await fetch("navbar.html");
  const html = await response.text();
  navbarDiv.innerHTML = html;

  // Wait a moment for the HTML to be inserted
  setTimeout(() => {
    const menuBtn = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }, 50);
});
