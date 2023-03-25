function init() {
    console.log('menu');
    let mobileMenuBtn = document.getElementById('menu__btn');
    let mobileMenu = document.getElementById('mobile-menu');
    let mobileMenuClose = document.getElementById('mobile-menu__close-btn');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('mobile-menu--active');
    })

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu--active');
    })
}

export default {
    init,
}