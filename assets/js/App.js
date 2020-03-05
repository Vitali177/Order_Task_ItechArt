import { Orders } from "./data";
import { createMarkupAllOrdersInList } from "./create-markup-all-orders-in-list";
import { showDetailsOrder } from "./show-details-order";
import { addEventListeners } from "./add-event-listeners";
import { setupApplicationUI } from "./setup-application-UI";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const indexSelectedOrder = 1;  // default selected order

  setupApplicationUI();  
  createMarkupAllOrdersInList(Orders);

  document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
  showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);

  addEventListeners();  
}