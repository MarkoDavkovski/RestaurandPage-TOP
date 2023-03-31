export function contactPage() {
	const contactPage = document.createElement('div');

	const h1 = document.createElement('h1');
	h1.innerText = 'Contact Us';
	contactPage.appendChild(h1);

	const h2Location = document.createElement('h2');
	h2Location.innerText = 'Location';
	contactPage.appendChild(h2Location);

	const p1 = document.createElement('p');
	p1.innerText = 'Our restaurant is located at:';
	contactPage.appendChild(p1);

	const p2 = document.createElement('p');
	p2.innerText = '123 Main Street';
	contactPage.appendChild(p2);

	const p3 = document.createElement('p');
	p3.innerText = 'City, State ZIP';
	contactPage.appendChild(p3);

	const h2ContactInfo = document.createElement('h2');
	h2ContactInfo.innerText = 'Contact Information';
	contactPage.appendChild(h2ContactInfo);

	const ul = document.createElement('ul');
	contactPage.appendChild(ul);

	const liEmail = document.createElement('li');
	const emailLink = document.createElement('a');
	emailLink.href = 'mailto:mynewrestaurant@mail.com';
	emailLink.innerText = 'mynewrestaurant@mail.com';
	liEmail.appendChild(document.createTextNode('Email: '));
	liEmail.appendChild(emailLink);
	ul.appendChild(liEmail);

	const liPhone = document.createElement('li');
	const phoneLink = document.createElement('a');
	phoneLink.href = 'tel:0038900102030';
	phoneLink.innerText = '0038900102030';
	liPhone.appendChild(document.createTextNode('Phone: '));
	liPhone.appendChild(phoneLink);
	ul.appendChild(liPhone);

	const h2OpeningHours = document.createElement('h2');
	h2OpeningHours.innerText = 'Opening Hours';
	contactPage.appendChild(h2OpeningHours);

	const p4 = document.createElement('p');
	p4.innerText = "We're open every day from 9:00 AM to 10:00 PM.";
	contactPage.appendChild(p4);

	const h2ContactForm = document.createElement('h2');
	h2ContactForm.innerText = 'Contact Form';
	contactPage.appendChild(h2ContactForm);

	const form = document.createElement('form');
	form.method = 'POST';
	form.action = 'https://formsubmit.co/mynewrestaurant@mail.com';
	contactPage.appendChild(form);

	const labelName = document.createElement('label');
	labelName.innerText = 'Name:';
	labelName.htmlFor = 'name';
	form.appendChild(labelName);

	const inputName = document.createElement('input');
	inputName.type = 'text';
	inputName.id = 'name';
	inputName.name = 'name';
	inputName.required = true;
	form.appendChild(inputName);

	const labelEmail = document.createElement('label');
	labelEmail.innerText = 'Email:';
	labelEmail.htmlFor = 'email';
	form.appendChild(labelEmail);

	const inputEmail = document.createElement('input');
	inputEmail.type = 'email';
	inputEmail.id = 'email';
	inputEmail.name = 'email';
	inputEmail.required = true;
	form.appendChild(inputEmail);

	const labelMessage = document.createElement('label');
	labelMessage.innerText = 'Message:';
	labelMessage.htmlFor = 'message';
	form.appendChild(labelMessage);

	const textareaMessage = document.createElement('textarea');
	textareaMessage.id = 'message';
	textareaMessage.name = 'message';
	textareaMessage.required = true;
	form.appendChild(textareaMessage);

	const buttonSubmit = document.createElement('button');
	buttonSubmit.type = 'submit';
	buttonSubmit.innerText = 'Send Message';
	form.appendChild(buttonSubmit);

	return contactPage;
}
