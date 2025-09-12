const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerSvg = burger.querySelector("svg");
const burgerIcon = burger.querySelector("use");

// пути можно хранить в data-* атрибутах прямо в HTML
burger.dataset.iconOpen = "./assets/svg/sprite.svg#burger";
burger.dataset.iconClose = "./assets/svg/sprite.svg#burger-close";

burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");

    burgerIcon.setAttribute("xlink:href", isOpen ? burger.dataset.iconClose : burger.dataset.iconOpen);

    burgerSvg.setAttribute("width", isOpen ? "18" : "24");
    burgerSvg.setAttribute("height", "18");

    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
