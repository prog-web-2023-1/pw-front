import { slideDown, slideUp } from '../util/toggle.js';

function init() {

	if(window.matchMedia("(max-width: 766px)")) {
		let mobileMenuBtn = document.getElementById('menu__btn');
		let mobileMenu = document.getElementById('mobile-menu');
		let mobileMenuClose = document.getElementById('mobile-menu__close-btn');
	
		mobileMenuBtn.addEventListener('click', function() {
				mobileMenu.classList.add('mobile-menu--active');
		});
	
		mobileMenuClose.addEventListener('click', function() {
				mobileMenu.classList.remove('mobile-menu--active');
		});
	
		dropdownsBehavior();
	}

}

function dropdownsBehavior() {
	let dropdownsTitle = document.querySelectorAll('.mobile-menu__section-title');

	if(dropdownsTitle) {
    dropdownsTitle.forEach(function(el) {
      el.addEventListener('click', function(e) {
				if(e.target.classList.contains('mobile-menu__section-title__link')) return;
				else if(e.target.classList.contains('mobile-menu__section-title__icon')) {
					let relativeDrop = el.nextElementSibling;
					if(relativeDrop.classList.contains('open')) {
						slideUp(relativeDrop);
					} else {
						slideDown(relativeDrop);
					}
				} else {
					return;
				}
      });
    });
  }
	
}

export default {
	init,
}