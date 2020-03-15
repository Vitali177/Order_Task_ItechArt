export function getMarkupCreateOrderForm() {  
  return `
  <div class="wrapper-order-form wrapper-pop-up-form"">
    <div class="create-order-form pop-up-form">
      <h3>Please, write order details</h3>
      <form action="#">
        <input type="text" placeholder="Id">
        <h4>Order Info</h4>
        <input type="text" placeholder="Created at">
        <input type="text" placeholder="Customer">
        <input type="text" placeholder="Status">
        <input type="text" placeholder="Shipped ad">
        <h4>Ship to Info</h4>
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Address">
        <input type="text" placeholder="ZIP">
        <input type="text" placeholder="Region">
        <input type="text" placeholder="Country">
        <h4>Customer Info</h4>
        <input type="text" placeholder="First name">
        <input type="text" placeholder="Last name">
        <input type="text" placeholder="Address">
        <input type="text" placeholder="Phone">
        <input type="text" placeholder="Email">
        <input type="submit" class="submit-create-order" value="Create Order">
      </form>     
      <div class="order-cancel-button cancel-button"></div> 
    </div>
  </div>`;    
}