export function getMarkupOrderCustomer(order) {  
  return `
  <div class="order__address-header"> 
    <h4 class="order__processor-heading address-processor-heading">Customer Info</h4>
    <div class="button-edit-display">Edit</div>
  </div>
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
        <li class="order__address-item"><input type="text" value="${order.CustomerInfo.firstName}" readonly></li>
        <li class="order__address-item"><input type="text" value="${order.CustomerInfo.lastName}" readonly></li>
        <li class="order__address-item"><input type="text" value="${order.CustomerInfo.address}" readonly></li>
        <li class="order__address-item order__processor-item--telephone"><input type="text" value="${order.CustomerInfo.phone}" readonly></li>
        <li class="order__address-item"><input type="text" value="${order.CustomerInfo.email}" readonly></li>
      </div>                    
    </ul>
    <ul class="order__address-mobile-list">
      <li class="order__address-item">First Name:</li><input type="text" value="${order.CustomerInfo.firstName}" readonly>
      <li class="order__address-item">Last Name:</li><input type="text" value="${order.CustomerInfo.lastName}" readonly>
      <li class="order__address-item">Address:</li><input type="text" value="${order.CustomerInfo.address}" readonly>
      <li class="order__address-item order__processor-item--telephone">Phone:</li><input type="text" value="${order.CustomerInfo.phone}" readonly>
      <li class="order__address-item">Email:</li><input type="text" value="${order.CustomerInfo.email}" readonly>
    </ul>
  </div>`;    
}