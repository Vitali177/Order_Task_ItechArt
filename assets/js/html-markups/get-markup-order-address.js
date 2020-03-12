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
}