// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle
const darkModeToggleDesktop = document.getElementById("dark-mode-toggle");
const darkModeToggleMobile = document.getElementById("dark-mode-toggle-mobile");

// Function to apply dark mode based on current state
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  if (darkModeToggleDesktop) darkModeToggleDesktop.textContent = "☀️";
  if (darkModeToggleMobile) darkModeToggleMobile.textContent = "☀️";
  localStorage.setItem("dark-mode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  if (darkModeToggleDesktop) darkModeToggleDesktop.textContent = "🌙";
  if (darkModeToggleMobile) darkModeToggleMobile.textContent = "🌙";
  localStorage.setItem("dark-mode", "disabled");
}

// Load dark mode preference on page load
if (localStorage.getItem("dark-mode") === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Event listeners for toggles
if (darkModeToggleDesktop) {
  darkModeToggleDesktop.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}

if (darkModeToggleMobile) {
  darkModeToggleMobile.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}

// BACK TO TOP BUTTON
let mybutton = document.getElementById("myBtn");

// Show button on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top on button click
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
