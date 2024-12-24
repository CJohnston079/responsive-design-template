import "./app/scss/style.scss";

console.log("Hello world!");

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

const openMobileMenu = () => btnOpen.setAttribute("aria-expanded", "true");
const openCloseMenu = () => btnOpen.setAttribute("aria-expanded", "false");

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", openCloseMenu);
