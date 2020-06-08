'use strict';

let today = new Date();
let booking = new Date(2019, 7, 20);
const objectOne = (today, booking) => {

    if (booking < today) {
        console.log('Select a future date.');
    } else if (booking === today || booking > today) {
        console.log('Avalible.')
    }
}
objectOne(today, booking);