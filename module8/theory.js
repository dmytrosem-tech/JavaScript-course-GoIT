// // Всплытие события, когда жмякаем на самого глубокого потомка то отрабатывает все по очереди вложенности, начиная с самого глубокого.
// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   innerChild: document.querySelector('#inner-child'),
// };

// const onParentClick = event => alert('Жмякнул на батю');
// const onChildClick = event => alert('Жмякнул на первого потомка');
// const onInnerChildClick = event => alert('Жмякнул на вложенного потомка');

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// // Событие только на том элементе на котором кликают--------------------->
// const parent = document.querySelector('#parent');
// parent.addEventListener('click', onParentClick);
// function onParentClick(event) {
//   alert(`event target', ${event.target.id}`);
//   console.log(event.target);
// }

// const nav = document.querySelector('.js-nav');

// nav.addEventListener('click', onNavClick);

// function onNavClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   console.log('event Target', target);
//   if (target.nodeName !== 'A') {
//     return;
//   }
//   setActiveLink(target);
// }
// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector('a.active');
//   if (currentActiveLink) {
//     currentActiveLink.classList.add('active');
//   }
//   nextActiveLink.classList.add('active');
// }

// const menuData = {
//   title: 'Eat it createElement, templates rule!',
//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
// };
// const source = document.querySelector('#menu-template').innerHTML.trim();

// // В результате мы видим в консоли то,
// // как в переменную source записан обычный
// // форматированый текст.
// const template = Handlebars.compile(source);

// /*
//   Создадим переменную markup, в которую запишем
//   результат работы функции-шаблона template
// */
// const markup = template(menuData);
// console.log(markup);

// /*
//   Пример выше похож на операцию «поиск-и-замена»: шаблон просто
//   заменил {{title}} на значение свойства menuData.title.
//   После чего в результат попал сначала текст <ul>,
//   потом выполнился {{#each items}}, который последовательно
//   сгенерировал элементы списка, и затем список был закрыт </ul>.
// */

// /*
//   В js выберем контейнер по id, после чего используя
//   свойство innerHTML присвоим туда нашу строку.
// */
// const container = document.querySelector('#menu-container');
// container.innerHTML = markup;

//  Работа с датой ------------------------------------------------------------------------>
// const date = new Date();
// console.log(date);
// const date2 = new Date('april 7,2021');
// console.log(date2);
// const date3 = new Date(1983, 3, 7);
// console.log(date3);
// const date4 = new Date(10000007867834);
// console.log(date4);
// const date5 = Date.now();
// console.log(date5);
// const date6 = new Date();
// console.log('date: ' + date6);
// console.log('get date: ' + date6.getDate());
// console.log('get day: ' + date6.getDay());
// console.log('get Month: ' + date6.getMonth());
// console.log('get full year: ' + date6.getFullYear());
// const date = new Date();
// console.log(`date from UNIX ${date.getTime()}`);
// let result = 'Date: ';
// result += date.getFullYear() + '/';
// result += date.getMonth() + '/';
// result += date.getDate() + '. Day of weak: ';
// result += date.getDay() + '. ';
// result += 'Time: ' + date.getHours() + ':';
// result += date.getMinutes() + ':';
// result += date.getSeconds() + ':';
// result += date.getMilliseconds() + '';

// console.log(result);

// // модуль 12 запрос на курс валют в приват банк------------------------------------------------------------>
// const btn = document.querySelector('.js-get-data');
// const tBody = document.querySelector('table > tbody');
// // console.log(btn);
// btn.addEventListener('click', handleClick);

// // Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
// function getCurrencyRates() {
//   return fetch(
//     'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
//   )
//     .then(responce => {
//       if (responce.ok) return responce.json();
//       throw new Error('Error fetching data');
//     })
//     .catch(err => {
//       console.error('Error', err);
//     });
// }

// // Получает массив объектов валют и рендерит результат
// function updateView(currencies) {
//   const htmlString = currencies.reduce(
//     (acc, currency) => acc + createTableRow(currency),
//     '',
//   );
//   tBody.innerHTML = htmlString;
// }

// // При клике вызовем getCurrencyRates и после того как
// // обещание выполнятся, внутри then отрендерим результат по шаблону

// function handleClick() {
//   getCurrencyRates().then(updateView);
// }

// // шаблон
// function createTableRow({ ccy, buy, sale }) {
//   return `
//     <tr scope='row'>
//         <td>${ccy}</td>
//         <td>${Number(buy).toFixed(2)}</td>
//         <td>${Number(sale).toFixed(2)}</td>
//     </tr>
//     `;
// }
