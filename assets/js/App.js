import { Orders } from './data';
import { getMarkupAllOrdersInList } from './get-markup-all-orders-in-list';
import { showDetailsOrder } from './show-details-order';
import { addEventListeners } from './add-event-listeners';

function init() {
  const orderListMain = document.querySelector('.order-list__main');  
  orderListMain.innerHTML = getMarkupAllOrdersInList(Orders);

  document.querySelectorAll('.order-list__item')[1].classList.add('order-list__item--selected');
  showDetailsOrder(document.querySelector('.order-list__item--selected'), Orders);

  addEventListeners();  
}

window.addEventListener('DOMContentLoaded', init);