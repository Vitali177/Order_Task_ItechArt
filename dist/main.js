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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/data.js\");\n/* harmony import */ var _create_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-markup-all-orders-in-list */ \"./assets/js/create-markup-all-orders-in-list.js\");\n/* harmony import */ var _show_details_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details-order */ \"./assets/js/show-details-order.js\");\n/* harmony import */ var _add_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-event-listeners */ \"./assets/js/add-event-listeners.js\");\n/* harmony import */ var _setup_application_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-application-UI */ \"./assets/js/setup-application-UI.js\");\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", init);\n\nfunction init() {\n  var indexSelectedOrder = 1; // default selected order\n\n  Object(_setup_application_UI__WEBPACK_IMPORTED_MODULE_4__[\"setupApplicationUI\"])();\n  Object(_create_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_1__[\"createMarkupAllOrdersInList\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  document.querySelectorAll(\".order-list__item\")[indexSelectedOrder].classList.add(\"order-list__item--selected\");\n  Object(_show_details_order__WEBPACK_IMPORTED_MODULE_2__[\"showDetailsOrder\"])(document.querySelector(\".order-list__item--selected\"), _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  Object(_add_event_listeners__WEBPACK_IMPORTED_MODULE_3__[\"addEventListeners\"])();\n}\n\n//# sourceURL=webpack:///./assets/js/App.js?");

/***/ }),

/***/ "./assets/js/add-event-listeners.js":
/*!******************************************!*\
  !*** ./assets/js/add-event-listeners.js ***!
  \******************************************/
/*! exports provided: addEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListeners\", function() { return addEventListeners; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/data.js\");\n/* harmony import */ var _show_details_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-details-order */ \"./assets/js/show-details-order.js\");\n/* harmony import */ var _search_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-orders */ \"./assets/js/search-orders.js\");\n/* harmony import */ var _search_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-products */ \"./assets/js/search-products.js\");\n/* harmony import */ var _sorting_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorting-products */ \"./assets/js/sorting-products.js\");\n/* harmony import */ var _clear_settings_to_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear-settings-to-default */ \"./assets/js/clear-settings-to-default.js\");\n/* harmony import */ var _create_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-markup-all-orders-in-list */ \"./assets/js/create-markup-all-orders-in-list.js\");\n\n\n\n\n\n\n\nfunction addEventListeners() {\n  var tabletWidth = 1075;\n  var buttonBack = document.querySelector(\".order-list__button-back\");\n  var headerButton = document.querySelector(\".header__button\");\n  var contentWrapper = document.querySelector(\".content-wrapper\");\n  var orderList = document.querySelector(\".order-list\");\n  var orderItemsMain = document.querySelector(\".order-list__main\");\n  var orderButtons = document.querySelector(\".order__buttons\");\n  var sectionOrderAddress = document.querySelector(\"section.order__address\");\n  var sectionOrderProcessor = document.querySelector(\"section.order__processor\");\n  var searchFromOrdersList = document.querySelector(\".order-list__input-search\");\n  var imageSearchFromOrdersList = document.querySelector(\".order-list__form .order-list__button-search\");\n  var searchFromProductsTable = document.querySelector(\".order__line-items-input-search\");\n  var imageSearchFromProductsTable = document.querySelector(\".order__line-items-form .order-list__button-search\");\n  var imagesOfSortingProducts = document.querySelectorAll(\".order__line-list-row--headline .sort-picture\");\n  buttonBack.addEventListener(\"click\", function () {\n    contentWrapper.classList.add(\"content-wrapper--menu-hidden\");\n    headerButton.classList.remove(\"header__button--hidden\"); // headerButton.style.display = \"block\";\n\n    orderList.classList.add(\"order-list--hidden\");\n  });\n  headerButton.addEventListener(\"click\", function () {\n    contentWrapper.classList.remove(\"content-wrapper--menu-hidden\");\n    headerButton.classList.add(\"header__button--hidden\"); // headerButton.style.display = \"none\";\n\n    orderList.classList.remove(\"order-list--hidden\");\n  });\n  orderItemsMain.addEventListener(\"click\", function (e) {\n    if (!e.target.classList.contains(\"order-list__main\")) {\n      //  event delegation      \n      var orderListItem = e.target;\n\n      while (!orderListItem.classList.contains(\"order-list__item\")) {\n        //find clicked order\n        orderListItem = orderListItem.parentNode;\n      }\n\n      Object(_create_markup_all_orders_in_list__WEBPACK_IMPORTED_MODULE_6__[\"createMarkupAllOrdersInList\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]); // show all orders in menu\n\n      document.querySelector(\"div[id=\\\"\".concat(orderListItem.id, \"\\\"]\")).classList.add(\"order-list__item--selected\");\n      Object(_show_details_order__WEBPACK_IMPORTED_MODULE_1__[\"showDetailsOrder\"])(orderListItem, _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n      Object(_clear_settings_to_default__WEBPACK_IMPORTED_MODULE_5__[\"clearSettingsToDefault\"])();\n\n      if (window.innerWidth < tabletWidth) {\n        buttonBack.click(); // hide the menu when the user selects an order\n      }\n    }\n  });\n  orderButtons.addEventListener(\"click\", function (e) {\n    //  event delegation    \n    if (e.target.classList.contains(\"order__button\")) {\n      document.querySelector(\".order__button--selected\").classList.remove(\"order__button--selected\");\n      e.target.classList.toggle(\"order__button--selected\");\n      document.querySelector(\".tab--selected\").classList.remove(\"tab--selected\");\n\n      if (e.target.classList.contains(\"order__button-address\")) {\n        sectionOrderAddress.classList.add(\"tab--selected\");\n      } else if (e.target.classList.contains(\"order__button-processor\")) {\n        sectionOrderProcessor.classList.add(\"tab--selected\");\n      }\n    }\n  });\n  imageSearchFromOrdersList.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    Object(_search_orders__WEBPACK_IMPORTED_MODULE_2__[\"searchOrders\"])(searchFromOrdersList.value, _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  });\n  imageSearchFromProductsTable.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    Object(_search_products__WEBPACK_IMPORTED_MODULE_3__[\"searchProducts\"])(searchFromProductsTable.value, _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n  });\n  imagesOfSortingProducts.forEach(function (image) {\n    image.addEventListener(\"click\", function (e) {\n      Object(_sorting_products__WEBPACK_IMPORTED_MODULE_4__[\"sortingProducts\"])(e, image.parentNode.classList.value, _data__WEBPACK_IMPORTED_MODULE_0__[\"Orders\"]);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/add-event-listeners.js?");

