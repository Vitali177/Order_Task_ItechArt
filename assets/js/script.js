import { Orders } from './data';

function init () {
  const buttonBack = document.querySelector('.order-list__button-back');
  const headerButton = document.querySelector('.header__button');
  const contentWrapper = document.querySelector('.content-wrapper');
  const orderList = document.querySelector('.order-list');
  const orderListMain = document.querySelector('.order-list__main');
  const sectionMainInfo = document.querySelector('section.order__main-info');

  buttonBack.addEventListener('click', () => {
    contentWrapper.classList.add('content-wrapper--menu-hidden');
    headerButton.style.display = 'block';
    orderList.style.display = 'none';
  });

  headerButton.addEventListener('click', () => {
    contentWrapper.classList.remove('content-wrapper--menu-hidden');
    headerButton.style.display = 'none';
    orderList.style.display = 'block';
  });


  Orders.forEach((order) => addOrderMarkup(order));
  document.querySelector('.order-list__item').classList.add('order-list__item--selected');
  showMainInfo(document.querySelector('.order-list__item'));

  function addOrderMarkup(order) {
    const markup = 
    `<div class="order-list__item">
      <div class="order-list__item-row">
          <h4 class="order-list__item-order">Order <span>${order.id}</span></h4>
          <h3 class="order-list__item-ordered-date">${order.OrderInfo.createdAt}</h3>
      </div>
      <div class="order-list__item-row">
          <h5 class="order-list__item-customer">${order.CustomerInfo.firstName} ${order.CustomerInfo.lastName}</h5>
          <h5 class="order-list__item-order-time order-list__item-order-time--in-time">${order.OrderInfo.status}</h5>
      </div>
      <div class="order-list__item-row">
          <h5 class="order-list__item-shipped">Shipped: <span>${order.OrderInfo.shippedAt}</span></h5>
      </div>
    </div>`;
    
    orderListMain.innerHTML += markup;
    document.querySelector('.order-list__item:last-child').id = order.id;
  }


  function showMainInfo(element) {
    let order;
    Orders.forEach((item) => {
      if (item.id === element.id) {
        order = item;
      }
    });
    console.log(order);

    // ! Посчитать сумму заказа

    const markup = 
    `<div class="order__row">
        <h3 class="order__name">Order <span>${order.id}</span></h3>
        <h3 class="order__cost">150 935,13 <br><span>${order.products[0].currency}</span></h3>
    </div>
    <ul class="order__main-info-list">
        <li class="order__customer">Customer: <span></span>${order.CustomerInfo.firstName} ${order.CustomerInfo.lastName}</span></li>
        <li class="order__ordered">Ordered: <span>${order.OrderInfo.createdAt}</span></li>
        <li class="order__shipped">Shipped: <span>${order.OrderInfo.shippedAt}</span></li>
    </ul>                
    <div class="order__buttons">
        <div class="order__button-address order__button-address--selected"></div>
        <div class="order__button-processor"></div>
    </div>`;

    sectionMainInfo.innerHTML = markup;
  }
}

window.addEventListener('DOMContentLoaded', () => init());