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


const clickCards = document.querySelectorAll(".items__grid");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("overlay__modal");
const body = document.getElementById("page");

function clearModalContent() {
    [...modal.children].forEach((element) => element.remove())
}
function openModal(text) {
    clearModalContent()
    const div = document.createElement('div')
    div.textContent = text
    modal.prepend(div)
    modal.classList.add('opened')
    modalOverlay.classList.add('opened')
    body.classList.add('overflowActive')
}

clickCards.forEach((items) => {
    items.addEventListener('click', (event) => {
        if (event.target.classList.contains('text')) {
            const textElement = event.target.textContent
            openModal(textElement)
        }
    })
})

document.addEventListener('click',(event) => {
    const isModalOpened = event.target.classList.contains('opened')
    const isCardClicked = event.target.classList.contains('text')
    if (!isCardClicked && isModalOpened) {
        modal.classList.remove('opened')
        modalOverlay.classList.remove('opened')
        body.classList.remove('overflowActive')
    }
})

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
})