/***/ }),

/***/ "./assets/js/clear-settings-to-default.js":
/*!************************************************!*\
  !*** ./assets/js/clear-settings-to-default.js ***!
  \************************************************/
/*! exports provided: clearSettingsToDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSettingsToDefault\", function() { return clearSettingsToDefault; });\nfunction clearSettingsToDefault() {\n  var inputOrders = document.querySelector(\".order-list__input-search\");\n  var inputProducts = document.querySelector(\".order__line-items-input-search\");\n  var sortingImages = document.querySelectorAll(\".sort-picture\");\n  var buttonAddress = document.querySelector(\".order__button-address\");\n  var sectionOrderAddress = document.querySelector(\"section.order__address\");\n  inputOrders.value = \"\";\n  inputProducts.value = \"\";\n  sortingImages.forEach(function (image) {\n    // clear images to default\n    image.classList.remove(\"sort-picture--ASC\");\n    image.classList.remove(\"sort-picture--DESC\");\n  }); // should show address tab by default\n\n  document.querySelector(\".order__button--selected\").classList.remove(\"order__button--selected\");\n  buttonAddress.classList.add(\"order__button--selected\");\n  document.querySelector(\".tab--selected\").classList.remove(\"tab--selected\");\n  sectionOrderAddress.classList.add(\"tab--selected\");\n}\n\n//# sourceURL=webpack:///./assets/js/clear-settings-to-default.js?");

/***/ }),

/***/ "./assets/js/create-markup-all-orders-in-list.js":
/*!*******************************************************!*\
  !*** ./assets/js/create-markup-all-orders-in-list.js ***!
  \*******************************************************/
