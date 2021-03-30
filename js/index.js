const menu = document.querySelector(".nav");
const btnMenu = document.querySelector(".nav__menu");

btnMenu.addEventListener('click', function(){
    menu.classList.add("menu__open");
});