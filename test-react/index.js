// // 5 -----------------------------------------------
// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function (callback) {
//   callback();
// };

// foo(person.showName);

// // 6 ---------------------------------------------
// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function (newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//   cb(20);
// }

// person.refreshAge();
// console.log(person.age);

// // 7 ------------------------------------------------------------
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);

// // 8 -------------------------------------------------------------------------
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

// // 9 ---------------------------------------------------------
// const multiplyByValue = (value, base, ...numbers) => {
//   return numbers.map(number => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// // 10 ------------------------------------------------------------
// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);

// // 11 ---------------------------------------------------------------
// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);

// // 12 ------------------------------------------------------------------
// const name = 'bob';
// const age = 20;
// const obj = { name, age };

// console.log(obj);

// // 13 --------------------------------------------------------------------
// const confused = 'no';
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// // 14 -----------------------------------------------------------------------
// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);

// // 15 ------------------------------------------------------------------------
// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);

// // 16 ----------------------------------------------------------------------
// const {
//   name,
//   age,
//   gender = 'm',
//   hairColor: color,
// } = {
//   name: 'bob',
//   age: 20,
//   hairColor: 'blue',
// };

// console.log(name, age, gender, color);

// // 17 ------------------------------------------------------------------------
// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();

// // 18 -------------------------------------------------------------------------
// const userA = {
//   name: 'Mango',
//   age: 5,
// };

// const userB = {
//   ...userA,
//   age: 10,
//   happy: true,
// };

// console.log(userB);

// // 19 -----------------------------------------------------------------------------
// const fn = (arr, val) => arr.filter(el => el > val);

// console.log(fn([1, 2, 3, 4, 5], 3));

// // 21 -----------------------------------------------------------------
// const fn = arr =>
//   arr.map(el => {
//     const item = document.createElement('div');
//     item.textContent = el;

//     return item;
//   });

// console.log(fn(['html', 'css', 'js', 'react']));

// 22 ----------------------------------------------------------------
const a = b || c ? b + c : b - c;
