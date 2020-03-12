import { Orders } from "./data/data";
import { createMarkupAllOrdersInList } from "./modules/create-markup-all-orders-in-list";
import { showDetailsOrder } from "./modules/show-details-order";
import { addEventListeners } from "./modules/add-event-listeners";
import { setupApplicationUI } from "./modules/setup-application-UI";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const indexSelectedOrder = 0;  // default selected order

  setupApplicationUI();  
  createMarkupAllOrdersInList(Orders);

  if (document.querySelectorAll(".order-list__item").length) {
    document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
    showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);
  } else {  // if there are no orders, here it will be called processing function
    
  }  

  addEventListeners();  
}