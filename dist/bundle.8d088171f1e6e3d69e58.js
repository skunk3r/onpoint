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

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _components_Hello_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hello.js */ \"./components/Hello.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header.js */ \"./components/Header.js\");\n/* harmony import */ var _components_Info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Info.js */ \"./components/Info.js\");\n/* harmony import */ var _components_BottlePage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BottlePage.js */ \"./components/BottlePage.js\");\n/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Modal.js */ \"./components/Modal.js\");\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer.js */ \"./components/Footer.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n  var documentWrapper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var margin = 0;\n  var width = 100;\n  var pages = 3;\n  var backgroundPos = 0;\n  var backgroundXMax = 3209;\n  var newPos = backgroundXMax / 3;\n  var backgroundPosMax = backgroundXMax - newPos;\n  var swipe = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element, dir, toHome) {\n    if (dir === 'left') {\n      margin -= width;\n      margin = Math.max(margin, -(width * (pages - 1)));\n      backgroundPos -= newPos;\n      backgroundPos = Math.max(backgroundPos, -backgroundPosMax);\n    }\n\n    if (dir === 'right') {\n      margin += width;\n      margin = toHome ? 0 : Math.min(margin, 0);\n      backgroundPos += newPos;\n      backgroundPos = toHome ? 0 : Math.min(backgroundPos, 0);\n    }\n\n    document.body.style.backgroundPositionX = backgroundPos + 'px';\n    element.style.marginLeft = margin + '%';\n  }, []);\n  var eventStart;\n  var eventEnd;\n  var onDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    event.preventDefault();\n    eventStart = event.clientX;\n    document.addEventListener('pointermove', onMove);\n  }, []);\n  var onMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    event.preventDefault();\n  }, []);\n  var onUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    eventEnd = event.clientX;\n    if (eventEnd - eventStart > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'right');else if (eventStart - eventEnd > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'left');\n    document.removeEventListener('pointermove', onMove);\n  }, []);\n  var onTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    eventEnd = event.changedTouches[0].clientX;\n    if (eventEnd - eventStart > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'right');else if (eventStart - eventEnd > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'left');\n    return false;\n  }, []);\n  var addListeners = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    document.addEventListener('touchend', onTouchEnd);\n    document.addEventListener('pointerdown', onDown);\n    document.addEventListener('pointerup', onUp);\n  }, []);\n  var removeListeners = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    document.removeEventListener('touchend', onTouchEnd);\n    document.removeEventListener('pointerdown', onDown);\n    document.removeEventListener('pointerup', onUp);\n  }, []);\n\n  function toggleModal() {\n    setModal(!modal);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    addListeners();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__.default, {\n    elem: documentWrapper,\n    swipe: swipe\n  }), modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Modal_js__WEBPACK_IMPORTED_MODULE_6__.default, {\n    onClick: toggleModal,\n    addListeners: addListeners\n  }), modal && removeListeners(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"flex-wrapper\",\n    ref: documentWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Hello_js__WEBPACK_IMPORTED_MODULE_2__.default, {\n    elem: documentWrapper,\n    swipe: swipe\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Info_js__WEBPACK_IMPORTED_MODULE_4__.default, {\n    removeListeners: removeListeners,\n    addListeners: addListeners\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_BottlePage_js__WEBPACK_IMPORTED_MODULE_5__.default, {\n    onClick: toggleModal\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_7__.default, null));\n}\n\n//# sourceURL=webpack:///./App.js?");

/***/ }),

