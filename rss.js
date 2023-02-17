const apiUrl = 'https://qiita.com/api/v2/authenticated_user/items';
const accessToken = 'YOUR_ACCESS_TOKEN';

fetch(`${apiUrl}?per_page=5`, {
    headers: { 'Authorization': `Bearer 290836882926e3340d4b599744b50c6364f9509f` }
})
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const title = item.title;
            const url = item.url;
            const body = item.body;

            const article = document.createElement('article');

            const h2 = document.createElement('h2');
            h2.textContent = title;
            article.appendChild(h2);

            const p1 = document.createElement('p');
            p1.textContent = body;
            article.appendChild(p1);

            const p2 = document.createElement('p');
            const a = document.createElement('a');
            a.href = url;
            a.textContent = 'Read more';
            p2.appendChild(a);
            article.appendChild(p2);

            document.body.appendChild(article);
        });
    })
    .catch(error => console.error(error));
