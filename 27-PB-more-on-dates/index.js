'use strict';

let today = new Date();
let days = today.getDate();
let remainder = today.getUTCMonth();


const getRemainder = (today, days, remainder) => {

    if (remainder === 1) {
        console.log(days - 28);
    } else if (remainder === 3 || remainder === 5 || remainder === 8 || remainder === 10) {
        console.log(30 - days);
    } else {
        console.log(31 - days);
    }
}

getRemainder(today, days, remainder);