// const printMessage = function (message) {
//     console.log(message);
// };
// const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
// };

// higherOrderFunction(printMessage);

// const repeatLog = function (n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   };

//   repeatLog(5);
//   repeatLog(2);

// const printValue = function (value) {
//     console.log(value);
//   };

// //   const prettyPrint = function (value) {
// //     console.log('Logging value: ', value);
// //   };

// //   const repeat = function (n, action) {
// //     for (let i = 0; i < n; i += 1) {
// //       action(i);
// //     }
// //   };

//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2

//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2

// const doMath = function (a, b, callback) {
// console.log(callback(a,b));
// }

// const add = function (c, d) {
//     return c + d;
// }
// const doSum = function (k, s) {
//     return k * s;
// }

// doMath(5,5,add);
// doMath(10,100,add);
// doMath(20, 20, doSum);

// ИСПОЛЬЗОВАНИЕ CALLBACK ФУНЦИИ ПРИ ФИЛЬТРАЦИИ МАССИВА =======>
// const filterArr = function (array, kalbac) {
//   const filteredArr = [];
//   for (let element of array) {
//     // console.log(element);
//     // console.log(kalbac(element));
//     const passed = kalbac(element);
//     if (passed) {
//       filteredArr.push(element);
//     }
//   }
//   return filteredArr;
// };

// ТУТ ПОЛУЧАЕМ ВСЕ ЧИСЛА МАССИВА КОТОРЫЕ БОЛЬШЕ ИЛИ РАВНЫ 3 ===>
// console.log(
//   filterArr([1, 2, 3, 5, 6, 7, 8, 9, 0], function (value) {
//     return value >= 3;
//   }),
// );
// ТТ ПОKУЧАЕМ ВСЕ ЧИСЛА МАССИВА КОТОРЫЕ МЕНЬШЕ ИЛИ РАВНЫ 3 =====>
// console.log(
//   filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], function (value) {
//     return value <= 3;
//   }),
// );

// ЗАЗАДЧКА С ЗАМЫКАНИЕМ ГГ ПРИМЕРЕ СОЗДАНИЯ ШЕФ ПОВАРА ====>
// const 
