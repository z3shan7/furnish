const links = document.querySelectorAll('.navbar__navLinks');


links.forEach((link) => {
    link.addEventListener('click', (e) => {
        links.forEach((link) => {
            link.classList.remove('active');
        });
        e.preventDefault();
        link.classList.add('active');
    });
});

const menuBtn = document.querySelector('.navbar__menuBtn')
const list = document.querySelector('.navbar__list')

menuBtn.addEventListener('click', () => {
    list.classList.toggle('show-links')

})

const counters = document.querySelectorAll('.countUp__numbers')

let speed = 200;

// counters.forEach((counter, index) => {

//     function updateNumber() {

//         const targerNumber = counter.dataset.target;
//         const intialNumber = counter.innerText;
//         const incPerCount = targerNumber / speed;
//         if (intialNumber < targerNumber) {
//             counter.textContent = Math.floor(intialNumber + incPerCount)
//             setTimeout(updateNumber, 40)
//         }

//     }

//     updateNumber()

// })

let interval = 1;

counters.forEach((counter) => {
    let starValue = 0;
    let endValue = counter.getAttribute('data-target')

    let duration = Math.floor(interval / endValue)

    let count = setInterval(function () {
        starValue += 1;
        counter.textContent = starValue;
        if (starValue == endValue) {
            clearInterval(count)
        }

    }, 1)
})
