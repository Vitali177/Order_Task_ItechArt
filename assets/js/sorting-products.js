export function sortingProducts(sortingCriterion, sortingDirection) {
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  const products = [...document.querySelectorAll('.wrapper .order__line-list-row')];  
  let sortedProducts;

  if (sortingCriterion === 'product') sortedProducts = products.sort((a, b) => {
    let value1 = a.querySelector(`.${sortingCriterion} .value`).innerHTML;
    let value2 = b.querySelector(`.${sortingCriterion} .value`).innerHTML;

    if (sortingDirection === 'from-maximum') {
      if (value2 > value1) return 1;
      return (value2 < value1) ? -1 : 0;
    } else {
      if (value1 > value2) return 1;
      return (value1 < value2) ? -1 : 0;
    }    
  }); else {
    sortedProducts = products.sort((a, b) => {
      let value1 = a.querySelector(`.${sortingCriterion} .value`).innerHTML;
      let value2 = b.querySelector(`.${sortingCriterion} .value`).innerHTML;

      if (sortingDirection === 'from-maximum') return value1 - value2;
      else return value2 - value1;
    });
  }   
  
  sectionOrderLineItems.innerHTML = '';

  sortedProducts.forEach((element) => {
    sectionOrderLineItems.appendChild(element);
  });
}