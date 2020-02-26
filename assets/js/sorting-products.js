export function sortingProducts(sortingCriterion, sortingDirection) {
  const sectionOrderLineItems = document.querySelector('section.order__line-items .wrapper');
  const products = [...document.querySelectorAll('.wrapper .order__line-list-row')];  

  const sortedProducts = products.sort((a, b) => {
    const value1 = a.querySelector(`.${sortingCriterion} .value`).innerHTML;
    const value2 = b.querySelector(`.${sortingCriterion} .value`).innerHTML;

    if (sortingCriterion === 'product') {
      if (sortingDirection === 'from-maximum') {
        if (value2 > value1) return 1;
        return (value2 < value1) ? -1 : 0;
      } else {
        if (value1 > value2) return 1;
        return (value1 < value2) ? -1 : 0;
      } 
    } else return (sortingDirection === 'from-maximum') ? (value1 - value2) : (value2 - value1);     
  }); 
  
  sectionOrderLineItems.innerHTML = '';

  sortedProducts.forEach((element) => {
    sectionOrderLineItems.appendChild(element);
  });
}