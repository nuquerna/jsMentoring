"use strict";

class Article {
    constructor(article) {
        this.author = article.author;
        this.description = article.description
        this.publishAt = article.publishedAt;
        this.title = article.title;
        this.url = article.url;
        this.urlToImage = article.urlToImage;
    }

    generateArticle() {
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
        published.innerText = new Date(this.publishAt).toLocaleString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });
        published.className = "time";

        hgroup.appendChild(title);
        hgroup.appendChild(subtitle);
        header.appendChild(hgroup);
        header.appendChild(published);
        img.src = this.urlToImage;
        img.className = "image";
        figcaption.innerHTML = `<a href=${this.url}>open the whole information</a>`
        footer.innerHTML = "<p>Comments (0)</p>";

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