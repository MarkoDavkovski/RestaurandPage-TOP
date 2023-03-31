export function menuPage() {
	const menuPage = document.createElement('div');
	menuPage.classList.add('menu-page');

	const h1 = document.createElement('h1');
	h1.innerText = 'Our Menu';
	menuPage.appendChild(h1);

	const menuItems = [
		{
			name: 'Margherita Pizza',
			description: 'Tomato sauce, mozzarella, and basil',
			price: '$10.99',
		},
		{
			name: 'Pepperoni Pizza',
			description: 'Tomato sauce, mozzarella, and pepperoni',
			price: '$12.99',
		},
		{
			name: 'Mushroom Pizza',
			description: 'Tomato sauce, mozzarella, and mushrooms',
			price: '$11.99',
		},
		{
			name: 'Caesar Salad',
			description:
				'Romaine lettuce, parmesan cheese, croutons, and Caesar dressing',
			price: '$8.99',
		},
		{
			name: 'Spaghetti and Meatballs',
			description: 'Spaghetti with tomato sauce and meatballs',
			price: '$13.99',
		},
		{
			name: 'Chicken Alfredo',
			description: 'Fettuccine with creamy Alfredo sauce and grilled chicken',
			price: '$15.99',
		},
	];

	const menuContainer = document.createElement('div');
	menuContainer.classList.add('menu-container');
	menuPage.appendChild(menuContainer);

	menuItems.forEach((item) => {
		const menuItem = document.createElement('div');
		menuItem.classList.add('menu-item');
		menuContainer.appendChild(menuItem);

		const itemName = document.createElement('h2');
		itemName.innerText = item.name;
		menuItem.appendChild(itemName);

		const itemDescription = document.createElement('p');
		itemDescription.innerText = item.description;
		menuItem.appendChild(itemDescription);

		const itemPrice = document.createElement('p');
		itemPrice.innerText = item.price;
		menuItem.appendChild(itemPrice);
	});

	return menuPage;
}
