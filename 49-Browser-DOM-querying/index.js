'use strict';

// Body
let body = document.querySelector('body');
body.style.fontFamily = "Arial";
// Head
let h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
// class = category.
let sectionHeadings = document.getElementsByClassName('category');

for (let i = 0; i < sectionHeadings.length; i++) {
    sectionHeadings[i].style.fontSize = '2rem';
    sectionHeadings[i].style.textDecoration = 'underline';
    sectionHeadings[i].style.fontStyle = 'italic';

}


