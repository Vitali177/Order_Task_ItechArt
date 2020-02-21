/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/App.js":
/*!**************************!*\
  !*** ./assets/js/App.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/data.js\");\n/* harmony import */ var _get_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-markup-all-orders-in-list */ \"./assets/js/get-markup-all-orders-in-list.js\");\n/* harmony import */ var _show_details_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details-order */ \"./assets/js/show-details-order.js\");\n/* harmony import */ var _add_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-event-listeners */ \"./assets/js/add-event-listeners.js\");\n\n\n\n\n\nfunction init() {\n  var orderListMain = document.querySelector('.order-list__main');\n  orderListMain.innerHTML = Object(_get_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_1__[\"getMarkupAllOrdersInList\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  document.querySelectorAll('.order-list__item')[1].classList.add('order-list__item--selected');\n  Object(_show_details_order__WEBPACK_IMPORTED_MODULE_2__[\"showDetailsOrder\"])(document.querySelector('.order-list__item--selected'), _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  Object(_add_event_listeners__WEBPACK_IMPORTED_MODULE_3__[\"addEventListeners\"])();\n}\n\nwindow.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./assets/js/App.js?");

/***/ }),

/***/ "./assets/js/add-event-listeners.js":
/*!******************************************!*\
  !*** ./assets/js/add-event-listeners.js ***!
  \******************************************/
/*! exports provided: addEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListeners\", function() { return addEventListeners; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/data.js\");\n/* harmony import */ var _show_details_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-details-order */ \"./assets/js/show-details-order.js\");\n\n\nfunction addEventListeners() {\n  var buttonBack = document.querySelector('.order-list__button-back');\n  var headerButton = document.querySelector('.header__button');\n  var contentWrapper = document.querySelector('.content-wrapper');\n  var orderList = document.querySelector('.order-list');\n  var buttonAddress = document.querySelector('.order__button-address');\n  var buttonProcessor = document.querySelector('.order__button-processor');\n  var sectionOrderAddress = document.querySelector('section.order__address');\n  var sectionOrderProcessor = document.querySelector('section.order__processor');\n  var orderItems = document.querySelectorAll('.order-list__item');\n  buttonBack.addEventListener('click', function () {\n    contentWrapper.classList.add('content-wrapper--menu-hidden');\n    headerButton.style.display = 'block';\n    orderList.style.display = 'none';\n  });\n  headerButton.addEventListener('click', function () {\n    contentWrapper.classList.remove('content-wrapper--menu-hidden');\n    headerButton.style.display = 'none';\n    orderList.style.display = 'block';\n  });\n  buttonAddress.addEventListener('click', function () {\n    buttonAddress.classList.toggle('order__button-address--selected');\n    sectionOrderAddress.classList.toggle('order__address--hidden');\n  });\n  buttonProcessor.addEventListener('click', function () {\n    buttonProcessor.classList.toggle('order__button-processor--selected');\n    sectionOrderProcessor.classList.toggle('order__processor--hidden');\n  });\n  orderItems.forEach(function (item) {\n    item.addEventListener('click', function () {\n      // remove class from last selected\n      document.querySelector('.order-list__item--selected').classList.remove('order-list__item--selected');\n      item.classList.add('order-list__item--selected');\n      Object(_show_details_order__WEBPACK_IMPORTED_MODULE_1__[\"showDetailsOrder\"])(item, _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/add-event-listeners.js?");

/***/ }),

/***/ "./assets/js/data.js":
/*!***************************!*\
  !*** ./assets/js/data.js ***!
  \***************************/
