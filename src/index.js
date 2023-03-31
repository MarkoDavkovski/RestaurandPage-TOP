import './styles/home.css';
import './styles/contact.css';
import './styles/menu.css';
import { createHeader } from './pageContent/header.js';
import { mainContent } from './pageContent/main-content';
import { createFooter } from './pageContent/footer';
import { contactPage } from './pageContent/contact-page';
import { menuPage } from './pageContent/menu-page';

const homeButton = document.getElementById('home-button');
const contactButton = document.getElementById('contact-button');
const menuButton = document.getElementById('menu-button');

// firstLoad();

const pageContent = document.getElementById('content');

const header = createHeader();

const main = mainContent();

const contact = contactPage();

const menu = menuPage();

const footer = createFooter();

pageContent.appendChild(header);
pageContent.appendChild(menu);
pageContent.appendChild(footer);
