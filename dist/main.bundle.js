/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Devide = __webpack_require__(/*! ./js/Devide.js */ \"./src/js/Devide.js\");\nconst Multiply = __webpack_require__(/*! ./js/Multiply */ \"./src/js/Multiply.js\");\nconsole.log(\"index.js\");\n\nconsole.log(\" Devide\", Devide(6, 3));\nconsole.log(\" Multiply\", Multiply(3, 6));\n\n// import Add from \"./js/Add.js\";\n// import Say from \"./js/Say.js\";\n// const path = require(\"path\"); path yra node dalykas\n// console.log(\" path\", path.resolve(__dirname));\n\n// console.log(\"add(1,2,4)\", Add(1, 2, 4));\n// Say(\" nice day\");\n\nconst obj = {\n  age: 30,\n  name: \"Bob\",\n};\n\nconst copy = { ...obj, gender: \"male\" };\n\nconsole.log(\" copy\", copy);\n\n\n//# sourceURL=webpack://web-pack-intro/./src/app.js?");

/***/ }),

/***/ "./src/js/Devide.js":
/*!**************************!*\
  !*** ./src/js/Devide.js ***!
  \**************************/
/***/ ((module) => {

eval("const Devide = (a, b) => {\n  return a / b;\n};\n\nmodule.exports = Devide;\n\n\n//# sourceURL=webpack://web-pack-intro/./src/js/Devide.js?");

/***/ }),

/***/ "./src/js/Multiply.js":
/*!****************************!*\
  !*** ./src/js/Multiply.js ***!
  \****************************/
/***/ ((module) => {

eval("const Multiply = (a, b) => {\n  return a * b;\n};\n\nmodule.exports = Multiply;\n\n\n//# sourceURL=webpack://web-pack-intro/./src/js/Multiply.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;