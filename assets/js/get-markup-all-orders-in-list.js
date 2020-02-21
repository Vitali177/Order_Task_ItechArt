export function getMarkupAllOrdersInList(Orders) {
  const numberOfOrders = document.querySelector('.order-list__header-row h3 span');
  numberOfOrders.innerHTML = `(${Orders.length})`;
  
  let markup = '';
  Orders.forEach((order) => addOrderMarkup(order));

  function addOrderMarkup(order) {
    markup += 
    `<div class="order-list__item" id="${order.id}">
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
    </div>`;    
  }
  return markup;
}