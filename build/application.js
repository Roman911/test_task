webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(327);


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addClass = __webpack_require__(328);

var _addClass2 = _interopRequireDefault(_addClass);

__webpack_require__(329);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _addClass2.default)('.navbar');

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addClass(selector) {
  var rootElement = document.querySelector(selector);
  var button = rootElement.querySelector('.btn');
  var modal = rootElement.querySelector('.addClass');

  function addClassActive() {
    modal.classList.toggle('showed');
  }

  button.addEventListener('click', addClassActive);

  button.addEventListener('click', function () {

    if (addClassActive == true) {} else {
      addClassActive;
    }
  });
}

exports.default = addClass;

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[125]);