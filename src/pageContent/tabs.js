export function tabsBTN() {
	const container = document.createElement('div');
	container.className = 'buttons';
	const contactBTN = document.createElement('button');
	const menuBTN = document.createElement('button');
	const homeBTN = document.createElement('button');

	contactBTN.innerHTML = 'Contact';
	contactBTN.id = 'contact-button';
	contactBTN.className = 'btn';
	menuBTN.innerHTML = 'Menu';
	menuBTN.id = 'menu-button';
	menuBTN.className = 'btn';
	homeBTN.innerHTML = 'Home';
	homeBTN.id = 'home-button';
	homeBTN.className = 'btn';
	container.appendChild(contactBTN);
	container.appendChild(homeBTN);
	container.appendChild(menuBTN);
	return container;
}
