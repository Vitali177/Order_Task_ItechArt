import { Orders } from "./data";
import { getMarkupAllOrdersInList } from "./get-markup-all-orders-in-list";
import { showDetailsOrder } from "./show-details-order";
import { addEventListeners } from "./add-event-listeners";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const tabletWidth = 1075;
  const indexSelectedOrder = 1;  // default selected order

  if (window.innerWidth < tabletWidth) { // removing menu animation (leaving to left), when user just opened the page
    const menu = document.querySelector(".order-list");
    menu.classList.add("order-list--hidden");
    menu.style.display = "none";
    setTimeout(() => menu.style.display = "block", 0);
  }

  const orderListMain = document.querySelector(".order-list__main");  
  orderListMain.innerHTML = getMarkupAllOrdersInList(Orders);

  document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
  showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);

  addEventListeners();  
}