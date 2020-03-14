import { Orders } from "../data/data";
import { showDetailsOrder } from "./show-details-order";

export function deleteOrder() {
  const orderListMain = document.querySelector(".order-list__main");
  const selectedOrder = document.querySelector(".order-list__item--selected");
  const indexSelectedOrder = 0;  // default selected order

  if (selectedOrder) {
    orderListMain.removeChild(selectedOrder);

    if (document.querySelectorAll(".order-list__item").length) {
      document.querySelectorAll(".order-list__item")[indexSelectedOrder].classList.add("order-list__item--selected");
      showDetailsOrder(document.querySelector(".order-list__item--selected"), Orders);
    }

      // ! Удалить на сервере
  }
}