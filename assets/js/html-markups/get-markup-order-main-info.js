export function getMarkupOrderMainInfo(order, totalCost) {  
  return `
  <div class="order__row">
      <h3 class="order__name">Order <span>${order.id}</span></h3>
      <h3 class="order__cost">${totalCost} <br><span>${order.products[0].currency}</span></h3>
  </div>
  <ul class="order__main-info-list">
      <li class="order__customer">Customer: <span></span>${order.CustomerInfo.firstName} ${order.CustomerInfo.lastName}</span></li>
      <li class="order__ordered">Ordered: <span>${order.OrderInfo.createdAt}</span></li>
      <li class="order__shipped">Shipped: <span>${order.OrderInfo.shippedAt}</span></li>
  </ul>`;    
}