import { Orders } from "../data/data";
import { showDetailsOrder } from "./show-details-order";

export function deleteOrder() {
  const orderListMain = document.querySelector(".order-list__main");
  const selectedOrder = document.querySelector(".order-list__item--selected");
  const numberOfOrders = document.querySelector(".order-list__header-row h3 span");
  const indexSelectedOrder = 0;  // default selected order

  if (selectedOrder) {
    orderListMain.removeChild(selectedOrder);
    numberOfOrders.innerHTML = `(${+(numberOfOrders.innerHTML.slice(1, -1)) - 1})`;

    if (document.querySelectorAll(".order-list__item").length) {
      document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
      showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);
    } else {  // If there are no orders after delete last order
      orderListMain.innerHTML = `<div class="no-orders">Orders not found</div>`;
    }

    // ! Удалить на сервере
  }
}