export function getMarkupCreateProductForm() {  
  return `
  <div class="wrapper-product-form">
    <div class="create-product-form">
      <h3>Please, write product details</h3>
      <form action="#">
        <input type="text" placeholder="Id">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Price">
        <input type="text" placeholder="Currency">
        <input type="text" placeholder="Quantity">
        <input type="text" placeholder="Total Price">
        <input type="submit" class="submit-create-order" value="Create Product">
      </form>     
      <div class="cancel-create-order"></div> 
    </div>
  </div>`;    
}