/***/ "./components/BottlePage.js":
/*!**********************************!*\
  !*** ./components/BottlePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BottlePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction BottlePage(_ref) {\n  var onClick = _ref.onClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"bottle-div\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-box mg-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"\\u041A\\u043B\\u044E\\u0447\\u0435\\u0432\\u043E\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"brand\"\n  }, \"BREND\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"strong\", null, \"XY\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-row details-boxes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/icon.png\",\n    alt: \"icon\",\n    className: \"icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"details-box first\"\n  }, \"3 \\u0440\\u0430\\u0437\\u0430 \\u0432 \\u0434\\u0435\\u043D\\u044C \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0435\\u0434\\u044B. \\u041F\\u043E\\u0441\\u043B\\u0435 \\u043F\\u0440\\u0438\\u0435\\u043C\\u0430 \\u043F\\u0440\\u0435\\u043F\\u0430\\u0440\\u0430\\u0442\\u0430 \\u0440\\u0435\\u043A\\u043E\\u043C\\u0435\\u043D\\u0434\\u0443\\u0435\\u0442\\u0441\\u044F \\u0432\\u043E\\u0437\\u0434\\u0435\\u0440\\u0436\\u0430\\u0442\\u044C\\u0441\\u044F \\u043E\\u0442 \\u043F\\u0438\\u0449\\u0438 \\u0438 \\u043D\\u0430\\u043F\\u0438\\u0442\\u043A\\u043E\\u0432 \\u0432 \\u0442\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 1 \\u0447\\u0430\\u0441\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/icon-2.png\",\n    alt: \"icon\",\n    className: \"icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"details-box second\"\n  }, \"\\u041A\\u0443\\u0440\\u0441 \\u043B\\u0435\\u0447\\u0435\\u043D\\u0438\\u044F \\u043E\\u0442 7 \\u0434\\u043D\\u0435\\u0439 \\u0434\\u043E 1 \\u043C\\u0435\\u0441.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"details-button\",\n    onClick: onClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/details.png\",\n    alt: \"details\"\n  })))))));\n}\n\n//# sourceURL=webpack:///./components/BottlePage.js?");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"footer\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/footer.png\",\n    alt: \"onpoint\"\n  }));\n}\n\n//# sourceURL=webpack:///./components/Footer.js?");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction Header(_ref) {\n  var elem = _ref.elem,\n      swipe = _ref.swipe;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/home-button.png\",\n    alt: \"home\",\n    className: \"home-button\",\n    onClick: function onClick() {\n      return swipe(elem.current, 'right', true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/home-line.png\",\n    alt: \"line\",\n    className: \"home-line\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: function onClick() {\n      return swipe(elem.current, 'right');\n    }\n  }, \"\\u2190\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: function onClick() {\n      return swipe(elem.current, 'left');\n    }\n  }, \"\\u2192\"));\n}\n\n//# sourceURL=webpack:///./components/Header.js?");

/***/ }),

/***/ "./components/Hello.js":
/*!*****************************!*\
  !*** ./components/Hello.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hello)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction Hello(_ref) {\n  var elem = _ref.elem,\n      swipe = _ref.swipe;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content mg-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442,\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"title\"\n  }, \"\\u042D\\u0442\\u043E \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"strong\", null, \"\\u043D\\u0435\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"\\u043A\\u043E\\u043C\\u043C\\u0435\\u0440\\u0447\\u0435\\u0441\\u043A\\u043E\\u0435 \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"\\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"whats-next-button\",\n    onClick: function onClick() {\n      return swipe(elem.current, 'left');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/whats-next-button.png\",\n    alt: \"next\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/animated/bact.png\",\n    alt: \"bacterium\",\n    className: \"animated bact\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/animated/big-bact.png\",\n    alt: \"bacterium\",\n    className: \"animated big-bact\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"anim-div animated\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/animated/star-bact.png\",\n    alt: \"bacterium\",\n    className: \"star-bact\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/animated/bact-2.png\",\n    alt: \"bacterium\",\n    className: \"animated bact-2\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"assets/img/animated/title-sperm.png\",\n    alt: \"sperm\",\n    className: \"animated title-sperm\"\n  }));\n}\n\n//# sourceURL=webpack:///./components/Hello.js?");

/***/ }),

