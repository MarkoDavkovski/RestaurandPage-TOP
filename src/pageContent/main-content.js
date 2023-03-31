export function mainContent() {
	const main = document.createElement('main');
	const paragraph1 = document.createElement('p');
	const paragraph2 = document.createElement('p');

	paragraph1.innerHTML =
		'We are a family-owned restaurant that has been serving our community for over 20 years. Our menu features delicious and locally sourced ingredients, cooked to perfection by our expert chefs.';
	paragraph2.innerHTML = `Whether you're in the mood for a hearty breakfast, a quick lunch, or a romantic dinner for two, we have something for everyone. Our attentive and friendly staff will make sure you have an unforgettable dining experience,`;

	main.appendChild(paragraph1);
	main.appendChild(paragraph2);

	return main;
}
