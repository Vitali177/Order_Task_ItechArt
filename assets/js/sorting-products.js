import { Orders } from './data';

export function sortingProducts(sortingCriterion, sortingDirection) {
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  const idSelectedOrder = document.querySelector('.order-list__item--selected').id;
  let order, sortedProducts;

  Orders.forEach((item) => {
    if (item.id === idSelectedOrder) {
      order = item;
    }
  });
  
  const products = order.products;

  let sortingKey;
  if (sortingCriterion === 'product') sortingKey = 'name';
  else if (sortingCriterion === 'unit-price') sortingKey = 'price';
  else if (sortingCriterion === 'quantity') sortingKey = 'quantity';
  else if (sortingCriterion === 'total') sortingKey = 'totalPrice';

  if (sortingDirection === 'from-maximum') {
    if (sortingKey === 'name') sortedProducts = products.sort((a, b) => {
      if (b[sortingKey] > a[sortingKey]) return 1;
      return (b[sortingKey] < a[sortingKey]) ? -1 : 0;
    }); else sortedProducts = products.sort((a, b) => a[sortingKey] - b[sortingKey]);
  } else {
    if (sortingKey === 'name') sortedProducts = products.sort((a, b) => {
      if (a[sortingKey] > b[sortingKey]) return 1;
      return (a[sortingKey] < b[sortingKey]) ? -1 : 0;
    }); else sortedProducts = products.sort((a, b) => b[sortingKey] - a[sortingKey]);
  }  
  
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