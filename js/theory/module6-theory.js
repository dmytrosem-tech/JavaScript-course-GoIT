// const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
// const filteredNums = [];const filteredNums = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 7) {
//     filteredNums.push(numbers[i]);
//   }
// }
// console.log(filteredNums);
// const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
// const filteredNums = numbers.filter(value => value > 6);
// console.log(filteredNums);
// const nums = [2, 4, 5, 6, 7, 8, 9];

// // Ниже короткая запись перебора массива nums где number это число при каждой итерации, дальше возврат в массив newNums всех чисел соответствующих условию функции (=>)----------->
// const newNums = nums.filter(number => number <= 6);
// console.log(newNums);

// Ниже функция изменяющая массив после умножения----------------------->
// const dirtyMultiply = (arr, value) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(dirtyMultiply(numbers, 2));
// console.log(numbers);

// // Ниже функция возвращающая новый массив с перемноженными элементами--------------------->
// const pureMultiply = (arr, value) => {
//   const doubled = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     doubled.push(arr[i] * value);
//   }
//   return doubled;
// };
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const newNumbers = pureMultiply(numbers, 2);
// console.log(numbers);
// console.log(newNumbers);

// //  метод перебора forEach() ---------------------------------------->
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }
// numbers.forEach(number => console.log(number));

// // Метод перебора map() с возможностью доступа к элементу перебора --------------------->
// const nums = [1, 2, 3, 4, 5];
// const doubledNums = nums.map(num => num * 2);
// console.log(nums);
// console.log(doubledNums);

// const kids = [
//   { name: 'Liza', age: 15, gender: 'female' },
//   { name: 'Dmytro', age: 8, gender: 'male' },
// ];
// const kidsNames = kids.map(kid => kid.name);
// console.log(kidsNames);
// const kidsAges = kids.map(kid => kid.age);
// console.log(kidsAges);

// ЗАДАЧА ВОВЫ ПРО УЧЕНЫХ------------------------------------------------------------------>
// const scientists = [
//     {
//       name: 'Albert',
//       surname: 'Einstein',
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: 'Isaac',
//       surname: 'Newton',
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: 'Galileo',
//       surname: 'Galilei',
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: 'Marie',
//       surname: 'Curie',
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: 'Johannes',
//       surname: 'Kepler',
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: 'Nicolaus',
//       surname: 'Copernicus',
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: 'Max',
//       surname: 'Planck',
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: 'Katherine',
//       surname: 'Blodgett',
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },

//     {
//       name: 'Lise',
//       surname: 'Meitner',
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: 'Sarah E.',
//       surname: 'Goode',
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: 'Hanna',
//       surname: 'Hammarström',
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
//   {
//     name: 'Ada',
//     surname: 'Lovelace',
//     born: 1760,
//     dead: 1830,
//     id: 9,
//   },
// ];

// const checkPeriodOfWork = (dateOfPeriodStart, dateOfPeriodEnd) =>
//   scientists.every(
//     scientist =>
//       (scientist.dead > dateOfPeriodStart && scientist.dead < dateOfPeriodEnd) ||
//       (scientist.born > dateOfPeriodStart && scientist.born < dateOfPeriodEnd),
//   );
// // 19xx-------------------->
// console.log(checkPeriodOfWork(1800, 1899));
// 18xx-------------------->
// console.log(checkPeriodOfWork(100, 2000));

//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работали в 19 ст

// const rez = scientists.find(el => {
//   if (el.name === 'Albert') {
//     return el.born;
//   }
// });

// console.log(rez);

// const findScientistBirthDate = (name, surname) =>
//   scientists.find(
//     scientist => scientist.name === name && scientist.surname === surname,
//   ).born;

// findScientistBirthDate('Albert', 'Einstein');
// console.log(findScientistBirthDate('Albert', 'Einstein'));
// console.log(findScientistBirthDate('Hanna', 'Hammarström'));
