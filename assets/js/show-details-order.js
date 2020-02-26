export function showDetailsOrder(element, Orders) {
  const sectionMainInfo = document.querySelector('section.order__main-info .wrapper');
  const sectionOrderAddress = document.querySelector('section.order__address');
  const sectionOrderProcessor = document.querySelector('section.order__processor');
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  let order;

  Orders.forEach((item) => {
    if (item.id === element.id) {
      order = item;
    }
  });

  let totalCost = 0;
  order.products.forEach((product) => totalCost += (product.quantity * product.price));
  totalCost = totalCost.toFixed(2);

  let markup =`
  <div class="order__row">
      <h3 class="order__name">Order <span>${order.id}</span></h3>
      <h3 class="order__cost">${totalCost} <br><span>${order.products[0].currency}</span></h3>
  </div>
  <ul class="order__main-info-list">
      <li class="order__customer">Customer: <span></span>${order.CustomerInfo.firstName} ${order.CustomerInfo.lastName}</span></li>
      <li class="order__ordered">Ordered: <span>${order.OrderInfo.createdAt}</span></li>
      <li class="order__shipped">Shipped: <span>${order.OrderInfo.shippedAt}</span></li>
  </ul>`;
  sectionMainInfo.innerHTML = markup;

  markup = `
  <h4 class="order__address-heading address-processor-heading">Shipping Address</h4>
  <ul class="order__address-list">
      <div class="order__address-column column-1">
          <li class="order__address-item">Name: </li>
          <li class="order__address-item">Street: </li>
          <li class="order__address-item">ZIP Code / City: </li>
          <li class="order__address-item">Region: </li>
          <li class="order__address-item">Country: </li>
      </div>
      <div class="order__address-column column-2">
          <li class="order__address-item">${order.ShipTo.name}</li>
          <li class="order__address-item">${order.ShipTo.Address}</li>
          <li class="order__address-item">${order.ShipTo.ZIP}</li>
          <li class="order__address-item">${order.ShipTo.Region}</li>
          <li class="order__address-item">${order.ShipTo.Country}</li>
      </div>                    
  </ul>
  <ul class="order__address-mobile-list">
      <li class="order__address-item">Name:</li><span>${order.ShipTo.name}</span>
      <li class="order__address-item">Street:</li><span>${order.ShipTo.Address}</span>
      <li class="order__address-item">ZIP Code / City:</li><span>${order.ShipTo.ZIP}</span>
      <li class="order__address-item">Region:</li><span>${order.ShipTo.Region}</span>
      <li class="order__address-item">Country:</li><span>${order.ShipTo.Country}</span>
  </ul>`;
  sectionOrderAddress.innerHTML = markup;

  markup = `
  <h4 class="order__processor-heading address-processor-heading">Customer Info</h4>
  <div class="order__processor-wrapper-info">
    <ul class="order__processor-list">
      <div class="order__processor-column order__address-column column-1">
        <li class="order__address-item">First Name: </li>
        <li class="order__address-item">Last Name: </li>
        <li class="order__address-item">Address: </li>
        <li class="order__address-item">Phone: </li>
        <li class="order__address-item">Email: </li>
      </div>
      <div class="order__processor-column order__address-column column-2">
        <li class="order__address-item">${order.CustomerInfo.firstName}</li>
        <li class="order__address-item">${order.CustomerInfo.lastName}</li>
        <li class="order__address-item">${order.CustomerInfo.address}</li>
        <li class="order__address-item order__processor-item--telephone">${order.CustomerInfo.phone}</li>
        <li class="order__address-item">${order.CustomerInfo.email}</li>
      </div>                    
    </ul>
    <ul class="order__address-mobile-list">
      <li class="order__address-item">First Name:</li><span>${order.CustomerInfo.firstName}</span>
      <li class="order__address-item">Last Name:</li><span>${order.CustomerInfo.lastName}</span>
      <li class="order__address-item">Address:</li><span>${order.CustomerInfo.address}</span>
      <li class="order__address-item order__processor-item--telephone">Phone:</li><span>${order.CustomerInfo.phone}</span>
      <li class="order__address-item">Email:</li><span>${order.CustomerInfo.email}</span>
    </ul>
  </div>`;
  sectionOrderProcessor.innerHTML = markup;

  const numberLineItems = document.querySelector('.order__line-items-heading span');
  numberLineItems.innerHTML = `(${order.products.length})`;

  markup = '';
  order.products.forEach((product) => {
    markup += `
    <div class="order__line-list-row">
      <li class="product">
        <span class = "value">${product.name}</span>
        <span class = "id">${product.id}</span>
      </li>
      <li class="unit-price">
        <span class="mobile-info">Unit Price:<br></span>
        <span class = "value">${product.price}</span>
        <span class="currency">${product.currency}</span>
      </li>
      <li class="quantity">
        <span class="mobile-info">Quantity:<br></span>
        <span class = "value">${product.quantity}</span>
      </li>
      <li class="total">
        <span class="mobile-info">Total:<br></span>
        <span class = "value">${product.totalPrice}</span>
        <span class="currency">${product.currency}</span>
      </li>
    </div>`;  
  });
  sectionOrderLineItems.innerHTML = markup;
}