/*! exports provided: createMarkupAllOrdersInList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMarkupAllOrdersInList\", function() { return createMarkupAllOrdersInList; });\n/* harmony import */ var _html_markups_get_markup_order_in_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-markups/get-markup-order-in-list */ \"./assets/js/html-markups/get-markup-order-in-list.js\");\n\nfunction createMarkupAllOrdersInList(Orders) {\n  var orderListMain = document.querySelector(\".order-list__main\");\n  var numberOfOrders = document.querySelector(\".order-list__header-row h3 span\");\n  var markup = \"\";\n  numberOfOrders.innerHTML = \"(\".concat(Orders.length, \")\");\n  Orders.forEach(function (order) {\n    return markup += Object(_html_markups_get_markup_order_in_list__WEBPACK_IMPORTED_MODULE_0__[\"getMarkupOrderInList\"])(order);\n  });\n  orderListMain.innerHTML = markup;\n}\n\n//# sourceURL=webpack:///./assets/js/create-markup-all-orders-in-list.js?");

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

/***/ "./assets/js/html-markups/get-markup-order-address.js":
/*!************************************************************!*\
  !*** ./assets/js/html-markups/get-markup-order-address.js ***!
  \************************************************************/
/*! exports provided: getMarkupOrderAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupOrderAddress\", function() { return getMarkupOrderAddress; });\nfunction getMarkupOrderAddress(order) {\n  return \"\\n  <h4 class=\\\"order__address-heading address-processor-heading\\\">Shipping Address</h4>\\n  <ul class=\\\"order__address-list\\\">\\n      <div class=\\\"order__address-column column-1\\\">\\n          <li class=\\\"order__address-item\\\">Name: </li>\\n          <li class=\\\"order__address-item\\\">Street: </li>\\n          <li class=\\\"order__address-item\\\">ZIP Code / City: </li>\\n          <li class=\\\"order__address-item\\\">Region: </li>\\n          <li class=\\\"order__address-item\\\">Country: </li>\\n      </div>\\n      <div class=\\\"order__address-column column-2\\\">\\n          <li class=\\\"order__address-item\\\">\".concat(order.ShipTo.name, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Address, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.ZIP, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Region, \"</li>\\n          <li class=\\\"order__address-item\\\">\").concat(order.ShipTo.Country, \"</li>\\n      </div>                    \\n  </ul>\\n  <ul class=\\\"order__address-mobile-list\\\">\\n      <li class=\\\"order__address-item\\\">Name:</li><span>\").concat(order.ShipTo.name, \"</span>\\n      <li class=\\\"order__address-item\\\">Street:</li><span>\").concat(order.ShipTo.Address, \"</span>\\n      <li class=\\\"order__address-item\\\">ZIP Code / City:</li><span>\").concat(order.ShipTo.ZIP, \"</span>\\n      <li class=\\\"order__address-item\\\">Region:</li><span>\").concat(order.ShipTo.Region, \"</span>\\n      <li class=\\\"order__address-item\\\">Country:</li><span>\").concat(order.ShipTo.Country, \"</span>\\n  </ul>\");\n}\n\n//# sourceURL=webpack:///./assets/js/html-markups/get-markup-order-address.js?");

/***/ }),

/***/ "./assets/js/html-markups/get-markup-order-customer.js":
/*!*************************************************************!*\
  !*** ./assets/js/html-markups/get-markup-order-customer.js ***!
  \*************************************************************/
