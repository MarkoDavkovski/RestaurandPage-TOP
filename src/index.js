//Styles
import './styles/contact.css';
import './styles/menu.css';
import './styles/home.css';

//Page Content
import { createHeader } from './pageContent/header';
import { mainContent } from './pageContent/main-content';
import { createFooter } from './pageContent/footer';
import { contactPage } from './pageContent/contact-page';
import { menuPage } from './pageContent/menu-page';

//functions
import { firstLoad } from './functions/firstLoad';
import { render } from './functions/render';
import { pageLoad } from './functions/pageLoad';

firstLoad();

const content = mainContent();
const contact = contactPage();
const menu = menuPage();

const header = createHeader();
const footer = createFooter();

const buttons = document.querySelectorAll('.btn');

//EventListener function for buttons
function addEventListenersToButtons() {
	const homeButton = document.querySelector('#home-button');
	const contactButton = document.querySelector('#contact-button');
	const menuButton = document.querySelector('#menu-button');

	homeButton.addEventListener('click', () => {
		render();
		pageLoad(header, content, footer);
	});

	contactButton.addEventListener('click', () => {
		render();
		pageLoad(header, contact, footer);
	});

	menuButton.addEventListener('click', () => {
		render();
		pageLoad(header, menu, footer);
	});
}

// Add click event listeners to all buttons
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		render();

		// Check which button was clicked and render the appropriate page
		if (button.id === 'home-button') {
			pageLoad(header, content, footer);
		} else if (button.id === 'contact-button') {
			pageLoad(header, contact, footer);
		} else if (button.id === 'menu-button') {
			pageLoad(header, menu, footer);
		}

		// Add event listeners to buttons after rendering the page
		addEventListenersToButtons();
	});
});
