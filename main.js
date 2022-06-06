/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #f1f1f1;\\n  color: #050505;\\n  font-family: sans-serif;\\n}\\n\\n.body-title {\\n  margin: 2rem auto;\\n  text-align: center;\\n}\\n\\n.list-container {\\n  background-color: #fff;\\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\\n  margin: auto;\\n  padding: 0;\\n  width: 70%;\\n}\\n@media (max-width: 768px) {\\n  .list-container {\\n    width: 90%;\\n  }\\n}\\n\\n.list-items {\\n  display: flex;\\n  border-bottom: 1.3px solid rgba(169, 169, 169, 0.15);\\n  padding: 1rem;\\n  margin: 0;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.list-title {\\n  border: none;\\n  margin-right: auto;\\n}\\n\\ninput {\\n  padding: 1rem;\\n  width: 100%;\\n  border: none;\\n  font-style: italic;\\n  margin-right: auto;\\n}\\n\\nform {\\n  display: flex;\\n  border-bottom: 1.3px solid rgba(169, 169, 169, 0.15);\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n\\n.fa-solid {\\n  color: darkgray;\\n  z-index: 99;\\n  cursor: pointer;\\n  padding: 6px;\\n}\\n\\n.delete-todo {\\n  border: none;\\n  background-color: transparent;\\n  margin-left: auto;\\n  padding: 0;\\n}\\n\\n.fa-trash-can {\\n  margin-left: auto;\\n  cursor: pointer;\\n  width: 12px;\\n}\\n\\n.fa-arrow-right-to-bracket {\\n  margin-right: 1rem;\\n}\\n\\n.top-container {\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  justify-content: flex-end;\\n  border-bottom: 1.3px solid rgba(169, 169, 169, 0.15);\\n}\\n\\n.clear-button-container {\\n  display: flex;\\n  list-style: none;\\n  font-size: 1.1rem;\\n  border-bottom: 1.3px solid rgba(169, 169, 169, 0.15);\\n  padding: 0.5rem;\\n  margin: 0;\\n  align-items: center;\\n  justify-content: center;\\n  color: #a7a7a7;\\n  background-color: rgba(169, 169, 169, 0.25);\\n  cursor: pointer;\\n}\\n\\n.submit {\\n  border: none;\\n  background-color: transparent;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.list-here {\\n  padding: 0;\\n  width: 100%;\\n}\\n.list-here .check {\\n  width: 1rem;\\n  height: 1rem;\\n  padding: 1rem;\\n  margin: 6px;\\n}\\n\\n.done {\\n  text-decoration: line-through;\\n  color: #a7a7a7;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeButton\": () => (/* binding */ removeButton),\n/* harmony export */   \"toDo\": () => (/* binding */ toDo)\n/* harmony export */ });\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_newTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newTask.js */ \"./src/modules/newTask.js\");\n/* harmony import */ var _modules_completeStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/completeStatus.js */ \"./src/modules/completeStatus.js\");\n\r\n\r\n\r\n\r\n\r\nconst toDo = JSON.parse(localStorage.getItem('toDo') || '[]');\r\n\r\nconst listContainer = document.querySelector('.list-container');\r\n\r\nconst createTitle = () => {\r\n  const listTitle = document.createElement('div');\r\n  const listIcon = document.createElement('i');\r\n  const topContainer = document.createElement('li');\r\n  topContainer.classList.add('top-container');\r\n  listIcon.classList.add('fa-solid');\r\n  listIcon.classList.add('fa-arrows-rotate');\r\n  listTitle.classList.add('list-title');\r\n  listTitle.innerHTML = 'To Do List';\r\n  topContainer.append(listTitle, listIcon);\r\n  listContainer.appendChild(topContainer);\r\n};\r\n\r\nconst createForm = () => {\r\n  const listFormContainer = document.createElement('li');\r\n  const listForm = document.createElement('form');\r\n  const input = document.createElement('input');\r\n  const btn = document.createElement('button');\r\n  const btnIcon = document.createElement('i');\r\n  listFormContainer.classList.add('form-container');\r\n  listForm.classList.add('form');\r\n  btn.setAttribute('type', 'submit');\r\n  btn.setAttribute('title', 'submit-btn');\r\n  btn.classList.add('submit');\r\n  btnIcon.classList.add('fa-solid');\r\n  btnIcon.classList.add('fa-arrow-right-to-bracket');\r\n  input.setAttribute('placeholder', 'Add task...');\r\n  input.classList.add('input');\r\n  listFormContainer.appendChild(listForm);\r\n  btn.appendChild(btnIcon);\r\n  listForm.append(input, btn);\r\n  listContainer.appendChild(listFormContainer);\r\n};\r\nconst createUl = () => {\r\n  const listItemContainer = document.createElement('li');\r\n  const listItemSubContainer = document.createElement('ul');\r\n  listItemSubContainer.classList.add('list-here');\r\n  listItemContainer.appendChild(listItemSubContainer);\r\n  listContainer.append(listItemContainer);\r\n};\r\n\r\nconst sortTasks = () => {\r\n  toDo.sort((a, b) => a.index - b.index);\r\n};\r\n\r\nconst removeButton = () => {\r\n  const buttonListContainer = document.createElement('li');\r\n  const buttonContainer = document.createElement('div');\r\n  const removeButton = document.createElement('p');\r\n  buttonContainer.classList.add('clear-button-container');\r\n  removeButton.innerHTML = 'Remove Completed Tasks';\r\n  removeButton.classList.add('clear-button');\r\n  buttonContainer.append(removeButton);\r\n  buttonListContainer.append(buttonContainer);\r\n  listContainer.append(buttonListContainer);\r\n  buttonContainer.addEventListener('click', () => {\r\n    (0,_modules_newTask_js__WEBPACK_IMPORTED_MODULE_2__.removeCompleted)();\r\n    (0,_modules_completeStatus_js__WEBPACK_IMPORTED_MODULE_3__.completed)(toDo);\r\n    window.location.reload();\r\n  });\r\n};\r\n\r\ncreateTitle();\r\ncreateForm();\r\ncreateUl();\r\nsortTasks();\r\n\r\nconst form = document.querySelector('.form');\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const input = document.querySelector('.input');\r\n  if (input.value !== '') {\r\n    (0,_modules_newTask_js__WEBPACK_IMPORTED_MODULE_2__.newTask)(input.value.trim());\r\n    input.value = '';\r\n    input.focus();\r\n  }\r\n  sortTasks();\r\n  (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.setData)();\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.renderList)();\r\n});\r\n\r\nremoveButton();\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/completeStatus.js":
/*!***************************************!*\
  !*** ./src/modules/completeStatus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completed\": () => (/* binding */ completed),\n/* harmony export */   \"markAsCompleted\": () => (/* binding */ markAsCompleted)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ \"./src/modules/newTask.js\");\n\r\n\r\n\r\nconst markAsCompleted = (todo, listItem) => {\r\n  listItem.classList.toggle('done');\r\n  for (let i = 0; i < todo.length; i++) {\r\n    if (todo[i].index === Number(listItem.id)) {\r\n      todo[i].completed = false;\r\n    }\r\n    if (todo[i].index === Number(listItem.id) && listItem.classList.contains('done')) {\r\n      todo[i].completed = true;\r\n    }\r\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setData)();\r\n  }\r\n};\r\n\r\nconst completed = (todo) => {\r\n  const completedTasks = todo.filter((task) => task.completed === false);\r\n  (0,_newTask_js__WEBPACK_IMPORTED_MODULE_1__.overwriteIndex)(completedTasks);\r\n  (0,_newTask_js__WEBPACK_IMPORTED_MODULE_1__.overWriteLiId)();\r\n  localStorage.setItem('toDo', JSON.stringify(completedTasks));\r\n};\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/completeStatus.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"setData\": () => (/* binding */ setData)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ \"./src/modules/newTask.js\");\n \n\nfunction setData() {\n  localStorage.setItem('toDo', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.toDo));\n}\n\nfunction getData() {\n  const savedData = JSON.parse(localStorage.getItem('toDo'));\n  if (savedData) {\n    return savedData;\n  }\n  return [];\n}\n\nconst renderList = () => {\n  const loadData = getData();\n  loadData.forEach((data) => {\n    (0,_newTask_js__WEBPACK_IMPORTED_MODULE_1__.createListElement)(data);\n  });\n};\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/newTask.js":
