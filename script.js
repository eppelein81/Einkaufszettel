let numbers = [];
let articles = [];

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>Meine Einkausfsliste</h1>`;
    content.innerHTML += `
    <section>
        <div class="af">            
            <input placeholder="Artikel" id="article"><br>
            <button onclick='addArticle()'>Hinzufügen</button>
        </div>
    </section>
    `

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        content.innerHTML += `
        <div class="card">
            <li>
            <b>${article} <button onclick='delArticle(${i})'>x</button>
            </li>
        </div>
        `;
    }

}

function save() {
    let Text = JSON.stringify(articles);
    localStorage.setItem('articles', Text);
}

function load() {
    let Text = localStorage.getItem('articles');
    
    if (Text) {
        articles = JASON.parse(Text);
    }
        

}

function addArticle() {
    let art = document.getElementById('article');

    articles.push(art.value);

    render();
    save();
}

function delArticle(i) {
    articles.splice(i, 1);

    render();
    save();
}

