'use strict';

//select the button
/* document.querySelector('.toggle').addEventListener('click', () => {
    console.log("To vivo..")
}) */

// first select the button and save it into a const.

const myButton = document.querySelector('.toggle');
const myList = document.querySelector('.lista');
const answer = document.querySelector('.after');


myList.addEventListener('click', (event) => {
    answer.innerHTML = `fui para ${event.target.innerText}`
})

myButton.addEventListener('click', () => {
    myList.classList.toggle('hidden')
})