/***/ "./components/Info.js":
/*!****************************!*\
  !*** ./components/Info.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Info)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\n\nfunction Info(_ref) {\n  var removeListeners = _ref.removeListeners,\n      addListeners = _ref.addListeners;\n  var refSlider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var refThumb = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var refCutter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var refInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var coef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      resize = _useState2[0],\n      setResize = _useState2[1];\n\n  var shiftY;\n  var onTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    var botBorder = refSlider.current.offsetHeight - refThumb.current.offsetHeight + 1;\n    var newPosY = event.target === refSlider.current ? event.touches[0].clientY - refSlider.current.getBoundingClientRect().top - refThumb.current.offsetHeight / 2 : event.touches[0].clientY - shiftY - refSlider.current.getBoundingClientRect().top;\n    newPosY = newPosY < -1 ? -1 : newPosY;\n    newPosY = newPosY > botBorder ? botBorder : newPosY;\n    refThumb.current.style.top = newPosY + 'px';\n    refInfo.current.style.marginTop = -newPosY * coef.current + 'px';\n    return false;\n  }, []);\n  var onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    var botBorder = refSlider.current.offsetHeight - refThumb.current.offsetHeight + 1;\n    var newPosY = event.target === refSlider.current ? event.clientY - refSlider.current.getBoundingClientRect().top - refThumb.current.offsetHeight / 2 : event.clientY - shiftY - refSlider.current.getBoundingClientRect().top;\n    newPosY = newPosY < -1 ? -1 : newPosY;\n    newPosY = newPosY > botBorder ? botBorder : newPosY;\n    refThumb.current.style.top = newPosY + 'px';\n    refInfo.current.style.marginTop = -newPosY * coef.current + 'px';\n  }, []);\n  var sliderOnPointerDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    if (event.target != refSlider.current) return;\n    event.preventDefault();\n    refInfo.current.style.transition = 'all, 0.3s';\n    refThumb.current.style.transition = 'top, 0.3s';\n    refThumb.current.addEventListener('transitionend', removeTransition);\n    onPointerMove(event);\n  }, []);\n  var thumbOnPointerDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    event.preventDefault();\n    removeTransition();\n    removeListeners();\n    shiftY = event.clientY - refThumb.current.getBoundingClientRect().top;\n\n    if (event.pointerType === 'touch') {\n      document.addEventListener('touchmove', onTouchMove);\n\n      document.ontouchend = function () {\n        document.removeEventListener('touchmove', onTouchMove);\n        document.ontouchend = null;\n        addListeners();\n        return false;\n      };\n    } else {\n      document.addEventListener('pointermove', onPointerMove);\n\n      document.onpointerup = function () {\n        document.removeEventListener('pointermove', onPointerMove);\n        document.onpointerup = null;\n        addListeners();\n        return false;\n      };\n    }\n  }, []);\n\n  function removeTransition() {\n    refThumb.current.style.transition = '';\n    refInfo.current.style.transition = '';\n  }\n\n  var calculateCoef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    return (refInfo.current.scrollHeight - (refCutter.current.clientHeight - 30)) / (refSlider.current.offsetHeight - refThumb.current.offsetHeight + 2);\n  }, []);\n  var onResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var oldPosY = refThumb.current.getBoundingClientRect().top - refSlider.current.getBoundingClientRect().top;\n    refInfo.current.style.marginTop = -oldPosY * coef.current + 'px';\n  }, []);\n  var throttler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var resizeTimeout;\n    window.addEventListener(\"resize\", resizeThrottler, false);\n\n    function resizeThrottler() {\n      if (!resizeTimeout) {\n        resizeTimeout = setTimeout(function () {\n          resizeTimeout = null;\n          coef.current = calculateCoef();\n          onResize();\n        }, 66);\n      }\n    }\n  }, []);\n\n  function preventAnchor(event) {\n    if (!confirm(\"\\u041F\\u0435\\u0440\\u0435\\u0439\\u0442\\u0438 \\u043D\\u0430 \".concat(event.target.href, \"?\"))) event.preventDefault();\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    throttler();\n    coef.current = calculateCoef();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"content mg-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"\\u0422\\u0435\\u043A\\u0441\\u0442 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u044F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"flex-row info-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"slider\",\n    ref: refSlider,\n    onPointerDown: sliderOnPointerDown\n    /*onTouchStart={sliderOnTouchStart}*/\n\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"thumb\",\n    ref: refThumb,\n    onPointerDown: thumbOnPointerDown\n    /*onTouchStart={thumbOnTouchStart}*/\n\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"info-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"info-cutter\",\n    ref: refCutter\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    id: \"info\",\n    ref: refInfo\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"b\", null, \"\\u0421\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\"), \" (\\u043E\\u0442 \\u0434\\u0440.-\\u0433\\u0440\\u0435\\u0447. \\u03C3\\u03C0\\u03AD\\u03C1\\u03BC\\u03B1 \\u0440\\u043E\\u0434. \\u043F. \\u03C3\\u03C0\\u03AD\\u03C1\\u03BC\\u03B1\\u03C4\\u03BF\\u03C2 \\u0437\\u0434\\u0435\\u0441\\u044C \\xAB\\u0441\\u043F\\u0435\\u0440\\u043C\\u0430\\xBB + \\u03B6\\u03C9\\u03AE \\xAB\\u0436\\u0438\\u0437\\u043D\\u044C\\xBB + \\u03B5\\u03B4\\u03BF\\u03C2 \\xAB\\u0432\\u0438\\u0434, \\u043E\\u0431\\u043B\\u0438\\u043A\\xBB, \\u043B\\u0430\\u0442. spermatozoon, spermium) \\u2014 \\u043C\\u0443\\u0436\\u0441\\u043A\\u0430\\u044F \\u043F\\u043E\\u043B\\u043E\\u0432\\u0430\\u044F \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430 (\\u0433\\u0430\\u043C\\u0435\\u0442\\u0430) \\u0440\\u0430\\u0437\\u043C\\u043D\\u043E\\u0436\\u0430\\u044E\\u0449\\u0438\\u0445\\u0441\\u044F \\u043F\\u043E\\u0441\\u0440\\u0435\\u0434\\u0441\\u0442\\u0432\\u043E\\u043C \\u043E\\u043E\\u0433\\u0430\\u043C\\u0438\\u0438 \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u043C\\u043E\\u0432.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", null), \"\\u0421\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\\u044B \\u043E\\u0431\\u044B\\u0447\\u043D\\u043E \\u043E\\u0431\\u043B\\u0430\\u0434\\u0430\\u044E\\u0442 \\u0441\\u043F\\u043E\\u0441\\u043E\\u0431\\u043D\\u043E\\u0441\\u0442\\u044C\\u044E \\u043A \\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E\\u043C\\u0443 \\u0434\\u0432\\u0438\\u0436\\u0435\\u043D\\u0438\\u044E \\u0438 \\u0441\\u043B\\u0443\\u0436\\u0430\\u0442 \\u0434\\u043B\\u044F \\u043E\\u043F\\u043B\\u043E\\u0434\\u043E\\u0442\\u0432\\u043E\\u0440\\u0435\\u043D\\u0438\\u044F \\u0436\\u0435\\u043D\\u0441\\u043A\\u043E\\u0439 \\u0433\\u0430\\u043C\\u0435\\u0442\\u044B \\u2014 \\u044F\\u0439\\u0446\\u0435\\u043A\\u043B\\u0435\\u0442\\u043A\\u0438. \\u041E\\u0431\\u044B\\u0447\\u043D\\u043E \\u043E\\u043D\\u0438 \\u0437\\u043D\\u0430\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u043C\\u0435\\u043D\\u044C\\u0448\\u0435 \\u044F\\u0439\\u0446\\u0435\\u043A\\u043B\\u0435\\u0442\\u043E\\u043A, \\u043F\\u043E\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0443 \\u043D\\u0435 \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u0442 \\u0441\\u0442\\u043E\\u043B\\u044C \\u0437\\u043D\\u0430\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0446\\u0438\\u0442\\u043E\\u043F\\u043B\\u0430\\u0437\\u043C\\u044B \\u0438 \\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u044F\\u0442\\u0441\\u044F \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u043C\\u043E\\u043C \\u043E\\u0434\\u043D\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E \\u0432 \\u0437\\u043D\\u0430\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u043C \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u0435.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", null), \"\\u0422\\u0438\\u043F\\u0438\\u0447\\u043D\\u043E\\u0435 \\u0441\\u0442\\u0440\\u043E\\u0435\\u043D\\u0438\\u0435 \\u0441\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\\u0430 \\u043E\\u0442\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442 \\u0444\\u043E\\u0440\\u043C\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0433\\u043E \\u043F\\u0440\\u0435\\u0434\\u043A\\u0430 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0438 \\u0433\\u0440\\u0438\\u0431\\u043E\\u0432: \\u043E\\u0434\\u043D\\u043E\\u043A\\u043B\\u0435\\u0442\\u043E\\u0447\\u043D\\u044B\\u0439 \\u044F\\u0434\\u0435\\u0440\\u043D\\u044B\\u0439 \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u043C, \\u043F\\u0435\\u0440\\u0435\\u0434\\u0432\\u0438\\u0433\\u0430\\u044E\\u0449\\u0438\\u0439\\u0441\\u044F \\u0437\\u0430 \\u0441\\u0447\\u0451\\u0442 \\u0436\\u0433\\u0443\\u0442\\u0438\\u043A\\u0430 \\u0432 \\u0437\\u0430\\u0434\\u043D\\u0435\\u0439 \\u0447\\u0430\\u0441\\u0442\\u0438, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F \\u0435\\u0433\\u043E \\u043F\\u043E\\u0434\\u043E\\u0431\\u043D\\u043E \\u0445\\u0432\\u043E\\u0441\\u0442\\u0443. \\u041E\\u0431\\u0448\\u0438\\u0440\\u043D\\u0430\\u044F \\u0433\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043F\\u0440\\u043E\\u0438\\u0441\\u0445\\u043E\\u0434\\u044F\\u0449\\u0438\\u0445 \\u043E\\u0442 \\u043D\\u0435\\u0433\\u043E \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u043C\\u043E\\u0432 \\u0432\\u043A\\u043B\\u044E\\u0447\\u0430\\u0435\\u0442 \\u0432 \\u0441\\u0435\\u0431\\u044F \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445, \\u0431\\u043E\\u043B\\u044C\\u0448\\u0438\\u043D\\u0441\\u0442\\u0432\\u043E \\u0433\\u0440\\u0438\\u0431\\u043E\\u0432 \\u0438 \\u043D\\u0435\\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0433\\u0440\\u0443\\u043F\\u043F\\u044B \\u043F\\u0440\\u043E\\u0442\\u0438\\u0441\\u0442\\u043E\\u0432 \\u0438 \\u043D\\u0430\\u0437\\u044B\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F \\u043A\\u043B\\u0430\\u043D\\u043E\\u043C \\u0437\\u0430\\u0434\\u043D\\u0435\\u0436\\u0433\\u0443\\u0442\\u0438\\u043A\\u043E\\u0432\\u044B\\u0445. \\u0411\\u043E\\u043B\\u044C\\u0448\\u0438\\u043D\\u0441\\u0442\\u0432\\u043E \\u0434\\u0440\\u0443\\u0433\\u0438\\u0445 \\u044D\\u0443\\u043A\\u0430\\u0440\\u0438\\u043E\\u0442 \\u0441\\u043E \\u0436\\u0433\\u0443\\u0442\\u0438\\u043A\\u0430\\u043C\\u0438 \\u0438\\u043C\\u0435\\u044E\\u0442 \\u0438\\u0445 \\u0432 \\u043F\\u0435\\u0440\\u0435\\u0434\\u043D\\u0435\\u0439 \\u0447\\u0430\\u0441\\u0442\\u0438.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", null), \"\\u0412 \\u0448\\u0438\\u0440\\u043E\\u043A\\u043E\\u043C \\u0441\\u043C\\u044B\\u0441\\u043B\\u0435 \\u0441\\u043B\\u043E\\u0432\\u0430 \\u043F\\u043E \\u0442\\u0440\\u0430\\u0434\\u0438\\u0446\\u0438\\u0438 \\u0441\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043E\\u0433\\u0434\\u0430 \\u043D\\u0430\\u0437\\u044B\\u0432\\u0430\\u044E\\u0442 \\u043C\\u0443\\u0436\\u0441\\u043A\\u0438\\u0435 \\u043F\\u043E\\u043B\\u043E\\u0432\\u044B\\u0435 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u0443 \\u0440\\u0430\\u0441\\u0442\\u0435\\u043D\\u0438\\u0439, \\u043A \\u043D\\u0438\\u043C \\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u044F\\u044E\\u0442 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u0442\\u0435\\u0440\\u043C\\u0438\\u043D\\u044B \\u0441\\u043F\\u0435\\u0440\\u043C\\u0438\\u0438 \\u0438\\u043B\\u0438 \\u0430\\u043D\\u0442\\u0435\\u0440\\u043E\\u0437\\u043E\\u0438\\u0434\\u044B (\\u0438\\u0445 \\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u044F\\u044E\\u0442 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u043A \\u0442\\u0440\\u0430\\u0434\\u0438\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E \\u0441\\u0431\\u043B\\u0438\\u0436\\u0430\\u0432\\u0448\\u0438\\u043C\\u0441\\u044F \\u0441 \\u0440\\u0430\\u0441\\u0442\\u0435\\u043D\\u0438\\u044F\\u043C\\u0438 \\u0433\\u0440\\u0438\\u0431\\u0430\\u043C).\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"a\", {\n    href: \"https://ru.wikipedia.org/wiki/\\u0441\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\",\n    onClick: preventAnchor\n  }, \"https://ru.wikipedia.org/wiki/\\u0441\\u043F\\u0435\\u0440\\u043C\\u0430\\u0442\\u043E\\u0437\\u043E\\u0438\\u0434\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"transparent-border\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/animated/sperm-squad.png\",\n    alt: \"sperm squad\",\n    className: \"animated sperm-squad\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/animated/sperm-squad-2.png\",\n    alt: \"sperm squad\",\n    className: \"animated sperm-squad\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/animated/sperm-squad-3.png\",\n    alt: \"sperm squad\",\n    className: \"animated sperm-squad\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/animated/sperm-squad-4.png\",\n    alt: \"sperm squad\",\n    className: \"animated sperm-squad\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/animated/sperm-squad-5.png\",\n    alt: \"sperm squad\",\n    className: \"animated sperm-squad\"\n  }));\n}\n\n//# sourceURL=webpack:///./components/Info.js?");

