import "./app/scss/style.scss";
import { enableBodyScroll } from "body-scroll-lock";
import { disableBodyScroll } from "body-scroll-lock";

console.log("Hello world!");

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const overlay = document.querySelector("#overlay");
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
	menuTopNav.style.transitionDuration = "400ms";
	overlay.style.transitionDuration = "400ms";
	disableBodyScroll(menuTopNav);
};

const closeMobileMenu = function () {
	btnOpen.setAttribute("aria-expanded", "false");
	menuTopNav.setAttribute("inert", "");
	enableBodyScroll(menuTopNav);

	setTimeout(() => {
		menuTopNav.removeAttribute("style");
		overlay.removeAttribute("style");
	}, 400);
};

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
breakpoint.addEventListener("change", setupTopNav);

setupTopNav();
