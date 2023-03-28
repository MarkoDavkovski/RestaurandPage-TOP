import logo from '../assets/restaurant.png';
import { tabsBTN } from './tabs';
export function createHeader() {
	const header = document.createElement('header');
	header.id = 'header';

	const logoPNG = document.createElement('img');
	logoPNG.src = logo;

	const tabs = tabsBTN();

	const headline = document.createElement('h1');
	headline.innerHTML = 'Welcome to our restaurant!';
	header.appendChild(logoPNG);
	header.appendChild(headline);
	header.appendChild(tabs);

	return header;
}
