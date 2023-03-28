export function createFooter() {
	const footer = document.createElement('footer');
	footer.id = 'footer';

	const p = document.createElement('p');
	p.innerHTML = `&copy 2023 Delicious Restaurant. All rights reserved.`;

	footer.appendChild(p);

	return footer;
}
