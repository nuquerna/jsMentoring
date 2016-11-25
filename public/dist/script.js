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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDkxNDFiODdkODRhODdmZmNmOWU1Iiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9hcnRpY2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkxNDFiODdkODRhODdmZmNmOWU1IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmNvbnN0IEtFWSA9IFwiOWU3MmIxMjBlZGYyNGNiYjgyYzQwZDc5NzVlZDdlNDdcIjtcclxuY29uc3QgVVJMID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPWJiYy1uZXdzJmFwaUtleT0ke0tFWX1gO1xyXG5cclxubGV0IEFydGljbGUgPSByZXF1aXJlKFwiLi9hcnRpY2xlLmpzXCIpO1xyXG5sZXQgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcclxuXHJcbmFjdGl2YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuICAgIGxvYWROZXdzRnJvbVNlcnZlcihVUkwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmV3c0Zyb21TZXJ2ZXIodXJsKSB7XHJcbiAgICBsb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgICAgZ2VuZXJhdGVBcnRpY2xlcyhqc29uLmFydGljbGVzKTtcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGV4KSB7XHJcbiAgICAgICAgICBhbGVydChgRXJyb3I6ICR7ZXh9YClcclxuICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGluZyhpc0xvYWRpbmcpIHtcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NOYW1lID0gXCJpc05vdFNob3duXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQXJ0aWNsZXMoYXJ0aWNsZXMpIHtcclxuICAgIGZvcihsZXQgYXJ0aWNsZSBvZiBhcnRpY2xlcykge1xyXG4gICAgICAgIG5ldyBBcnRpY2xlKGFydGljbGUpLmdlbmVyYXRlQXJ0aWNsZSgpO1xyXG4gICAgfVxyXG4gICAgbG9hZGluZygpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9zY3JpcHQuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBBcnRpY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFydGljbGUpIHtcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGFydGljbGUuYXV0aG9yO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5wdWJsaXNoQXQgPSBhcnRpY2xlLnB1Ymxpc2hlZEF0O1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBhcnRpY2xlLnRpdGxlO1xyXG4gICAgICAgIHRoaXMudXJsID0gYXJ0aWNsZS51cmw7XHJcbiAgICAgICAgdGhpcy51cmxUb0ltYWdlID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluX2FydGljbGVcIik7XHJcbiAgICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgICBsZXQgcHVibGlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgbGV0IGhncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZ3JvdXBcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBsZXQgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgICAgICBsZXQgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5cclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aGlzLmF1dGhvcjtcclxuICAgICAgICBzdWJ0aXRsZS5pbm5lclRleHQgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgIHB1Ymxpc2hlZC5pbm5lclRleHQgPSBuZXcgRGF0ZSh0aGlzLnB1Ymxpc2hBdCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHVibGlzaGVkLmNsYXNzTmFtZSA9IFwidGltZVwiO1xyXG5cclxuICAgICAgICBoZ3JvdXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGhncm91cC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhncm91cCk7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHB1Ymxpc2hlZCk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHRoaXMudXJsVG9JbWFnZTtcclxuICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJpbWFnZVwiO1xyXG4gICAgICAgIGZpZ2NhcHRpb24uaW5uZXJIVE1MID0gYDxhIGhyZWY9JHt0aGlzLnVybH0+b3BlbiB0aGUgd2hvbGUgaW5mb3JtYXRpb248L2E+YFxyXG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIjxwPkNvbW1lbnRzICgwKTwvcD5cIjtcclxuXHJcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xyXG5cclxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChmaWd1cmUpO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGFydGljbGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFydGljbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9hcnRpY2xlLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7OztBQ3RDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QURBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Iiwic291cmNlUm9vdCI6IiJ9