/*! exports provided: getMarkupOrderCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupOrderCustomer\", function() { return getMarkupOrderCustomer; });\nfunction getMarkupOrderCustomer(order) {\n  return \"\\n  <h4 class=\\\"order__processor-heading address-processor-heading\\\">Customer Info</h4>\\n  <div class=\\\"order__processor-wrapper-info\\\">\\n    <ul class=\\\"order__processor-list\\\">\\n      <div class=\\\"order__processor-column order__address-column column-1\\\">\\n        <li class=\\\"order__address-item\\\">First Name: </li>\\n        <li class=\\\"order__address-item\\\">Last Name: </li>\\n        <li class=\\\"order__address-item\\\">Address: </li>\\n        <li class=\\\"order__address-item\\\">Phone: </li>\\n        <li class=\\\"order__address-item\\\">Email: </li>\\n      </div>\\n      <div class=\\\"order__processor-column order__address-column column-2\\\">\\n        <li class=\\\"order__address-item\\\">\".concat(order.CustomerInfo.firstName, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.lastName, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.address, \"</li>\\n        <li class=\\\"order__address-item order__processor-item--telephone\\\">\").concat(order.CustomerInfo.phone, \"</li>\\n        <li class=\\\"order__address-item\\\">\").concat(order.CustomerInfo.email, \"</li>\\n      </div>                    \\n    </ul>\\n    <ul class=\\\"order__address-mobile-list\\\">\\n      <li class=\\\"order__address-item\\\">First Name:</li><span>\").concat(order.CustomerInfo.firstName, \"</span>\\n      <li class=\\\"order__address-item\\\">Last Name:</li><span>\").concat(order.CustomerInfo.lastName, \"</span>\\n      <li class=\\\"order__address-item\\\">Address:</li><span>\").concat(order.CustomerInfo.address, \"</span>\\n      <li class=\\\"order__address-item order__processor-item--telephone\\\">Phone:</li><span>\").concat(order.CustomerInfo.phone, \"</span>\\n      <li class=\\\"order__address-item\\\">Email:</li><span>\").concat(order.CustomerInfo.email, \"</span>\\n    </ul>\\n  </div>\");\n}\n\n//# sourceURL=webpack:///./assets/js/html-markups/get-markup-order-customer.js?");

/***/ }),

/***/ "./assets/js/html-markups/get-markup-order-in-list.js":
/*!************************************************************!*\
  !*** ./assets/js/html-markups/get-markup-order-in-list.js ***!
  \************************************************************/
/*! exports provided: getMarkupOrderInList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupOrderInList\", function() { return getMarkupOrderInList; });\nfunction getMarkupOrderInList(order) {\n  return \"\\n  <div class=\\\"order-list__item\\\" id=\\\"\".concat(order.id, \"\\\">\\n    <div class=\\\"order-list__item-row\\\">\\n        <h4 class=\\\"order-list__item-order\\\">Order <span>\").concat(order.id, \"</span></h4>\\n        <h3 class=\\\"order-list__item-ordered-date\\\">\").concat(order.OrderInfo.createdAt, \"</h3>\\n    </div>\\n    <div class=\\\"order-list__item-row\\\">\\n        <h5 class=\\\"order-list__item-customer\\\">\").concat(order.CustomerInfo.firstName, \" \").concat(order.CustomerInfo.lastName, \"</h5>\\n        <h5 class=\\\"order-list__item-order-time order-list__item-order-time--in-time\\\">\").concat(order.OrderInfo.status, \"</h5>\\n    </div>\\n    <div class=\\\"order-list__item-row\\\">\\n        <h5 class=\\\"order-list__item-shipped\\\">Shipped: <span>\").concat(order.OrderInfo.shippedAt, \"</span></h5>\\n    </div>\\n  </div>\");\n}\n\n//# sourceURL=webpack:///./assets/js/html-markups/get-markup-order-in-list.js?");

/***/ }),

/***/ "./assets/js/html-markups/get-markup-order-main-info.js":
/*!**************************************************************!*\
  !*** ./assets/js/html-markups/get-markup-order-main-info.js ***!
  \**************************************************************/
/*! exports provided: getMarkupOrderMainInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupOrderMainInfo\", function() { return getMarkupOrderMainInfo; });\nfunction getMarkupOrderMainInfo(order, totalCost) {\n  return \"\\n  <div class=\\\"order__row\\\">\\n      <h3 class=\\\"order__name\\\">Order <span>\".concat(order.id, \"</span></h3>\\n      <h3 class=\\\"order__cost\\\">\").concat(totalCost, \" <br><span>\").concat(order.products[0].currency, \"</span></h3>\\n  </div>\\n  <ul class=\\\"order__main-info-list\\\">\\n      <li class=\\\"order__customer\\\">Customer: <span></span>\").concat(order.CustomerInfo.firstName, \" \").concat(order.CustomerInfo.lastName, \"</span></li>\\n      <li class=\\\"order__ordered\\\">Ordered: <span>\").concat(order.OrderInfo.createdAt, \"</span></li>\\n      <li class=\\\"order__shipped\\\">Shipped: <span>\").concat(order.OrderInfo.shippedAt, \"</span></li>\\n  </ul>\");\n}\n\n//# sourceURL=webpack:///./assets/js/html-markups/get-markup-order-main-info.js?");

/***/ }),

