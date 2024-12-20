const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  themeLabel.textContent =
    themeLabel.textContent === "Dark mode" ? "Light mode" : "Dark mode";
});
