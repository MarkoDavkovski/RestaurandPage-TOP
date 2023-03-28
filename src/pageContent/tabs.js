export function tabsBTN() {
	const container = document.createElement('div');
	container.className = 'buttons';
	const contactBTN = document.createElement('button');
	const menuBTN = document.createElement('button');
	const homeBTN = document.createElement('button');

	contactBTN.innerHTML = 'Contact';
	contactBTN.id = 'contact-page';
	menuBTN.innerHTML = 'Menu';
	menuBTN.id = 'menu-page';
	homeBTN.innerHTML = 'Home';
	homeBTN.id = 'home-page';
	container.appendChild(contactBTN);
	container.appendChild(homeBTN);
	container.appendChild(menuBTN);
	return container;
}
