import '../libss/bootstrap/bootstrap-reboot.min.css';
import '../libss/bootstrap/bootstrap-grid.min.css';
import "./index.html";
import "./blog-page.html";
import './main.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
var swiper = new Swiper('.swiper-container', {
    modules: [Navigation],
    loop: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
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
var textElement = document.getElementById('myText');
var textElement2 = document.getElementById('myText2');
var blockScroll = document.getElementById('handle');
var blockScroll2 = document.getElementById('handle2');
var blockScroll3 = document.getElementById('drumsss');
var leftImage = document.getElementById('leftImage');
var rightImage = document.getElementById('rightImage');
function handleScroll() {
    var targetBlockPosition = blockScroll.offsetTop;
    var targetBlockPosition2 = blockScroll2.offsetTop;
    var targetBlockPosition3 = blockScroll3.offsetTop;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= targetBlockPosition) {
        textElement.style.opacity = String(1);
    }
    else {
        textElement.style.opacity = String(0);
    }
    if (scrollPosition >= targetBlockPosition2) {
        textElement2.style.opacity = String(1);
        leftImage.style.left = String('60px');
        rightImage.style.right = String('175px');
    }
    else {
        leftImage.style.left = String();
        rightImage.style.right = String();
        textElement2.style.opacity = String(0);
    }
}
window.addEventListener('scroll', handleScroll);
var playButton = document.getElementById('playButton');
var videoPlayer = document.getElementById('videoPlayer');
playButton.addEventListener('click', function () {
    videoPlayer.src += '?autoplay=1';
    playButton.style.position = 'static';
});
