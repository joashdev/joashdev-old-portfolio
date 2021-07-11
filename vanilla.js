let menu = document.querySelector('svg.menu-collapse');
let menuClose = document.querySelector('svg.menu-shown');
let navBar = document.querySelector('nav');

menu.addEventListener('click', event => {
	menuClose.classList.remove('hidden');
	menu.classList.add('hidden');
	navBar.style.transform = 'translateX(0)';
	console.log(event);
});
menuClose.addEventListener('click', () => {
	menu.classList.remove('hidden');
	menuClose.classList.add('hidden');
	navBar.style.transform = 'translateX(100%)';
});

window.addEventListener('resize', event => {
	if (event.target.innerWidth >= 720) {
		navBar.style.transform = '';
	} else {
		menu.classList.remove('hidden');
		menuClose.classList.add('hidden');
	}

	console.log(event);
});
