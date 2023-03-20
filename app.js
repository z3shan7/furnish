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