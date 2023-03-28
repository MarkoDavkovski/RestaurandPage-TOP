import './styles.css';
import { createHeader } from './pageContent/header.js';
import { mainContent } from './pageContent/mainContent';
import { createFooter } from './pageContent/footer';

const pageContent = document.getElementById('content');

const header = createHeader();

const main = mainContent();

const footer = createFooter();

pageContent.appendChild(header);
pageContent.appendChild(main);
pageContent.appendChild(footer);
