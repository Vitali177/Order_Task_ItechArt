import { searchProducts } from './search-products';

export function sortingProducts(sortingCriterion, e) {
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  const products = [...document.querySelectorAll('.wrapper .order__line-list-row')];  

  const image = e.target;
  let sortingDirection = null;
  console.log(image);


  if (image.classList.contains('sort-picture--ASC')) {
    image.classList.remove('sort-picture--ASC');
    image.classList.add('sort-picture--DESC');
    sortingDirection = 'DESC';
  } else if (image.classList.contains('sort-picture--DESC')) {
    image.classList.remove('sort-picture--DESC');
    sortingDirection = 'DEFAULT';
  } else {
    image.classList.add('sort-picture--ASC');
    sortingDirection = 'ASC';
  }

  if (sortingDirection === 'DEFAULT') {    
    searchProducts(document.querySelector('.order__line-items-input-search').value); // display columns by default
    return;
  }

  const sortedProducts = products.sort((a, b) => {
    const value1 = a.querySelector(`.${sortingCriterion} .value`).innerHTML;
    const value2 = b.querySelector(`.${sortingCriterion} .value`).innerHTML;

    if (sortingCriterion === 'product') {
      if (sortingDirection === 'DESC') {
        if (value2 > value1) return 1;
        return (value2 < value1) ? -1 : 0;
      } else {
        if (value1 > value2) return 1;
        return (value1 < value2) ? -1 : 0;
      } 
    } else return (sortingDirection === 'DESC') ? (value1 - value2) : (value2 - value1);     
  }); 
  
  sectionOrderLineItems.innerHTML = '';

  sortedProducts.forEach((element) => {
    sectionOrderLineItems.appendChild(element);
  });
}