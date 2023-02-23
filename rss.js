const apiUrl = 'https://qiita.com/api/v2/authenticated_user/items';
const accessToken = process.env.SECRET_QIITA;

fetch(`${apiUrl}?per_page=4`, {
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
			const iconUrl = "assets/img/qiita.png";

			const article = document.createElement('article');
			article.className = 'output-item';

			const img = document.createElement('img');
			img.src = iconUrl;
			article.appendChild(img);

			const content = document.createElement('div');
			content.className = 'output-content';
			article.appendChild(content);

			const t = document.createElement('p');
			t.className = 'output-title';
			t.textContent = title;
			t.addEventListener('click', () => {
				window.open(url, '_blank');
			});
			content.appendChild(t);

			const p = document.createElement('p');
			p.className = 'output-date';
			p.textContent = `${date} | ${likesCount} LGTM`;
			content.appendChild(p);

			outputList.appendChild(article);
		});
	})
	.catch(error => console.error(error));
