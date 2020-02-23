import { Orders } from './data';
import { getMarkupAllOrdersInList } from './get-markup-all-orders-in-list';
import { showDetailsOrder } from './show-details-order';
import { addEventListeners } from './add-event-listeners';

function init() {
  if (window.innerWidth < 1075) {
    document.querySelector('.order-list').classList.add('order-list--hidden');
    document.querySelector('.order-list').style.display = 'none';
    setTimeout(() => document.querySelector('.order-list').style.display = 'block', 500);
  }

  const orderListMain = document.querySelector('.order-list__main');  
  orderListMain.innerHTML = getMarkupAllOrdersInList(Orders);

  document.querySelectorAll('.order-list__item')[1].classList.add('order-list__item--selected');
  showDetailsOrder(document.querySelector('.order-list__item--selected'), Orders);

  addEventListeners();  
}

window.addEventListener('DOMContentLoaded', init);