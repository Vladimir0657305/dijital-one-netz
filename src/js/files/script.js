// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

var headerR = document.querySelector('.header');
var headerLogo = document.querySelector('.header-logo');
var headerMenu = document.querySelector('.header-menu');
var iconMenu = document.querySelector('.icon-menu');

window.onscroll = function () { myFunction() };
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 70 && winScroll < 150) {
        headerR.style.background = '#ffffff';
        // headerMenu.style.color = '#212529';
        headerMenu.style.setProperty('--headerMenuBackgroundColor', "#212529");
        headerMenu.style.setProperty('--headerMenuHover', "#007bff");
        headerLogo.style.color = '#007bff';
        iconMenu.style.setProperty('--iconMenuBackgroundColor', "#000");
    }
    else if (winScroll > 150) {
        headerR.style.background = '#ffffff';
        // headerMenu.style.color = '#212529';
        headerMenu.style.setProperty('--headerMenuBackgroundColor', "#212529");
        headerMenu.style.setProperty('--headerMenuHover', "#007bff");
        headerR.style.paddingTop = 10 + "px";
        headerR.style.paddingBottom = 10 + "px";
        headerLogo.style.color = '#007bff';
        iconMenu.style.setProperty('--iconMenuBackgroundColor', "#000");
    }
    else {
        headerR.style.background = 'transparent';
        headerMenu.style.setProperty('--headerMenuBackgroundColor', "rgba(255, 255, 255, 0.7)");
        headerMenu.style.setProperty('--headerMenuHover', "#fff");
        headerR.style.paddingTop = 20 + "px";
        headerR.style.paddingBottom = 20 + "px";
        headerLogo.style.color = '#ffffff';
        iconMenu.style.setProperty('--iconMenuBackgroundColor', "#fff");
    }
}

// Animation
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activetextmain');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_activetextmain');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}