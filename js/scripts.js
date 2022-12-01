const header_btn = document.querySelector(".header__button");
const nav = document.querySelector("nav");

header_btn.addEventListener("click", () => {
	nav.classList.toggle("hidden");
});
