import { getMarkupOrderMainInfo } from "../html-markups/get-markup-order-main-info";
import { getMarkupOrderAddress } from "../html-markups/get-markup-order-address";
import { getMarkupOrderCustomer } from "../html-markups/get-markup-order-customer"; 
import { getMarkupOrderMap } from "../html-markups/get-markup-order-map";
import { getMarkupOrderProduct } from "../html-markups/get-markup-order-product";
import { generateYandexMap } from "./generate-yandex-map";

export function showDetailsOrder(element, Orders) {
  const sectionMainInfo = document.querySelector("section.order__main-info .wrapper");
  const sectionOrderAddress = document.querySelector("section.order__address");
  const sectionOrderProcessor = document.querySelector("section.order__processor");
  const sectionOrderMap = document.querySelector("section.order__map");
  const sectionOrderLineItems = document.querySelector("section.order__line-items .wrapper");
  const numberLineItems = document.querySelector(".order__line-items-heading span");
  let order;

  function getCoords() {
    const country = document.querySelector(".order-input-country").value;
    const queryApi = 'https://api.opencagedata.com/geocode/v1/json?';
    const accessKey = `q=${country}&key=ddc1c7bc04434a968ca2655d83467aee&pretty=1&no_annotations=1&language=en`;
    const url = queryApi + accessKey;

    fetch(url)
      .then(res => res.json())
      .then(data => generateYandexMap(data.results[0].geometry.lat, data.results[0].geometry.lng));    
  }

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
  getCoords();

  let markup = "";
  order.products.forEach((product) => {
    markup += getMarkupOrderProduct(product);  
  });

  sectionOrderLineItems.innerHTML = markup;
  numberLineItems.innerHTML = `(${order.products.length})`;
}