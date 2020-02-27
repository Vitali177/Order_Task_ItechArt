export function getMarkupOrderCustomer(order) {  
  return `
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
}