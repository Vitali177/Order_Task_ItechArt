export function getMarkupOrderAddress(order) {  
  return `
  <div class="order__address-header"> 
    <h4 class="order__address-heading address-processor-heading">Shipping Address</h4>
    <div class="button-edit-display">Edit</div>
  </div>
  <ul class="order__address-list">
      <div class="order__address-column column-1">
          <li class="order__address-item">Name: </li>
          <li class="order__address-item">Street: </li>
          <li class="order__address-item">ZIP Code / City: </li>
          <li class="order__address-item">Region: </li>
          <li class="order__address-item">Country: </li>
      </div>
      <div class="order__address-column column-2">
          <li class="order__address-item"><input type="text" value="${order.ShipTo.name}" readonly></li>
          <li class="order__address-item"><input type="text" value="${order.ShipTo.Address}" readonly></li>
          <li class="order__address-item"><input type="text" value="${order.ShipTo.ZIP}" readonly></li>
          <li class="order__address-item"><input type="text" value="${order.ShipTo.Region}" readonly></li>
          <li class="order__address-item"><input type="text" class="order-input-country" value="${order.ShipTo.Country}" readonly></li>
      </div>                    
  </ul>
  <ul class="order__address-mobile-list">
      <li class="order__address-item">Name:</li><input type="text" value="${order.ShipTo.name}" readonly>
      <li class="order__address-item">Street:</li><input type="text" value="${order.ShipTo.Address}" readonly>
      <li class="order__address-item">ZIP Code / City:</li><input type="text" value="${order.ShipTo.ZIP}" readonly>
      <li class="order__address-item">Region:</li><input type="text" value="${order.ShipTo.Region}" readonly>
      <li class="order__address-item">Country:</li><input type="text" class="order-input-country" value="${order.ShipTo.Country}" readonly>
  </ul>`;    
}