import { Orders } from "./data";
import { getMarkupOrderInList } from "./html-markups/get-markup-order-in-list";

export function searchOrders(searchText) {
  const numberOfOrders = document.querySelector(".order-list__header-row h3 span");
  const orderListMain = document.querySelector(".order-list__main");
  const orders = [...Orders];

  let matchesOrders = orders.filter(order => {
    const regex = new RegExp(`^${searchText}`, "gi");

    for (let key in order) {
      if (key === "id" || key === "OrderInfo" || key === "ShipTo" || key === "CustomerInfo") {
        let mainProperties = order[key];
        for (let key in mainProperties) {
          if (mainProperties[key].match(regex)) return 1;
        }    
      }        
    }
    return 0;
  });

  if (searchText.length === 0) {
    matchesOrders = orders; // show all list when input is empty
  }

  if (matchesOrders.length > 0) {
    const markup = matchesOrders.map(order => getMarkupOrderInList(order)).join("");
    orderListMain.innerHTML = markup;
  } else {
    orderListMain.innerHTML = "<div class="no-orders">Orders not found</div>";
  }
  numberOfOrders.innerHTML = `(${matchesOrders.length})`;
}