/*! exports provided: Orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Orders\", function() { return Orders; });\nvar Orders = [{\n  id: \"1\",\n  OrderInfo: {\n    createdAt: \"10.08.1991\",\n    customer: \"Alfreds Futterkiste\",\n    status: \"Accepted\",\n    shippedAt: \"8.09.1991\"\n  },\n  ShipTo: {\n    name: \"Maria Anders\",\n    Address: \"Obere Str. 57\",\n    ZIP: \"12209\",\n    Region: \"Germany\",\n    Country: \"Germany\"\n  },\n  CustomerInfo: {\n    firstName: \"Maria\",\n    lastName: \"Anders\",\n    address: \"Obere Str. 57\",\n    phone: \"030-0074321\",\n    email: \"Maria.Anders@company.com\"\n  },\n  products: [{\n    id: \"1\",\n    name: \"Chai\",\n    price: \"18\",\n    currency: \"EUR\",\n    quantity: \"2\",\n    totalPrice: \"36\"\n  }, {\n    id: \"2\",\n    name: \"Aniseed Syrup\",\n    price: \"10\",\n    currency: \"EUR\",\n    quantity: \"3\",\n    totalPrice: \"30\"\n  }, {\n    id: \"3\",\n    name: \"Chef Anton's Cajun Seasoning\",\n    price: \"22\",\n    currency: \"EUR\",\n    quantity: \"2\",\n    totalPrice: \"44\"\n  }, {\n    id: \"4\",\n    name: \"Chef Anton's Gumbo Mix\",\n    price: \"36\",\n    currency: \"EUR\",\n    quantity: \"21\",\n    totalPrice: \"756\"\n  }, {\n    id: \"5\",\n    name: \"Grandma's Boysenberry Spread\",\n    price: \"25\",\n    currency: \"EUR\",\n    quantity: \"5\",\n    totalPrice: \"125\"\n  }]\n}, {\n  id: \"2\",\n  OrderInfo: {\n    createdAt: \"23.12.2006\",\n    customer: \"Bon app\",\n    status: \"Pending\",\n    shippedAt: \"13.02.2007\"\n  },\n  ShipTo: {\n    name: \"Laurence Lebihan\",\n    Address: \"12, rue des Bouchers\",\n    ZIP: \"13008\",\n    Region: \"France\",\n    Country: \"France\"\n  },\n  CustomerInfo: {\n    firstName: \"Laurence\",\n    lastName: \"Lebihan\",\n    address: \"12, rue des Bouchers\",\n    phone: \"91.24.45.40\",\n    email: \"Laurence.Lebihan@company.com\"\n  },\n  products: [{\n    id: \"1\",\n    name: \"Queso Cabrales\",\n    price: \"21\",\n    currency: \"EUR\",\n    quantity: \"5\",\n    totalPrice: \"105\"\n  }, {\n    id: \"2\",\n    name: \"Queso Manchego La Pastora\",\n    price: \"38\",\n    currency: \"EUR\",\n    quantity: \"3\",\n    totalPrice: \"114\"\n  }, {\n    id: \"3\",\n    name: \"Pavlova\",\n    price: \"120\",\n    currency: \"EUR\",\n    quantity: \"5\",\n    totalPrice: \"600\"\n  }, {\n    id: \"4\",\n    name: \"Sir Rodney's Marmalade\",\n    price: \"5\",\n    currency: \"EUR\",\n    quantity: \"3\",\n    totalPrice: \"15\"\n  }, {\n    id: \"5\",\n    name: \"Genen Shouyu\",\n    price: \"40\",\n    currency: \"EUR\",\n    quantity: \"7\",\n    totalPrice: \"280\"\n  }, {\n    id: \"6\",\n    name: \"Tofu\",\n    price: \"23.25\",\n    currency: \"EUR\",\n    quantity: \"1\",\n    totalPrice: \"23.25\"\n  }, {\n    id: \"7\",\n    name: \"Alice Mutton\",\n    price: \"32\",\n    currency: \"EUR\",\n    quantity: \"39\",\n    totalPrice: \"1248\"\n  }]\n}];\n\n//# sourceURL=webpack:///./assets/js/data.js?");

/***/ }),

/***/ "./assets/js/get-markup-all-orders-in-list.js":
/*!****************************************************!*\
  !*** ./assets/js/get-markup-all-orders-in-list.js ***!
  \****************************************************/
