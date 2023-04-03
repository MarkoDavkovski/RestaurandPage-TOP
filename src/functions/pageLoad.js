export function pageLoad(header, content, footer) {
	const mainContent = document.getElementById('content');
	mainContent.appendChild(header);
	mainContent.appendChild(content);
	mainContent.appendChild(footer);
	return mainContent;
}
