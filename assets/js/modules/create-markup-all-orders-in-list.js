import { getMarkupOrderInList } from "../html-markups/get-markup-order-in-list";

export function createMarkupAllOrdersInList(Orders) {
  const orderListMain = document.querySelector(".order-list__main");  
  const numberOfOrders = document.querySelector(".order-list__header-row h3 span");
  let markup = "";

  numberOfOrders.innerHTML = `(${Orders.length})`;  
  Orders.forEach(order => markup += getMarkupOrderInList(order));

  orderListMain.innerHTML = markup;
}