/*! exports provided: getMarkupAllOrdersInList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupAllOrdersInList\", function() { return getMarkupAllOrdersInList; });\nfunction getMarkupAllOrdersInList(Orders) {\n  var numberOfOrders = document.querySelector('.order-list__header-row h3 span');\n  numberOfOrders.innerHTML = \"(\".concat(Orders.length, \")\");\n  var markup = '';\n  Orders.forEach(function (order) {\n    return addOrderMarkup(order);\n  });\n\n  function addOrderMarkup(order) {\n    markup += \"<div class=\\\"order-list__item\\\" id=\\\"\".concat(order.id, \"\\\">\\n      <div class=\\\"order-list__item-row\\\">\\n          <h4 class=\\\"order-list__item-order\\\">Order <span>\").concat(order.id, \"</span></h4>\\n          <h3 class=\\\"order-list__item-ordered-date\\\">\").concat(order.OrderInfo.createdAt, \"</h3>\\n      </div>\\n      <div class=\\\"order-list__item-row\\\">\\n          <h5 class=\\\"order-list__item-customer\\\">\").concat(order.CustomerInfo.firstName, \" \").concat(order.CustomerInfo.lastName, \"</h5>\\n          <h5 class=\\\"order-list__item-order-time order-list__item-order-time--in-time\\\">\").concat(order.OrderInfo.status, \"</h5>\\n      </div>\\n      <div class=\\\"order-list__item-row\\\">\\n          <h5 class=\\\"order-list__item-shipped\\\">Shipped: <span>\").concat(order.OrderInfo.shippedAt, \"</span></h5>\\n      </div>\\n    </div>\");\n  }\n\n  return markup;\n}\n\n//# sourceURL=webpack:///./assets/js/get-markup-all-orders-in-list.js?");

/***/ }),

/***/ "./assets/js/show-details-order.js":
/*!*****************************************!*\
  !*** ./assets/js/show-details-order.js ***!
  \*****************************************/
