'use strict';

let today = new Date();
let day = today.getDay();

/* let week = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]; */

const weekDay = (today, day) => {

    if (today >= 1 && today <= 5) {
        console.log('It is weekend.');
    } else {
        console.log('Not a weekend day.')
    }
}

weekDay(today, day);