/*!********************************!*\
  !*** ./src/modules/newTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"overWriteLiId\": () => (/* binding */ overWriteLiId),\n/* harmony export */   \"overwriteIndex\": () => (/* binding */ overwriteIndex),\n/* harmony export */   \"removeCompleted\": () => (/* binding */ removeCompleted),\n/* harmony export */   \"removeListElement\": () => (/* binding */ removeListElement)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _completeStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completeStatus.js */ \"./src/modules/completeStatus.js\");\n\r\n\r\n\r\n\r\nconst overwriteIndex = (todo) => {\r\n  let index = 1;\r\n  todo.forEach((todo) => {\r\n    todo.index = index;\r\n    index += 1;\r\n  });\r\n};\r\n\r\nconst overWriteLiId = () => {\r\n  let index = 1;\r\n  const list = document.querySelector('.list-here');\r\n  const listItems = list.querySelectorAll('.list-items');\r\n  listItems.forEach((listItem) => {\r\n    listItem.setAttribute('id', index);\r\n    index++;\r\n  });\r\n};\r\n\r\nfunction removeListElement(btn) {\r\n  let index = Number(btn.parentElement.id > 1);\r\n  if (btn.parentElement.id) {\r\n    btn.parentElement.remove();\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.toDo.splice(index, 1);\r\n  } else {\r\n    index = Number(btn.parentElement.id - 1);\r\n    btn.parentElement.remove();\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.toDo.splice(index, 1);\r\n  }\r\n}\r\n\r\nfunction createListElement(todo) {\r\n  const list = document.querySelector('.list-here');\r\n  const isCompleted = todo.completed ? 'done' : '';\r\n  const listItem = document.createElement('li');\r\n  listItem.setAttribute('class', `list-item${isCompleted}`);\r\n  listItem.classList.add('list-items');\r\n  listItem.setAttribute('id', todo.index);\r\n  listItem.innerHTML = `\r\n  <input class=\"check check${todo.index}\" id=\"${todo.index}\" type=\"checkbox\"/>\r\n  <label for=\"${todo.index}\" class=\"tick js-tick\"></label>\r\n  <span id=\"editable${todo.index}\">${todo.description}</span>\r\n  <button class=\"delete-todo js-delete-todo\">\r\n  <i class = \"fa-solid fa-trash-can\"></i>\r\n  </button>\r\n`;\r\n  list.append(listItem);\r\n\r\n  const editable = document.getElementById(`editable${todo.index}`);\r\n  editable.setAttribute('contenteditable', 'true');\r\n\r\n  // const liElement = document.getElementsByClassName('.list-items');\r\n  const removeBtn = listItem.querySelector('.delete-todo');\r\n  removeBtn.addEventListener('click', (e) => {\r\n    const clickedItem = e.target.parentElement;\r\n    if (clickedItem.classList.contains('js-delete-todo')) {\r\n      removeListElement(clickedItem);\r\n      overWriteLiId();\r\n      overwriteIndex(_index_js__WEBPACK_IMPORTED_MODULE_1__.toDo);\r\n      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setData)();\r\n    }\r\n  });\r\n\r\n  const checkbox = listItem.querySelector('.check');\r\n  checkbox.addEventListener('change', () => {\r\n    (0,_completeStatus_js__WEBPACK_IMPORTED_MODULE_2__.markAsCompleted)(_index_js__WEBPACK_IMPORTED_MODULE_1__.toDo, listItem);\r\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setData)();\r\n  });\r\n\r\n  const editSpan = listItem.querySelector(`#editable${todo.index}`);\r\n  editSpan.addEventListener('keyup', () => {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.toDo[todo.index - 1].description = editSpan.textContent;\r\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setData)();\r\n  });\r\n}\r\n\r\nconst removeCompleted = () => {\r\n  const list = document.querySelector('.list-here');\r\n  const listItems = list.querySelectorAll('.list-items');\r\n  listItems.forEach((listItem) => {\r\n    if (listItem.classList.contains('done')) {\r\n      listItem.remove();\r\n    }\r\n  });\r\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setData)();\r\n};\r\n\r\nconst newTask = (text) => {\r\n  const todo = {\r\n    description: text,\r\n    completed: false,\r\n    index: _index_js__WEBPACK_IMPORTED_MODULE_1__.toDo.length + 1,\r\n  };\r\n  _index_js__WEBPACK_IMPORTED_MODULE_1__.toDo.push(todo);\r\n  createListElement(todo);\r\n};\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/newTask.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;