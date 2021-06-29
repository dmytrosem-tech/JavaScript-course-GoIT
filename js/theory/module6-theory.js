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
