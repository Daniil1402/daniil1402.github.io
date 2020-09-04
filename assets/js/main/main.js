//menu
const headerMenu = document.querySelector(".headerTop");
const headerNav = headerMenu.querySelector(".headerTop__nav");
const headerButton = headerMenu.querySelector("#menu");
const body = document.querySelector("body");
const lang = document.querySelector(".lang");

headerButton.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  headerButton.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.style.overflowY = body.style.overflowY === "hidden" ? "auto" : "hidden";
  lang.classList.toggle("active");
});
