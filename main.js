import "./app/scss/style.scss";
import { enableBodyScroll } from "body-scroll-lock";
import { disableBodyScroll } from "body-scroll-lock";

const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
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
	main.setAttribute("inert", "");
	footer.setAttribute("inert", "");
	menuTopNav.style.transitionDuration = "400ms";
	overlay.style.transitionDuration = "400ms";
	disableBodyScroll(menuTopNav);
	btnClose.focus();
};

const closeMobileMenu = function () {
	btnOpen.setAttribute("aria-expanded", "false");
	menuTopNav.setAttribute("inert", "");
	main.removeAttribute("inert");
	footer.removeAttribute("inert");
	enableBodyScroll(menuTopNav);
	btnOpen.focus();

	setTimeout(() => {
		menuTopNav.removeAttribute("style");
		overlay.removeAttribute("style");
	}, 400);
};

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
breakpoint.addEventListener("change", setupTopNav);

setupTopNav();
