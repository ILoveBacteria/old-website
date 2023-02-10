const USERNAME = 'ILoveBacteria';


class Card {
    constructor(image, name, description, html_url) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.html_url = html_url;
    }

    toCardHTML() {
        let card = document.createElement('a');
        card.setAttribute('href', this.html_url);
        let imgTag = '';
        if (this.image != null) {
            imgTag = `<img src="${this.image}" class="card-img-top" alt="cover image">`;
        }
        card.innerHTML =
            `<div class="card">${imgTag}
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.description}</p>
            </div></div>`
        return card;
    }
}

class QueryParam {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name}=${this.value}`;
    }
}

class URL {
    queries = [];

    constructor(url) {
        this.url = url;
    }

    toString() {
        if (this.queries.length === 0) {
            return this.url;
        }
        return this.url + '?' + this.queries.map(x => x.toString()).join('&');
    }
}

async function getData(url) {
    url.queries.push(
        new QueryParam('sort', 'pushed'),
        new QueryParam('per_page', '4'),
    );
    const headers = {
        accept: 'application/vnd.github+json'
    }
    const init = {
        method: 'GET',
        headers: new Headers(headers),
    }

    const response = await fetch(url.toString(), init);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('The response code is not ok');
}

async function getMetaImage(html_url) {
    const headers = new Headers({
        'accept': 'text/html',
        'content-type': 'text/html',
    });
    const init = {
        method: 'GET',
        mode: 'cors',
        headers: headers,
    }

    try {
        const response = await fetch(html_url, init);
        if (!response.ok) {
            throw new Error('The response code is not ok');
        }
        const htmlText = await response.text();
        const regex = /property="og:image"\scontent="[:./\w]*/;
        return regex.exec(htmlText)[0].substring(29);
    } catch (e) {
        console.log(e);
        return null;
    }
}

async function updateRepoCard() {
    const cardBlock = document.getElementById('repository');
    const repoRawData = await getRepositories();
    const metaImageList = await Promise.all(repoRawData.map(x => getMetaImage(x.html_url)));
    let i = 0;
    repoRawData
        .map(x => new Card(metaImageList[i++], x.name, x.description, x.html_url).toCardHTML())
        .forEach(x => cardBlock.appendChild(x));

}

async function updateGistCard() {
    const cardBlock = document.getElementById('gist');
    const repoRawData = await getGists();
    repoRawData
        .map(x => new Card(null, Object.keys(x.files)[0], x.description, x.html_url).toCardHTML())
        .forEach(x => cardBlock.appendChild(x));

}

function getRepositories() {
    let url = new URL(`https://api.github.com/users/${USERNAME}/repos`);
    return getData(url);
}

function getGists() {
    let url = new URL(`https://api.github.com/users/${USERNAME}/gists`);
    return getData(url);
}

updateRepoCard()
    .then(resolved => console.log(resolved))
    .catch(reject => console.log(reject));

updateGistCard()
    .then(resolved => console.log(resolved))
    .catch(reject => console.log(reject));
