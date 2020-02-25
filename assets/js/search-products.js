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
        </div>
      `).join('');

    orderLineList.innerHTML = markup;
  } else {
    orderLineList.innerHTML = '<div class="no-products">Products not found</div>';
  }
} 