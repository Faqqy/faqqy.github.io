"use strict";

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







