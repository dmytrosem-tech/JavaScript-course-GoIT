// // 1 task
// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки
//   const result = makePizza();
//   const pointer = makePizza;

// // 2 task
// function deliverPizza(pizzaName) {
//     return `Доставляем пиццу ${pizzaName}.`;
//   }
//   function makePizza(pizzaName) {
//     return `Пицца ${pizzaName} готовится, ожидайте...`;
//   }
//   // Пиши код ниже этой строки
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

// // 3 task
// function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
//   }
//   makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//   });
//   // Пиши код ниже этой строки
//   makePizza('Ультрасыр', function eatPixxa(pizzaName) {});

// // 4 task
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//       const izPizzaInList = this.pizzas.includes(pizzaName);
//       console.log(izPizzaInList);
//     if (!izPizzaInList) {
//         // console.log(this.pizzas);
//         console.log(pizzaName);
//         console.log(izPizzaInList);
//         console.log(onError);
//        return onError(pizzaName);
//           }
//      return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(pizzaName) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`;
// }
// // // Вызовы метода с колбэками
// // // console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// // // console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// // // console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
// console.log(makePizza('lol'));
// console.log(onOrderError('bad'));

// //  task 10
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter(e => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }
// const firstInvoke = logAndInvokeAction(
//   'kiwi@mail.uk',
//   service.subscribe.bind(service),
// );
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.
// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction(
//   'poly@hotmail.de',
//   service.unsubscribe.bind(service),
// );
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


