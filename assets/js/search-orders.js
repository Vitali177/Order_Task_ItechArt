import { Orders } from './data';
import { getMarkupAllOrdersInList } from './get-markup-all-orders-in-list';

export function searchOrders(searchText) {
  const orderListMain = document.querySelector('.order-list__main');
  const orders = [...Orders];

  let matchesOrders = orders.filter(order => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return order.id.match(regex) || order.ShipTo.name.match(regex);
  });

  if (searchText.length === 0) {
    matchesOrders = [];
    orderListMain.innerHTML = getMarkupAllOrdersInList(Orders); // show all list when input is empty
    return;
  }

  if (matchesOrders.length > 0) {
    const markup = matchesOrders.map(
      order => `
      <div class="order-list__item" id="${order.id}">
        <div class="order-list__item-row">
            <h4 class="order-list__item-order">Order <span>${order.id}</span></h4>
            <h3 class="order-list__item-ordered-date">${order.OrderInfo.createdAt}</h3>
        </div>
        <div class="order-list__item-row">
            <h5 class="order-list__item-customer">${order.CustomerInfo.firstName} ${order.CustomerInfo.lastName}</h5>
            <h5 class="order-list__item-order-time order-list__item-order-time--in-time">${order.OrderInfo.status}</h5>
        </div>
        <div class="order-list__item-row">
            <h5 class="order-list__item-shipped">Shipped: <span>${order.OrderInfo.shippedAt}</span></h5>
        </div>
      </div>
    `).join('');

    orderListMain.innerHTML = markup;
  } else {
    orderListMain.innerHTML = '<h3>Orders not found</h3>';
  }
}