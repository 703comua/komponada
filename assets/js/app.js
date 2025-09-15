const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerSvg = burger.querySelector("svg");
const burgerIcon = burger.querySelector("use");
const navLinks = document.querySelectorAll(".nav__link");

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

    document.body.classList.toggle("lock-scroll", isOpen);
});

// обработка кликов по ссылкам меню
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // отменяем стандартный резкий переход
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // плавный скролл
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        // закрываем меню и разблокируем body
        nav.classList.remove("nav--open");
        document.body.classList.remove("lock-scroll");
        burgerIcon.setAttribute("xlink:href", burger.dataset.iconOpen);
        burgerSvg.setAttribute("width", "24");
        burgerSvg.setAttribute("height", "18");
        burger.setAttribute("aria-expanded", false);
        burger.setAttribute("aria-label", "Open menu");
    });
});