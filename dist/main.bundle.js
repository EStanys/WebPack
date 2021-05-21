/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Devide.js":
/*!**************************!*\
  !*** ./src/js/Devide.js ***!
  \**************************/
/***/ ((module) => {

var Devide = function Devide(a, b) {
  return a / b;
};

module.exports = Devide;

/***/ }),

/***/ "./src/js/Multiply.js":
/*!****************************!*\
  !*** ./src/js/Multiply.js ***!
  \****************************/
/***/ ((module) => {

var Multiply = function Multiply(a, b) {
  return a * b;
};

module.exports = Multiply;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import "./css/style.css";
var Devide = __webpack_require__(/*! ./js/Devide.js */ "./src/js/Devide.js");

var Multiply = __webpack_require__(/*! ./js/Multiply */ "./src/js/Multiply.js");

console.log("index.js");
console.log(" Devide", Devide(6, 3));
console.log(" Multiply", Multiply(3, 6)); // import Add from "./js/Add.js";
// import Say from "./js/Say.js";
// const path = require("path"); path yra node dalykas
// console.log(" path", path.resolve(__dirname));
// console.log("add(1,2,4)", Add(1, 2, 4));
// Say(" nice day");

var obj = {
  age: 30,
  name: "Bob"
};

var copy = _objectSpread(_objectSpread({}, obj), {}, {
  gender: "male"
});

console.log(" copy", copy);
})();

/******/ })()
;