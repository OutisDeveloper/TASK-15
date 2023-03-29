const sidebar = document.querySelector("body");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});