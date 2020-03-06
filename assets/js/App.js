import { Orders } from "./data/data";
import { createMarkupAllOrdersInList } from "./modules/create-markup-all-orders-in-list";
import { showDetailsOrder } from "./modules/show-details-order";
import { addEventListeners } from "./modules/add-event-listeners";
import { setupApplicationUI } from "./modules/setup-application-UI";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const indexSelectedOrder = 1;  // default selected order

  setupApplicationUI();  
  createMarkupAllOrdersInList(Orders);

  document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
  showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);

  addEventListeners();  
}