/*! exports provided: showDetailsOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDetailsOrder\", function() { return showDetailsOrder; });\nfunction showDetailsOrder(element, Orders) {\n  var sectionMainInfo = document.querySelector('section.order__main-info .wrapper');\n  var sectionOrderAddress = document.querySelector('section.order__address');\n  var sectionOrderProcessor = document.querySelector('section.order__processor');\n  var sectionOrderLineItems = document.querySelector('.order__line-items');\n  var order;\n  Orders.forEach(function (item) {\n    if (item.id === element.id) {\n      order = item;\n    }\n  });\n  console.log(order);\n  var totalCost = 0;\n  order.products.forEach(function (product) {\n    return totalCost += product.quantity * product.price;\n  });\n  totalCost = totalCost.toFixed(2);\n  var markup = \"\\n  <div class=\\\"order__row\\\">\\n      <h3 class=\\\"order__name\\\">Order <span>\".concat(order.id, \"</span></h3>\\n      <h3 class=\\\"order__cost\\\">\").concat(totalCost, \" <br><span>\").concat(order.products[0].currency, \"</span></h3>\\n  </div>\\n  <ul class=\\\"order__main-info-list\\\">\\n      <li class=\\\"order__customer\\\">Customer: <span></span>\").concat(order.CustomerInfo.firstName, \" \").concat(order.CustomerInfo.lastName, \"</span></li>\\n      <li class=\\\"order__ordered\\\">Ordered: <span>\").concat(order.OrderInfo.createdAt, \"</span></li>\\n      <li class=\\\"order__shipped\\\">Shipped: <span>\").concat(order.OrderInfo.shippedAt, \"</span></li>\\n  </ul>\");\n  sectionMainInfo.innerHTML = markup;\n  markup = \"\\n  <h4 class=\\\"order__address-heading address-processor-heading\\\">Shipping Address</h4>\\n  <ul class=\\\"order__address-list\\\">\\n      <div class=\\\"order__address-column column-1\\\">\\n          <li class=\\\"order__address-item\\\">Name: </li>\\n          <li class=\\\"order__address-item\\\">Street: </li>\\n          <li class=\\\"order__address-item\\\">ZIP Code / City: </li>\\n          <li class=\\\"order__address-item\\\">Region: </li>\\n          <li class=\\\"order__address-item\\\">Country: </li>\\n      </div>\\n      <div class=\\\"order__address-column column-2\\\">\\n          <li class=\\\"order__address-item\\\">\".concat(order.ShipTo.name, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Address, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.ZIP, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Region, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Country, \"</li>\\n      </div>                    \\n  </ul>\\n  <ul class=\\\"order__address-mobile-list\\\">\\n      <li class=\\\"order__address-item\\\">Name:</li><span>\").concat(order.ShipTo.name, \"</span>\\n      <li class=\\\"order__address-item\\\">Street:</li><span>\").concat(order.ShipTo.Address, \"</span>\\n      <li class=\\\"order__address-item\\\">ZIP Code / City:</li><span>\").concat(order.ShipTo.ZIP, \"</span>\\n      <li class=\\\"order__address-item\\\">Region:</li><span>\").concat(order.ShipTo.Region, \"</span>\\n      <li class=\\\"order__address-item\\\">Country:</li><span>\").concat(order.ShipTo.Country, \"</span>\\n  </ul>\");\n  sectionOrderAddress.innerHTML = markup;\n  markup = \"\\n  <h4 class=\\\"order__processor-heading address-processor-heading\\\">Customer Info</h4>\\n  <div class=\\\"order__processor-wrapper-info\\\">\\n    <ul class=\\\"order__processor-list\\\">\\n      <div class=\\\"order__processor-column order__address-column column-1\\\">\\n        <li class=\\\"order__address-item\\\">First Name: </li>\\n        <li class=\\\"order__address-item\\\">Last Name: </li>\\n        <li class=\\\"order__address-item\\\">Address: </li>\\n        <li class=\\\"order__address-item\\\">Phone: </li>\\n        <li class=\\\"order__address-item\\\">Email: </li>\\n      </div>\\n      <div class=\\\"order__processor-column order__address-column column-2\\\">\\n        <li class=\\\"order__address-item\\\">\".concat(order.CustomerInfo.firstName, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.lastName, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.address, \"</li>\\n        <li class=\\\"order__address-item order__processor-item--telephone\\\">\").concat(order.CustomerInfo.phone, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.email, \"</li>\\n      </div>                    \\n    </ul>\\n    <ul class=\\\"order__address-mobile-list\\\">\\n      <li class=\\\"order__address-item\\\">First Name:</li><span>\").concat(order.CustomerInfo.firstName, \"</span>\\n      <li class=\\\"order__address-item\\\">Last Name:</li><span>\").concat(order.CustomerInfo.lastName, \"</span>\\n      <li class=\\\"order__address-item\\\">Address:</li><span>\").concat(order.CustomerInfo.address, \"</span>\\n      <li class=\\\"order__address-item order__processor-item--telephone\\\">Phone:</li><span>\").concat(order.CustomerInfo.phone, \"</span>\\n      <li class=\\\"order__address-item\\\">Email:</li><span>\").concat(order.CustomerInfo.email, \"</span>\\n    </ul>\\n  </div>\");\n  sectionOrderProcessor.innerHTML = markup;\n  var markupProducts = '';\n  order.products.forEach(function (product) {\n    markupProducts += \"\\n    <div class=\\\"order__line-list-row\\\">\\n      <li class=\\\"product\\\">\".concat(product.name, \"<br><span>\").concat(product.id, \"</span></li>\\n      <li class=\\\"unit-price\\\"><span class=\\\"mobile-info\\\">Unit Price:<br></span>\").concat(product.price, \" \").concat(product.currency, \"</li>\\n      <li class=\\\"quantity\\\"><span class=\\\"mobile-info\\\">Quantity:<br></span>\").concat(product.quantity, \"</li>\\n      <li class=\\\"total\\\"><span class=\\\"mobile-info\\\">Total:<br></span>\").concat(product.totalPrice, \" \").concat(product.currency, \"</li>\\n    </div>\\n    <hr>\");\n  });\n  markup = \"\\n  <h4 class=\\\"order__line-items-heading\\\">Line Items <span>(\".concat(order.products.length, \")</span></h4>\\n  <hr>\\n  <ul class=\\\"order__line-list\\\">\\n    <div class=\\\"order__line-list-row order__line-list-row--headline\\\">\\n      <li class=\\\"product\\\">Product</li>\\n      <li class=\\\"unit-price\\\">Unit Price</li>\\n      <li class=\\\"quantity\\\">Quantity</li>\\n      <li class=\\\"total\\\">Total</li>\\n    </div>\\n    <hr>\\n    \").concat(markupProducts, \"\\n  </ul> \");\n  sectionOrderLineItems.innerHTML = markup;\n}\n\n//# sourceURL=webpack:///./assets/js/show-details-order.js?");

/***/ })

/******/ });