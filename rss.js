const apiUrl = 'https://qiita.com/api/v2/authenticated_user/items';
const accessToken = '290836882926e3340d4b599744b50c6364f9509f';

fetch(`${apiUrl}?per_page=5`, {
	headers: { 'Authorization': `Bearer ${accessToken}` }
})
	.then(response => response.json())
	.then(data => {
		const outputList = document.getElementById('Output');

		data.forEach(item => {
			const title = item.title;
			const url = item.url;
			const date = new Date(item.created_at).toLocaleDateString();
			const likesCount = item.likes_count;
			const iconUrl = item.user.profile_image_url;

			const article = document.createElement('article');
			article.className = 'output-item';

			const img = document.createElement('img');
			img.src = iconUrl;
			article.appendChild(img);

			const content = document.createElement('div');
			content.className = 'output-content';
			article.appendChild(content);

			const h3 = document.createElement('h3');
			h3.className = 'output-title';
			h3.textContent = title;
			h3.addEventListener('click', () => {
				window.open(url, '_blank');
			});
			content.appendChild(h3);

			const p = document.createElement('p');
			p.className = 'output-date';
			p.textContent = `${date} | ${likesCount} LGTM`;
			content.appendChild(p);

			outputList.appendChild(article);
		});
	})
	.catch(error => console.error(error));
