let menu = document.querySelector('svg.menu-collapse');
let menuClose = document.querySelector('svg.menu-shown');
let navBar = document.querySelector('nav');
let navOpen = false;

menu.addEventListener('click', (event) => {
	navOpen = true;
	menuClose.classList.remove('hidden');
	menu.classList.add('hidden');
	navBar.style.transform = 'translateX(0)';
});
menuClose.addEventListener('click', () => {
	navOpen = false;
	menu.classList.remove('hidden');
	menuClose.classList.add('hidden');
	navBar.style.transform = 'translateX(100%)';
});

window.addEventListener('resize', (event) => {
	if (event.target.innerWidth >= 720) {
		navBar.style.transform = '';
	} else {
		menu.classList.remove('hidden');
		menuClose.classList.add('hidden');
	}

	console.log(event);
});
