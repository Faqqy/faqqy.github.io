import bootstrap from '../libss/bootstrap/bootstrap-reboot.min.css';
import bootstrapGrid from '../libss/bootstrap/bootstrap-grid.min.css';
import html from "./index.html";
import htmlBlog from "./blog-page.html";
import css from './main.css';
import Swiper from 'swiper';
import {Navigation,Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const scrollingTextRight = Array.from(document.querySelectorAll('.scrollJsText'));

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
});

scrollingTextRight.forEach((element) => {
    window.addEventListener('scroll', (e) => {
        e = window.scrollY;
        if(e > 450 && e < 1250) {
            element.style.transform = 'translateX(' + e + 'px)';
        } else {
            element.style.transform = '';
        }
    });
})