/***/ "./assets/js/html-markups/get-markup-order-product.js":
/*!************************************************************!*\
  !*** ./assets/js/html-markups/get-markup-order-product.js ***!
  \************************************************************/
/*! exports provided: getMarkupOrderProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkupOrderProduct\", function() { return getMarkupOrderProduct; });\nfunction getMarkupOrderProduct(product) {\n  return \"\\n  <div class=\\\"order__line-list-row\\\">\\n    <li class=\\\"product\\\">\\n      <span class = \\\"value\\\">\".concat(product.name, \"</span>\\n      <span class = \\\"id\\\">\").concat(product.id, \"</span>\\n    </li>\\n    <li class=\\\"unit-price\\\">\\n      <span class=\\\"mobile-info\\\">Unit Price:<br></span>\\n      <span class = \\\"value\\\">\").concat(product.price, \"</span>\\n      <span class=\\\"currency\\\">\").concat(product.currency, \"</span>\\n    </li>\\n    <li class=\\\"quantity\\\">\\n      <span class=\\\"mobile-info\\\">Quantity:<br></span>\\n      <span class = \\\"value\\\">\").concat(product.quantity, \"</span>\\n    </li>\\n    <li class=\\\"total\\\">\\n      <span class=\\\"mobile-info\\\">Total:<br></span>\\n      <span class = \\\"value\\\">\").concat(product.totalPrice, \"</span>\\n      <span class=\\\"currency\\\">\").concat(product.currency, \"</span>\\n    </li>\\n  </div>\");\n}\n\n//# sourceURL=webpack:///./assets/js/html-markups/get-markup-order-product.js?");

/***/ }),

/***/ "./assets/js/search-orders.js":
/*!************************************!*\
  !*** ./assets/js/search-orders.js ***!
  \************************************/
/*! exports provided: searchOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchOrders\", function() { return searchOrders; });\n/* harmony import */ var _html_markups_get_markup_order_in_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-markups/get-markup-order-in-list */ \"./assets/js/html-markups/get-markup-order-in-list.js\");\n\nfunction searchOrders(searchText, Orders) {\n  var numberOfOrders = document.querySelector(\".order-list__header-row h3 span\");\n  var orderListMain = document.querySelector(\".order-list__main\");\n  var orderMainCriteria = [\"id\", \"OrderInfo\", \"ShipTo\", \"CustomerInfo\"];\n  var matchesOrders = Orders.filter(function (order) {\n    var regex = new RegExp(\"^\".concat(searchText), \"gi\");\n\n    for (var keyMain in order) {\n      if (orderMainCriteria.indexOf(keyMain) !== -1) {\n        var mainProperties = order[keyMain];\n\n        for (var key in mainProperties) {\n          if (mainProperties[key].match(regex)) return 1;\n        }\n      }\n    }\n  });\n\n  if (!searchText.length) {\n    matchesOrders = Orders; // show all list when input is empty\n  }\n\n  if (matchesOrders.length) {\n    var markup = matchesOrders.map(function (order) {\n      return Object(_html_markups_get_markup_order_in_list__WEBPACK_IMPORTED_MODULE_0__[\"getMarkupOrderInList\"])(order);\n    }).join(\"\");\n    orderListMain.innerHTML = markup;\n  } else {\n    orderListMain.innerHTML = \"<div class=\\\"no-orders\\\">Orders not found</div>\";\n  }\n\n  numberOfOrders.innerHTML = \"(\".concat(matchesOrders.length, \")\");\n}\n\n//# sourceURL=webpack:///./assets/js/search-orders.js?");

/***/ }),

/***/ "./assets/js/search-products.js":
/*!**************************************!*\
  !*** ./assets/js/search-products.js ***!
  \**************************************/
