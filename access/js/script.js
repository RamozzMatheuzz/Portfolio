//      MENU    //  
let btnMobile = document.querySelector('#btn-mobile');
let menu = document.querySelector('#menu');

let linksMenu = document.querySelectorAll('#menu ul li a');


console.log(linksMenu);

function menuFunction(){
    menu.classList.toggle('active');
}

function closeMenu(){
    menu.classList.remove('active');
}

btnMobile.addEventListener('click', menuFunction);
//linksMenu.addEventListener('click', closeMenu);

//      SCROLL REVEAL   //

window.sr = ScrollReveal({ distance: '70px' });

sr.reveal('.welcome', {
    origin : 'top',
    duration: 2000
});

sr.reveal('.skills', {
    origin : 'top',
    duration: 2000
});

sr.reveal('.about-me', {
    origin : 'top',
    duration: 2000
});

sr.reveal('.projects', {
    origin : 'top',
    duration: 2000
});
