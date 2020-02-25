import { Orders } from './data';

export function searchProducts(searchText) {
  const orderLineList = document.querySelector('.order__line-list .wrapper');
  const id = document.querySelector('h3.order__name span').innerHTML;
  let order;

  Orders.forEach((item) => {
    if (item.id === id) {
      order = item;
    }
  });
  const products = [...order.products];

  let matchesProducts = products.filter(product => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return product.id.match(regex) || product.name.match(regex) || product.price.match(regex) 
      || product.quantity.match(regex) || product.totalPrice.match(regex);
  });

  if (searchText.length === 0) {
    matchesProducts = products; // show all list when input is empty
  }

  if (matchesProducts.length > 0) {
    const markup = matchesProducts.map(
      product => `
      <div class="order__line-list-row">
        <li class="product">${product.name}<br><span>${product.id}</span></li>
        <li class="unit-price"><span class="mobile-info">Unit Price:<br></span>${product.price} ${product.currency}</li>
        <li class="quantity"><span class="mobile-info">Quantity:<br></span>${product.quantity}</li>
        <li class="total"><span class="mobile-info">Total:<br></span>${product.totalPrice} ${product.currency}</li>
      </div>
      <hr>
    `).join('');

    orderLineList.innerHTML = markup;
  } else {
    orderLineList.innerHTML = '<div class="no-products">Products not found</div>';
  }
} 