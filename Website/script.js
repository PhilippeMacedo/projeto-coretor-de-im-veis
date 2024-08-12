

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/icons/arrows_hamburger_2_40392.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/icons/icons8-close-24.png";

    }

    
}
