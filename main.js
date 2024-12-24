import "./app/scss/style.scss";

console.log("Hello world!");

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const breakpoint = window.matchMedia("(width < 43.75em)");

const setupTopNav = () => {
	if (breakpoint.matches) {
		menuTopNav.setAttribute("inert", "");
	} else {
		menuTopNav.removeAttribute("inert");
	}
};

const openMobileMenu = function () {
	btnOpen.setAttribute("aria-expanded", "true");
	menuTopNav.removeAttribute("inert");
};

const openCloseMenu = function () {
	btnOpen.setAttribute("aria-expanded", "false");
	menuTopNav.setAttribute("inert", "");
};

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", openCloseMenu);
breakpoint.addEventListener("change", setupTopNav);

setupTopNav();
