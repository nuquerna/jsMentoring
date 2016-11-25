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

	var KEY = "9e72b120edf24cbb82c40d7975ed7e47";
	var URL = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=" + KEY;

	var Article = __webpack_require__(1);
	var spinner = document.getElementById("loading");

	activate();

	function activate() {
	    loadNewsFromServer(URL);
	}

	function loadNewsFromServer(url) {
	    loading(true);
	    fetch(url).then(function (response) {
	        if (true) console.log(response);
	        return response.json();
	    }).then(function (json) {
	        generateArticles(json.articles);
	    }).catch(function (ex) {
	        alert("Error: " + ex);
	        if (true) console.log(ex);
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

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZhMDJhMmQ5ZWI5YjgwNGUwODYzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9hcnRpY2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMDJhMmQ5ZWI5YjgwNGUwODYzIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmNvbnN0IEtFWSA9IFwiOWU3MmIxMjBlZGYyNGNiYjgyYzQwZDc5NzVlZDdlNDdcIjtcclxuY29uc3QgVVJMID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPWJiYy1uZXdzJmFwaUtleT0ke0tFWX1gO1xyXG5cclxubGV0IEFydGljbGUgPSByZXF1aXJlKFwiLi9hcnRpY2xlLmpzXCIpO1xyXG5sZXQgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcclxuXHJcbmFjdGl2YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuICAgIGxvYWROZXdzRnJvbVNlcnZlcihVUkwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmV3c0Zyb21TZXJ2ZXIodXJsKSB7XHJcbiAgICBsb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmKE5PREVfRU5WKSBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgICBnZW5lcmF0ZUFydGljbGVzKGpzb24uYXJ0aWNsZXMpO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXgpIHtcclxuICAgICAgICAgIGFsZXJ0KGBFcnJvcjogJHtleH1gKTtcclxuICAgICAgICAgIGlmKE5PREVfRU5WKSBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRpbmcoaXNMb2FkaW5nKSB7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTmFtZSA9IFwiaXNOb3RTaG93blwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUFydGljbGVzKGFydGljbGVzKSB7XHJcbiAgICBmb3IobGV0IGFydGljbGUgb2YgYXJ0aWNsZXMpIHtcclxuICAgICAgICBuZXcgQXJ0aWNsZShhcnRpY2xlKS5nZW5lcmF0ZUFydGljbGUoKTtcclxuICAgIH1cclxuICAgIGxvYWRpbmcoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvc2NyaXB0LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgQXJ0aWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcnRpY2xlKSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhcnRpY2xlLmF1dGhvcjtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXJ0aWNsZS5kZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMucHVibGlzaEF0ID0gYXJ0aWNsZS5wdWJsaXNoZWRBdDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gYXJ0aWNsZS50aXRsZTtcclxuICAgICAgICB0aGlzLnVybCA9IGFydGljbGUudXJsO1xyXG4gICAgICAgIHRoaXMudXJsVG9JbWFnZSA9IGFydGljbGUudXJsVG9JbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUFydGljbGUoKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbl9hcnRpY2xlXCIpO1xyXG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgbGV0IHB1Ymxpc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGxldCBoZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGdyb3VwXCIpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGV0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICAgICAgbGV0IGZpZ2NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy5hdXRob3I7XHJcbiAgICAgICAgc3VidGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcclxuICAgICAgICBwdWJsaXNoZWQuaW5uZXJUZXh0ID0gbmV3IERhdGUodGhpcy5wdWJsaXNoQXQpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHB1Ymxpc2hlZC5jbGFzc05hbWUgPSBcInRpbWVcIjtcclxuXHJcbiAgICAgICAgaGdyb3VwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBoZ3JvdXAuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZ3JvdXApO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChwdWJsaXNoZWQpO1xyXG4gICAgICAgIGltZy5zcmMgPSB0aGlzLnVybFRvSW1hZ2U7XHJcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICBmaWdjYXB0aW9uLmlubmVySFRNTCA9IGA8YSBocmVmPSR7dGhpcy51cmx9Pm9wZW4gdGhlIHdob2xlIGluZm9ybWF0aW9uPC9hPmBcclxuICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gXCI8cD5Db21tZW50cyAoMCk8L3A+XCI7XHJcblxyXG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChmaWdjYXB0aW9uKTtcclxuXHJcbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoZmlndXJlKTtcclxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcnRpY2xlKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvYXJ0aWNsZS5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBOzs7Ozs7O0FDeENBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBREFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7OzsiLCJzb3VyY2VSb290IjoiIn0=