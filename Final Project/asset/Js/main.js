let navbar = document.querySelector('.navbar');
let logreg = document.querySelector('.log-reg');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    logreg.classList.remove('active');
}
document.querySelector('#login-icon').onclick = () => {
    logreg.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    logreg.classList.remove('active');
}

let header = document.querySelector('nav');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});