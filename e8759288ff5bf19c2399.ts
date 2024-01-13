import '../libss/bootstrap/bootstrap-reboot.min.css';
import '../libss/bootstrap/bootstrap-grid.min.css';
import "./index.html";
import "./blog-page.html";
import './main.css';
import Swiper from 'swiper';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
document.addEventListener('mousemove', function (e) {
    Object.assign(document.documentElement, {
        style: "\n        --move-x: ".concat((e.clientX - window.innerWidth / 2) * -.005, "deg;\n        --move-y: ").concat((e.clientY - window.innerHeight / 2) * -.01, "deg;\n        ")
    });
});
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        var lamp = entry.target.querySelector('.idea__block--img');
        var marquee = entry.target.querySelector('.marquee__block-text');
        var marquee2 = entry.target.querySelector('.marquee__block-text2');
        var tablets = entry.target.querySelector('.tablets__square');
        if (entry.isIntersecting) {
            lamp.classList.add('lamp-animation');
            marquee.classList.add('marqueeAnim');
            marquee2.classList.add('marqueeAnim');
            tablets.classList.add('tabletsAnim');
            return;
        }
        lamp.classList.remove('lamp-animation');
        marquee.classList.remove('marqueeAnim');
        marquee2.classList.remove('marqueeAnim');
        tablets.classList.remove('tabletsAnim');
    });
});
observer.observe(document.querySelector('.wrapper__container--idea'));
// const scrollingTextRight = Array.from(document.querySelectorAll('.scrollJsText'));
// scrollingTextRight.forEach((element: HTMLElement) => {
//     window.addEventListener('scroll', (e: Event) => {
//             const scrollY: number = window.scrollY;
//             if (scrollY > 450 && scrollY < 600) {
//                 element.style.transform = 'translateX(' + scrollY + 'px)';
//             } else {
//                 element.style.transform = '';
//             }
//     });
// });
