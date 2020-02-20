const buttonBack = document.querySelector('.order-list__button-back');
const headerButton = document.querySelector('.header__button');
const contentWrapper = document.querySelector('.content-wrapper');
const orderList = document.querySelector('.order-list');

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

