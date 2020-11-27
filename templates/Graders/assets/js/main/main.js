//social button
const socialMenu = document.querySelector(".headerTop__contacts");
const socialNav = socialMenu.querySelector(".headerTop__social");
const socialButton = socialMenu.querySelector("#button");

socialButton.addEventListener("click", function () {
  socialNav.classList.toggle("active");
  socialButton.classList.toggle("active");
});

//menu
const headerMenu = document.querySelector(".headerTop__nav");
const headerNav = headerMenu.querySelector("#headerNav");
const headerButton = headerMenu.querySelector("#menu");
const body = document.querySelector("body");
//let overflowBody = document.body.style.overflowY;

headerButton.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  headerButton.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.style.overflowY = body.style.overflowY === "hidden" ? "auto" : "hidden";
});
