"use strict";

const nextRead = document.querySelectorAll(".items__grid--item");
const nextReadPopup = document.querySelectorAll(".popupFromCards");
const activeClass = 'active';

function closePopups() {
    nextReadPopup.forEach(popup => {
        popup.classList.remove(activeClass);
    });
}

document.addEventListener('click', function(event) {
    const isClickInsidePopup = Array.from(nextRead).some(popup => popup.contains(event.target));
    const isClickInsideTrigger = Array.from(nextReadPopup).some(trigger => trigger === event.target);

    if (!isClickInsidePopup && !isClickInsideTrigger) {
        closePopups();
    }
});

function handleClick() {
    nextReadPopup.forEach(function(element) {
        element.classList.remove(activeClass);
    });
    const index = Array.from(nextRead).indexOf(this);
    nextReadPopup[index].classList.add(activeClass);
}

nextRead.forEach(function(element) {
    element.addEventListener('click', handleClick);
});





