import { Orders } from './data';
import { showDetailsOrder } from './show-details-order';
import { searchOrders } from './search-orders';
import { sortingProducts } from './sorting-products';

export function addEventListeners() {
  const buttonBack = document.querySelector('.order-list__button-back');
  const headerButton = document.querySelector('.header__button');

  const contentWrapper = document.querySelector('.content-wrapper');
  const orderList = document.querySelector('.order-list');  

  const buttonAddress = document.querySelector('.order__button-address');
  const buttonProcessor = document.querySelector('.order__button-processor');
  const sectionOrderAddress = document.querySelector('section.order__address');
  const sectionOrderProcessor = document.querySelector('section.order__processor');

  const orderItems = document.querySelectorAll('.order-list__item');

  const searchFromOrdersList = document.querySelector('.order-list__form input');
  const imagesOfSortingProducts = document.querySelectorAll('.order__line-list-row--headline img');
  let sortingDirection = 'from-minimum';

  buttonBack.addEventListener('click', () => {
    contentWrapper.classList.add('content-wrapper--menu-hidden');
    headerButton.style.display = 'block';
    orderList.classList.add('order-list--hidden');
  });

  headerButton.addEventListener('click', () => {
    contentWrapper.classList.remove('content-wrapper--menu-hidden');
    headerButton.style.display = 'none';
    orderList.classList.remove('order-list--hidden');
  });

  buttonAddress.addEventListener('click', () => {
    buttonAddress.classList.toggle('order__button-address--selected');
    sectionOrderAddress.classList.toggle('order__address--hidden');
  });

  buttonProcessor.addEventListener('click', () => {
    buttonProcessor.classList.toggle('order__button-processor--selected');
    sectionOrderProcessor.classList.toggle('order__processor--hidden');
  });

  orderItems.forEach((item) => {
    item.addEventListener('click', () => {
      // remove class from last selected
      document.querySelector('.order-list__item--selected').classList.remove('order-list__item--selected');

      item.classList.add('order-list__item--selected');
      showDetailsOrder(item, Orders); // ! Переписать в делегирование сделать один обработчик для order-list__main
    
      if (window.innerWidth < 1075) { // ! magic number
        buttonBack.click(); // hide the menu when the user selects an order
      }
    });
  });

  searchFromOrdersList.addEventListener('input', () => {
    searchOrders(searchFromOrdersList.value);
  });

  imagesOfSortingProducts.forEach((image) => {
    image.addEventListener('click', () => {
      sortingProducts(image.parentNode.classList.value, sortingDirection);
      sortingDirection = (sortingDirection === 'from-maximum') ? 'from-minimum' : 'from-maximum';
    });
  });
}