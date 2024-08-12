

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/icons/white 48.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/icons/icons8-close-32.png";

    }

    
}
