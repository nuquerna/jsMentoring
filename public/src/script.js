"use strict"

const KEY = "9e72b120edf24cbb82c40d7975ed7e47";
const URL = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${KEY}`;

let Article = require("./article.js");
let spinner = document.getElementById("loading");

activate();

function activate() {
    loadNewsFromServer(URL);
}

function loadNewsFromServer(url) {
    loading(true);
    fetch(url)
      .then(function (response) {
          if(NODE_ENV) console.log(response);
          return response.json();
      }).then(function (json) {
          generateArticles(json.articles);
      }).catch(function (ex) {
          alert(`Error: ${ex}`);
          if(NODE_ENV) console.log(ex);
      })
}

function loading(isLoading) {
    if (isLoading) {
        spinner.className = "";
    } else {
        spinner.className = "isNotShown";
    }
}

function generateArticles(articles) {
    for(let article of articles) {
        new Article(article).generateArticle();
    }
    loading();
}