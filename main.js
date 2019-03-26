// HAMBURGER MENU
const burgerMenu = document.querySelector(".menu__hamburger");
const burgerOpen = document.querySelector(".fa-bars");
const burgerClose = document.querySelector(".fa-times");
const navMenu = document.querySelector(".menu__nav");

burgerMenu.addEventListener('click', () => {
    burgerOpen.classList.toggle("show");
    burgerClose.classList.toggle("show");
    navMenu.classList.toggle("show__nav")
})