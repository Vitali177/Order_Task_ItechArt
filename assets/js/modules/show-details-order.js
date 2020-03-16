import { getMarkupOrderMainInfo } from "../html-markups/get-markup-order-main-info";
import { getMarkupOrderAddress } from "../html-markups/get-markup-order-address";
import { getMarkupOrderCustomer } from "../html-markups/get-markup-order-customer"; 
import { getMarkupOrderMap } from "../html-markups/get-markup-order-map";
import { getMarkupOrderProduct } from "../html-markups/get-markup-order-product";

export function showDetailsOrder(element, Orders) {
  const sectionMainInfo = document.querySelector("section.order__main-info .wrapper");
  const sectionOrderAddress = document.querySelector("section.order__address");
  const sectionOrderProcessor = document.querySelector("section.order__processor");
  const sectionOrderMap = document.querySelector("section.order__map");
  const sectionOrderLineItems = document.querySelector("section.order__line-items .wrapper");
  const numberLineItems = document.querySelector(".order__line-items-heading span");
  let order;

  Orders.forEach((item) => {
    if (item.id === element.id) {
      order = item;
    }
  });

  let totalCost = 0;
  order.products.forEach((product) => totalCost += (product.quantity * product.price));
  totalCost = totalCost.toFixed(2);

  sectionMainInfo.innerHTML = getMarkupOrderMainInfo(order, totalCost);
  sectionOrderAddress.innerHTML = getMarkupOrderAddress(order);
  sectionOrderProcessor.innerHTML = getMarkupOrderCustomer(order);
  sectionOrderMap.innerHTML = getMarkupOrderMap(order);

  let markup = "";
  order.products.forEach((product) => {
    markup += getMarkupOrderProduct(product);  
  });

  sectionOrderLineItems.innerHTML = markup;
  numberLineItems.innerHTML = `(${order.products.length})`;
}