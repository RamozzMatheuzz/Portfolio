//      MENU    //  
let btnMobile = document.querySelector('#btn-mobile');
let menu = document.querySelector('#menu');
let linksMenu = document.querySelectorAll('#menu ul li a');

function menuFunction(){
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', menuFunction);

linksMenu.forEach(link =>{
    link.addEventListener('click', menuFunction)
})

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
