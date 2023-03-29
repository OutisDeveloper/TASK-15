const sidebar = document.querySelector("body");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const body = document.body;
const modeToggle = document.querySelector("#light");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
});