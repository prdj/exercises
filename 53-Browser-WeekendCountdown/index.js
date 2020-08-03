'use strict';


let msg = document.querySelector(".msg")
let form = document.querySelector("form")
let inp = document.querySelector("input")
let dayName= (new Date()).toLocaleDateString('en-EN', {weekday:'long'})
console.log(dayName);

function changeMsg(event) {
    event.preventDefault();
    if (inp.value !== '') {
        msg.innerHTML = `Hello ${inp.value}. Today is ${dayName}. Only ${5 - (new Date()).getDay()} days left until weekend!`
        inp.value = '';
    } 
};

form.addEventListener('submit', changeMsg)