/*! exports provided: searchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchProducts\", function() { return searchProducts; });\n/* harmony import */ var _html_markups_get_markup_order_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-markups/get-markup-order-product */ \"./assets/js/html-markups/get-markup-order-product.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nfunction searchProducts(searchText, Orders) {\n  var numberLineItems = document.querySelector(\".order__line-items-heading span\");\n  var orderLineList = document.querySelector(\".order__line-list .wrapper\");\n  var id = document.querySelector(\"h3.order__name span\").innerHTML;\n  var order;\n  Orders.forEach(function (item) {\n    if (item.id === id) {\n      order = item;\n    }\n  });\n\n  var products = _toConsumableArray(order.products);\n\n  var matchesProducts = products.filter(function (product) {\n    var regex = new RegExp(\"^\".concat(searchText), \"gi\");\n    return product.id.match(regex) || product.name.match(regex) || product.price.match(regex) || product.quantity.match(regex) || product.totalPrice.match(regex);\n  });\n\n  if (!searchText.length) {\n    matchesProducts = products; // show all list when input is empty\n  }\n\n  if (matchesProducts.length) {\n    var markup = matchesProducts.map(function (product) {\n      return Object(_html_markups_get_markup_order_product__WEBPACK_IMPORTED_MODULE_0__[\"getMarkupOrderProduct\"])(product);\n    }).join(\"\");\n    orderLineList.innerHTML = markup;\n  } else {\n    orderLineList.innerHTML = \"<div class=\\\"no-products\\\">Products not found</div>\";\n  }\n\n  numberLineItems.innerHTML = \"(\".concat(matchesProducts.length, \")\");\n}\n\n//# sourceURL=webpack:///./assets/js/search-products.js?");

/***/ }),

/***/ "./assets/js/setup-application-UI.js":
/*!*******************************************!*\
  !*** ./assets/js/setup-application-UI.js ***!
  \*******************************************/
/*! exports provided: setupApplicationUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupApplicationUI\", function() { return setupApplicationUI; });\nfunction setupApplicationUI() {\n  var tabletWidth = 1075; // removing menu animation (leaving to left), when user just opened the page\n\n  if (window.innerWidth < tabletWidth) {\n    var menu = document.querySelector(\".order-list\");\n    var timeout = 0;\n    menu.classList.add(\"order-list--hidden\");\n    menu.style.display = \"none\";\n    setTimeout(function () {\n      return menu.style.display = \"block\";\n    }, timeout);\n  } // hides button for menu in header, because the menu is already open\n\n\n  if (window.innerWidth > tabletWidth) {\n    var headerButton = document.querySelector(\".header__button\");\n    headerButton.classList.add(\"header__button--hidden\");\n  }\n}\n\n//# sourceURL=webpack:///./assets/js/setup-application-UI.js?");

/***/ }),

/***/ "./assets/js/show-details-order.js":
/*!*****************************************!*\
  !*** ./assets/js/show-details-order.js ***!
  \*****************************************/
/*! exports provided: showDetailsOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDetailsOrder\", function() { return showDetailsOrder; });\n/* harmony import */ var _html_markups_get_markup_order_main_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-markups/get-markup-order-main-info */ \"./assets/js/html-markups/get-markup-order-main-info.js\");\n/* harmony import */ var _html_markups_get_markup_order_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-markups/get-markup-order-address */ \"./assets/js/html-markups/get-markup-order-address.js\");\n/* harmony import */ var _html_markups_get_markup_order_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-markups/get-markup-order-customer */ \"./assets/js/html-markups/get-markup-order-customer.js\");\n/* harmony import */ var _html_markups_get_markup_order_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-markups/get-markup-order-product */ \"./assets/js/html-markups/get-markup-order-product.js\");\n\n\n\n\nfunction showDetailsOrder(element, Orders) {\n  var sectionMainInfo = document.querySelector(\"section.order__main-info .wrapper\");\n  var sectionOrderAddress = document.querySelector(\"section.order__address\");\n  var sectionOrderProcessor = document.querySelector(\"section.order__processor\");\n  var sectionOrderLineItems = document.querySelector(\"section.order__line-items .wrapper\");\n  var numberLineItems = document.querySelector(\".order__line-items-heading span\");\n  var order;\n  Orders.forEach(function (item) {\n    if (item.id === element.id) {\n      order = item;\n    }\n  });\n  var totalCost = 0;\n  order.products.forEach(function (product) {\n    return totalCost += product.quantity * product.price;\n  });\n  totalCost = totalCost.toFixed(2);\n  sectionMainInfo.innerHTML = Object(_html_markups_get_markup_order_main_info__WEBPACK_IMPORTED_MODULE_0__[\"getMarkupOrderMainInfo\"])(order, totalCost);\n  sectionOrderAddress.innerHTML = Object(_html_markups_get_markup_order_address__WEBPACK_IMPORTED_MODULE_1__[\"getMarkupOrderAddress\"])(order);\n  sectionOrderProcessor.innerHTML = Object(_html_markups_get_markup_order_customer__WEBPACK_IMPORTED_MODULE_2__[\"getMarkupOrderCustomer\"])(order);\n  var markup = \"\";\n  order.products.forEach(function (product) {\n    markup += Object(_html_markups_get_markup_order_product__WEBPACK_IMPORTED_MODULE_3__[\"getMarkupOrderProduct\"])(product);\n  });\n  sectionOrderLineItems.innerHTML = markup;\n  numberLineItems.innerHTML = \"(\".concat(order.products.length, \")\");\n}\n\n//# sourceURL=webpack:///./assets/js/show-details-order.js?");

