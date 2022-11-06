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
            const animItemHeight = animItem.offsetHeight; // получаем высоту объекта
            const animItemOffset = offset(animItem).top; // позиция объекта относительно верха
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;  // высота окна броузера - минус высоту объекта делим на коэф.
            if (animItemHeight > window.innerHeight) { // проверяем чтобы объект не был больше окна броузера
                animItemPoint = window.innerHeight - window.innerHeight / animStart; // если да, то от высоты окна броузера минусуем высоту окна броузера, деленную на коэф.
            }

            // если проскролили больше чем позиция объека минус точка старта, но меньше чем позиция объекта плюс его высота
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
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

// Portfolio Filter Start ============================================================================
var filterBox = document.querySelectorAll('.box');
var portfolioButton = document.querySelectorAll('.portfolio-button');
document.querySelector('.portfolio-nav').addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['filter'];
    let portfolioButtonTarget = event.target;
    
    portfolioButton.forEach(elem => elem.classList.remove('portfolioActive'))
    portfolioButtonTarget.classList.add('portfolioActive');

    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    })
});
// Portfolio Filter End ==============================================================================