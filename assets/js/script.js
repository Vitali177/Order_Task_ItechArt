const Orders = [
	{
		id: "1",
		OrderInfo: {
			createdAt	: "10.08.1991",
			customer	: "Alfreds Futterkiste",
			status		: "Accepted",
			shippedAt	: "8.09.1991"
		},
		ShipTo: {
			name: "Maria Anders",
			Address: "Obere Str. 57",
			ZIP: "12209",
			Region: "Germany",
			Country: "Germany"
		},
		CustomerInfo: {
			firstName: "Maria",
			lastName: "Anders",
			address: "Obere Str. 57",
			phone: "030-0074321",
			email: "Maria.Anders@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Chai",
				price		: "18",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "36"
			},
			{
				id			: "2",
				name		: "Aniseed Syrup",
				price		: "10",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "30"
			},
			{
				id			: "3",
				name		: "Chef Anton's Cajun Seasoning",
				price		: "22",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "44"
			},
			{
				id			: "4",
				name		: "Chef Anton's Gumbo Mix",
				price		: "36",
				currency	: "EUR",
				quantity	: "21",
				totalPrice	: "756"
			},
			{
				id			: "5",
				name		: "Grandma's Boysenberry Spread",
				price		: "25",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "125"
			}
		]
	},
	{
		id: "2",
		OrderInfo: {
			createdAt	: "23.12.2006",
			customer	: "Bon app",
			status		: "Pending",
			shippedAt	: "13.02.2007"
		},
		ShipTo: {
			name: "Laurence Lebihan",
			Address: "12, rue des Bouchers",
			ZIP: "13008",
			Region: "France",
			Country: "France"
		},
		CustomerInfo: {
			firstName: "Laurence",
			lastName: "Lebihan",
			address: "12, rue des Bouchers",
			phone: "91.24.45.40",
			email: "Laurence.Lebihan@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Queso Cabrales",
				price		: "21",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "105"
			},
			{
				id			: "2",
				name		: "Queso Manchego La Pastora",
				price		: "38",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "114"
			},
			{
				id			: "3",
				name		: "Pavlova",
				price		: "120",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "600"
			},
			{
				id			: "4",
				name		: "Sir Rodney's Marmalade",
				price		: "5",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "15"
			},
			{
				id			: "5",
				name		: "Genen Shouyu",
				price		: "40",
				currency	: "EUR",
				quantity	: "7",
				totalPrice	: "280"
			},
			{
				id			: "6",
				name		: "Tofu",
				price		: "23.25",
				currency	: "EUR",
				quantity	: "1",
				totalPrice	: "23.25"
			},
			{
				id			: "7",
				name		: "Alice Mutton",
				price		: "32",
				currency	: "EUR",
				quantity	: "39",
				totalPrice	: "1248"
			}
		]
	}
];



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