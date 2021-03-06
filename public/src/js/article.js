"use strict";

const DATE_OPTIONS = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};

class Strategy {
    constructor(article) {
        this.author = article.author;
        this.description = article.description
        this.publishAt = article.publishedAt;
        this.title = article.title;
        this.url = article.url;
        this.urlToImage = article.urlToImage;      
    }

    generateDom() {
        console.log('article is generating');
    }
}

class Article {
    constructor(article, type){
        switch(type) {
            case "red":
                this.strategy = new ConcreteArticleRed(article);
                break
            case "green":
                this.strategy = new ConcreteArticleGreen(article);
                break
            default:
                this.strategy = new ConcreteStrategyStandard(article);
        }
    }

    ContextInterface() {
        this.strategy.generateDom();
    }
}

class ConcreteArticleRed extends Strategy {
    constructor(article) {
        super(article);
    }
    generateDom() {
        let parent = document.getElementById("main_article");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let title = document.createElement("h1");
        article.className = 'red';
        title.innerText = this.author;
        header.appendChild(title);
        article.appendChild(header);
        article.appendChild(document.createTextNode(this.description));
        parent.appendChild(article);
    }
}

class ConcreteArticleGreen extends Strategy {
    constructor(article) {
        super(article);
    }
    generateDom() {
        let parent = document.getElementById("main_article");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let published = document.createElement("p");
        published.Id = 'publish';
        let hgroup = document.createElement("hgroup");
        let title = document.createElement("h1");
        let subtitle = document.createElement("h2");

        article.className = 'green';
        title.innerText = this.author;
        subtitle.innerText = this.title;
        published.innerText = new Date(this.publishAt).toLocaleString("en-US", DATE_OPTIONS);
        published.className = "time";

        hgroup.appendChild(title);
        hgroup.appendChild(subtitle);
        header.appendChild(hgroup);
        header.appendChild(published);

        article.appendChild(header);
        article.appendChild(document.createTextNode(this.description));
        parent.appendChild(article);
    }
}

class ConcreteStrategyStandard extends Strategy {
    constructor(article) {
        super(article);
    }
    generateDom() {
        let parent = document.getElementById("main_article");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let published = document.createElement("p");
        let hgroup = document.createElement("hgroup");
        let title = document.createElement("h1");
        let subtitle = document.createElement("h2");
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");
        let img = document.createElement("img");
        let footer = document.createElement("footer");

        title.innerText = this.author;
        subtitle.innerText = this.title;
        published.innerText = new Date(this.publishAt).toLocaleString("en-US", DATE_OPTIONS);
        published.className = "time";

        hgroup.appendChild(title);
        hgroup.appendChild(subtitle);
        header.appendChild(hgroup);
        header.appendChild(published);

        img.src = this.urlToImage;
        img.className = "image";
        figcaption.innerHTML = `<a href=${this.url}>open the whole information</a>`
        footer.innerHTML = `<p>Comments (0)</p>`;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        article.appendChild(header);
        article.appendChild(document.createTextNode(this.description));
        article.appendChild(figure);
        article.appendChild(footer);

        parent.appendChild(article);
    }
}

module.exports = Article;