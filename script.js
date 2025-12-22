// Hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Load preference on page load
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️";
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkModeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkModeToggle.textContent = "🌙";
  }
});
