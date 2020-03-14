export function deleteProduct(button) {
  const wrapperOfProducts = document.querySelector(".order__line-list > .wrapper");
  const numberOfProducts = document.querySelector(".order__line-items-heading span");
  let product = button.parentNode;
  
  while (!product.classList.contains("order__line-list-row")) {
    product = product.parentNode;
  }

  wrapperOfProducts.removeChild(product);
  numberOfProducts.innerHTML = `(${+(numberOfProducts.innerHTML.slice(1, -1)) - 1})`;

  // ! Удалить на сервере
}