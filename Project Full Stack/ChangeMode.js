// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateButtonState(newTheme);
}

// Function to update button state (active/inactive)
function updateButtonState(theme) {
    const toggleBtn = document.querySelector(".theme-toggle-btn");

    if (toggleBtn) {
        if (theme === "light") {
            toggleBtn.textContent = "🌙"; // Moon icon for dark mode
        } else {
            toggleBtn.textContent = "☀️"; // Sun icon for light mode
        }
    }
}

// Load theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    updateButtonState(savedTheme);
}

// Add event listener to the toggle button
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();

    const toggleBtn = document.querySelector(".theme-toggle-btn");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleTheme);
    }
});