/***/ }),

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction List(_ref) {\n  var props = _ref.props,\n      startIndex = _ref.startIndex,\n      endIndex = _ref.endIndex;\n  var count = startIndex;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    id: \"list\"\n  }, props.map(function (item, index) {\n    if (count === index + 1 && count - 1 != endIndex) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"numbering\"\n    }, '0' + count++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, item));\n  }));\n}\n\n//# sourceURL=webpack:///./components/List.js?");

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.js */ \"./components/List.js\");\n\n\n\nfunction Modal(_ref) {\n  var _onClick = _ref.onClick,\n      addListeners = _ref.addListeners;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      page = _useState2[0],\n      setPage = _useState2[1];\n\n  var advantages = ['Самое важное и ключевое преимущество нашего препарата', 'Второе по важности преимущество', 'Ещё одно важное преимущество препарата', 'Ещё одно не менее важное преимущество препарата', 'Ещё одно важное преимущество препарата', 'Ещё одно важное преимущество препарата'];\n\n  function handleClick(btn) {\n    if (btn === 'prev' && page != 1) setPage(1);\n    if (btn === 'next' && page != 2) setPage(2);\n  }\n\n  function hightlightCircle(index) {\n    if (page === index) return 'filled-circle.png';else return 'empty-circle.png';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"modal-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"close-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/close-button.png\",\n    alt: \"close\",\n    onClick: function onClick() {\n      _onClick();\n\n      addListeners();\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"animation-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"\\u041F\\u0440\\u0435\\u0438\\u043C\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    className: \"brand\"\n  }, \"BREND\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"strong\", null, \"XY\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"list-container\"\n  }, page === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.default, {\n    props: advantages,\n    startIndex: 1,\n    endIndex: 3\n  }), page === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_List_js__WEBPACK_IMPORTED_MODULE_2__.default, {\n    props: advantages,\n    startIndex: 4\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"prev-button\",\n    onClick: function onClick() {\n      return handleClick('prev');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/prev-button.png\",\n    alt: \"prev\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/\".concat(hightlightCircle(1)),\n    alt: \"1\",\n    onClick: function onClick() {\n      return handleClick('prev');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/\".concat(hightlightCircle(2)),\n    alt: \"2\",\n    onClick: function onClick() {\n      return handleClick('next');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"next-button\",\n    onClick: function onClick() {\n      return handleClick('next');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"assets/img/next-button.png\",\n    alt: \"next\"\n  }))))));\n}\n\n//# sourceURL=webpack:///./components/Modal.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _bottle_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottle-page.css */ \"./bottle-page.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.js */ \"./App.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_App_js__WEBPACK_IMPORTED_MODULE_4__.default, null)), document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./bottle-page.css":
/*!*************************!*\
  !*** ./bottle-page.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./bottle-page.css?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_helpers_esm_slicedToArray_js-node_modules_react-dom_index_js"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;