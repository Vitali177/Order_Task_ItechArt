import { Orders } from "./data";
import { getMarkupAllOrdersInList } from "./get-markup-all-orders-in-list";
import { showDetailsOrder } from "./show-details-order";
import { addEventListeners } from "./add-event-listeners";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const tabletWidth = 1075;

  if (window.innerWidth < tabletWidth) { // removing menu animation (leaving to left), when user just opened the page
    const menu = document.querySelector(".order-list");
    menu.classList.add("order-list--hidden");
    menu.style.display = "none";
    setTimeout(() => menu.style.display = "block", 0);
  }

  const orderListMain = document.querySelector(".order-list__main");  
  orderListMain.innerHTML = getMarkupAllOrdersInList(Orders);

  document.querySelectorAll(".order-list__item")[1].classList.add("order-list__item--selected");  // default selected order
  showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);

  addEventListeners();  
}