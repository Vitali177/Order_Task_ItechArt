export function clearSettingsToDefault() {
  const inputOrders =  document.querySelector('.order-list__input-search');
  const inputProducts =  document.querySelector('.order__line-items-input-search');
  const sortingImages = document.querySelectorAll('.sort-picture');

  inputOrders.value = "";
  inputProducts.value = "";

  sortingImages.forEach(image => {  // clear images to default
    image.classList.remove('sort-picture--ASC');
    image.classList.remove('sort-picture--DESC');
  });
}