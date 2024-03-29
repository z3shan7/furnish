import { CountUp } from './countUp.min.js';

const navlinkEls = document.querySelectorAll('.navbar__navLinks');
const windowPathname = window.location.pathname;

navlinkEls.forEach(navlinkEl => {
    const navLinkPathname = new URL(navlinkEl.href).pathname;


    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navlinkEl.classList.add('active')
    }
})


// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         links.forEach((link) => {
//             link.classList.remove('active');
//         });
//         e.preventDefault();
//         link.classList.add('active');
//     });
// });



const menuBtn = document.querySelector('.navbar__menuBtn')
const list = document.querySelector('.navbar__list')

menuBtn.addEventListener('click', () => {
    list.classList.toggle('show-links')

})


window.onload = function () {
    const countUp1 = new CountUp('counter1', 20);
    const countUp2 = new CountUp('counter2', 10200);
    const countUp3 = new CountUp('counter3', 9850);
    const countUp4 = new CountUp('counter4', 20);
    // const count = new CountUp('counter2', 10000);
    countUp1.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
}
