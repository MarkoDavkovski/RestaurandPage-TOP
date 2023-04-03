import '../styles/home.css';

import { createHeader } from '../pageContent/header';
import { mainContent } from '../pageContent/main-content';
import { createFooter } from '../pageContent/footer';

export function firstLoad() {
	const content = document.getElementById('content');
	const header = createHeader();
	const main = mainContent();
	const footer = createFooter();
	content.appendChild(header);
	content.appendChild(main);
	content.appendChild(footer);
	return content;
}