/***/ }),

/***/ "./assets/js/sorting-products.js":
/*!***************************************!*\
  !*** ./assets/js/sorting-products.js ***!
  \***************************************/
/*! exports provided: sortingProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortingProducts\", function() { return sortingProducts; });\n/* harmony import */ var _search_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-products */ \"./assets/js/search-products.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nfunction sortingProducts(e, sortingCriterion, Orders) {\n  var sectionOrderLineItems = document.querySelector(\"section.order__line-items .wrapper\");\n\n  var products = _toConsumableArray(document.querySelectorAll(\".wrapper .order__line-list-row\"));\n\n  var image = e.target;\n  var alphabetSortCriterion = \"product\";\n  var defaultDirection = \"default\";\n  var directionASC = \"ASC\";\n  var directionDESC = \"DESC\";\n  var sortingDirection = null;\n  var lastSortingImages = [].concat(_toConsumableArray(document.querySelectorAll(\".sort-picture--DESC\")), _toConsumableArray(document.querySelectorAll(\".sort-picture--ASC\")));\n  lastSortingImages.forEach(function (lastImage) {\n    // show default state of other \"active\" images\n    if (image !== lastImage) {\n      lastImage.classList.remove(\"sort-picture--DESC\");\n      lastImage.classList.remove(\"sort-picture--ASC\");\n    }\n  });\n\n  if (image.classList.contains(\"sort-picture--ASC\")) {\n    image.classList.remove(\"sort-picture--ASC\");\n    image.classList.add(\"sort-picture--DESC\");\n    sortingDirection = directionDESC;\n  } else if (image.classList.contains(\"sort-picture--DESC\")) {\n    image.classList.remove(\"sort-picture--DESC\");\n    sortingDirection = defaultDirection;\n  } else {\n    image.classList.add(\"sort-picture--ASC\");\n    sortingDirection = directionASC;\n  }\n\n  if (sortingDirection === defaultDirection) {\n    Object(_search_products__WEBPACK_IMPORTED_MODULE_0__[\"searchProducts\"])(document.querySelector(\".order__line-items-input-search\").value, Orders); // display columns by default\n\n    return;\n  }\n\n  var sortedProducts = products.sort(function (a, b) {\n    var value1 = a.querySelector(\".\".concat(sortingCriterion, \" .value\")).innerHTML;\n    var value2 = b.querySelector(\".\".concat(sortingCriterion, \" .value\")).innerHTML;\n\n    if (sortingCriterion === alphabetSortCriterion) {\n      if (sortingDirection === directionDESC) {\n        if (value2 > value1) return 1;\n        return value2 < value1 ? -1 : 0;\n      } else {\n        if (value1 > value2) return 1;\n        return value1 < value2 ? -1 : 0;\n      }\n    } else return sortingDirection === directionDESC ? value1 - value2 : value2 - value1;\n  });\n  sectionOrderLineItems.innerHTML = \"\";\n  sortedProducts.forEach(function (element) {\n    sectionOrderLineItems.appendChild(element);\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/sorting-products.js?");

/***/ })

/******/ });