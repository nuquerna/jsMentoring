/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var KEY = "9e72b120edf24cbb82c40d7975ed7e47";
	var URL = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=" + KEY;

	var Article = __webpack_require__(5);
	var spinner = document.getElementById("loading");

	activate();

	function activate() {
	    loadNewsFromServer(URL);
	}

	function loadNewsFromServer(url) {
	    loading(true);
	    fetch(url).then(function (response) {
	        return response.json();
	    }).then(function (json) {
	        generateArticles(json.articles);
	    }).catch(function (ex) {
	        alert("Error: " + ex);
	    });
	}

	function loading(isLoading) {
	    if (isLoading) {
	        spinner.className = "";
	    } else {
	        spinner.className = "isNotShown";
	    }
	}

	function generateArticles(articles) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var article = _step.value;

	            new Article(article).generateArticle();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    loading();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DATE_OPTIONS = {
	    year: "numeric",
	    month: "numeric",
	    day: "numeric",
	    hour: "numeric",
	    minute: "numeric"
	};

	var Article = function () {
	    function Article(article) {
	        _classCallCheck(this, Article);

	        this.author = article.author;
	        this.description = article.description;
	        this.publishAt = article.publishedAt;
	        this.title = article.title;
	        this.url = article.url;
	        this.urlToImage = article.urlToImage;
	    }

	    _createClass(Article, [{
	        key: "generateArticle",
	        value: function generateArticle() {
	            var parent = document.getElementById("main_article");
	            var article = document.createElement("article");
	            var header = document.createElement("header");
	            var published = document.createElement("p");
	            var hgroup = document.createElement("hgroup");
	            var title = document.createElement("h1");
	            var subtitle = document.createElement("h2");
	            var figure = document.createElement("figure");
	            var figcaption = document.createElement("figcaption");
	            var img = document.createElement("img");
	            var footer = document.createElement("footer");

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
	            figcaption.innerHTML = "<a href=" + this.url + ">open the whole information</a>";
	            footer.innerHTML = "<p>Comments (0)</p>";

	            figure.appendChild(img);
	            figure.appendChild(figcaption);

	            article.appendChild(header);
	            article.appendChild(document.createTextNode(this.description));
	            article.appendChild(figure);
	            article.appendChild(footer);

	            parent.appendChild(article);
	        }
	    }]);

	    return Article;
	}();

	module.exports = Article;

/***/ }
/******/ ]);