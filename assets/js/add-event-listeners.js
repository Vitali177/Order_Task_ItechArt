import { Orders } from "./data";
import { showDetailsOrder } from "./show-details-order";
import { searchOrders } from "./search-orders";
import { searchProducts } from "./search-products";
import { sortingProducts } from "./sorting-products";
import { clearSettingsToDefault } from "./clear-settings-to-default";
import { createMarkupAllOrdersInList } from "./create-markup-all-orders-in-list";

export function addEventListeners() {
  const tabletWidth = 1075;

  const buttonBack = document.querySelector(".order-list__button-back");
  const headerButton = document.querySelector(".header__button");

  const contentWrapper = document.querySelector(".content-wrapper");
  const orderList = document.querySelector(".order-list");
  const orderItemsMain = document.querySelector(".order-list__main");  
  
  const orderButtons = document.querySelector(".order__buttons");

  const sectionOrderAddress = document.querySelector("section.order__address");
  const sectionOrderProcessor = document.querySelector("section.order__processor");

  const searchFromOrdersList = document.querySelector(".order-list__input-search");
  const imageSearchFromOrdersList = document.querySelector(".order-list__form .order-list__button-search");
  const searchFromProductsTable = document.querySelector(".order__line-items-input-search");
  const imageSearchFromProductsTable = document.querySelector(".order__line-items-form .order-list__button-search");

  const listOfProductsHeader = document.querySelector(".order__line-list-row--headline");

  buttonBack.addEventListener("click", () => {
    contentWrapper.classList.add("content-wrapper--menu-hidden");
    headerButton.classList.remove("header__button--hidden");
    orderList.classList.add("order-list--hidden");
  });

  headerButton.addEventListener("click", () => {
    contentWrapper.classList.remove("content-wrapper--menu-hidden");
    headerButton.classList.add("header__button--hidden");
    orderList.classList.remove("order-list--hidden");
  });

  orderItemsMain.addEventListener("click", (e) => {
    if (!e.target.classList.contains("order-list__main")) { //  event delegation      
      let orderListItem = e.target;

      while (!orderListItem.classList.contains("order-list__item")) { //find clicked order
        orderListItem = orderListItem.parentNode;
      }

      createMarkupAllOrdersInList(Orders); // show all orders in menu
      document.querySelector(`div[id="${orderListItem.id}"]`).classList.add("order-list__item--selected");
      
      showDetailsOrder(orderListItem, Orders);
      clearSettingsToDefault();

      if (window.innerWidth < tabletWidth) {
        buttonBack.click(); // hide the menu when the user selects an order
      }
    }
  });

  orderButtons.addEventListener("click", (e) => { //  event delegation    
    if (e.target.classList.contains("order__button")) {
      document.querySelector(".order__button--selected").classList.remove("order__button--selected");
      e.target.classList.toggle("order__button--selected");

      document.querySelector(".tab--selected").classList.remove("tab--selected");
      if (e.target.classList.contains("order__button-address")) {
        sectionOrderAddress.classList.add("tab--selected");
      } else if (e.target.classList.contains("order__button-processor")) {
        sectionOrderProcessor.classList.add("tab--selected");
      }
    }
  });

  imageSearchFromOrdersList.addEventListener("click", (e) => {
    e.preventDefault();
    searchOrders(searchFromOrdersList.value, Orders);
  });

  imageSearchFromProductsTable.addEventListener("click", (e) => {
    e.preventDefault();
    searchProducts(searchFromProductsTable.value, Orders);
  }); 

  listOfProductsHeader.addEventListener("click", (e) => { //  event delegation  
    if (e.target.classList.contains("sort-picture")) {
      sortingProducts(e.target, Orders);
    }
  });
}