import { Orders } from './data';

export function sortingProducts() {
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  const idSelectedOrder = document.querySelector('.order-list__item--selected').id;
  let order;

  Orders.forEach((item) => {
    if (item.id === idSelectedOrder) {
      order = item;
    }
  });
  
  const products = order.products;
  console.log(products);

  const sortedProducts = products.sort((a, b) => a.price - b.price);
  console.log(sortedProducts);
  
  let markup = '';
  sortedProducts.forEach((product) => {
    markup += `
    <div class="order__line-list-row">
      <li class="product">${product.name}<br><span>${product.id}</span></li>
      <li class="unit-price"><span class="mobile-info">Unit Price:<br></span>${product.price} ${product.currency}</li>
      <li class="quantity"><span class="mobile-info">Quantity:<br></span>${product.quantity}</li>
      <li class="total"><span class="mobile-info">Total:<br></span>${product.totalPrice} ${product.currency}</li>
    </div>
    <hr>`;  
  });
  sectionOrderLineItems.innerHTML = markup;
}