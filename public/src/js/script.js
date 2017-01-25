"use strict"

import "../less/style.less";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app';

const KEY = "9e72b120edf24cbb82c40d7975ed7e47";
const URL = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${KEY}`;

let articles = [];

let Article = require('./article.js');
let Admin = require('./singleton.js');

let spinner = document.getElementById("loading");

activate();

function activate() {
    registerEvents();

    //SingletonPattern
    let admin1 = new Admin();
    let admin2 = new Admin();
    console.log(admin1.data === admin2.data
        ? `singleton works - Admin : ${admin1.data.firstName} ${admin1.data.lastName}`
        : 'singleton doesn\'t work');

    loadNewsFromServer(URL);
}

function registerEvents() {
    redButton.onclick = function() {
        generateRedArticles();
    };

    greenButton.onclick = function() {
        generateGreenArticles();
    };
}

function loadNewsFromServer(url) {
    loading(true);
    fetch(url)
      .then(function (response) {
          return response.json();
      }).then(function (json) {
          articles = json.articles;
          if (articles.length > 0) {
              generateArticles(null);
          }
      }).catch(function (ex) {
          alert(`Error: ${ex}`)
      });
}

function loading(isLoading) {
    if (isLoading) {
        spinner.className = "";
    } else {
        spinner.className = "isNotShown";
    }
}

function generateArticles(type) {
    for(let article of articles) {
        let newArticle = new Article(article, type);
        newArticle.ContextInterface();
    }
    loading();
}

function generateGreenArticles() {
    clearMainNode();
    generateArticles('green');
}

function generateRedArticles() {
     clearMainNode();
     generateArticles('red');
}

function clearMainNode() {
    let node = document.getElementById("main_article");
    node.innerHTML = '';
}

function newslist(state = initialNews, action) {
    if  (action.type === 'ADD_NEWS') {
        return [
            ...state,
            action.newsName
            ];
    }
    return state;
}

const store = createStore(newslist);
const initialNews = [
    'Tramph is a new President of the USA',
    'Obamacare has been closed'
];

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('leftroot')
)
