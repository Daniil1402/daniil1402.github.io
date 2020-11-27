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
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
  lang.classList.toggle("active");
});

// const transitionButton = headerNav.querySelectorAll("a");

headerNav.addEventListener("click", function (evt) {
  if (!evt.target.className) {
    headerMenu.classList.remove("active");
    headerNav.classList.remove("active");
    headerButton.classList.remove("active");
    body.style.overflow = "auto";
    lang.classList.remove("active");
  }
});
