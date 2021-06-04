// //     OBJECT     =====================================>
// // свойства                        ===>
// const coolSchool = {
//   name: 'cool',
//   capacity: 250,
//   educationLvl: 3,
// };
// console.log(coolSchool);

// coolSchool.capacity = 300;
// console.log(coolSchool);

// coolSchool['educationLvl'] = 5;
// console.log(coolSchool);

// coolSchool.name = 'Best school';
// console.log(coolSchool);

// coolSchool.teachers = 100;
// console.log(coolSchool);

// coolSchool.deletedParametr = 'mamma mia';
// console.log(coolSchool);

// // удаление свойств                     ===>
// delete coolSchool.deletedParametr;
// console.log(coolSchool);

// // свойства через переменную            ===>
// let name = 'Crazy school';
// let capacity = 350;

// const coolSchool2 = {
//   name,
//   capacity,
//   educationlvl: 10,
// };
// console.log(coolSchool2);

// // вычисляемые свойства                ===>
// const name2 = 'chel';
// const getKey = function () {
//   return 'crazy';
// };

// const chelovechek = {
//   [name2]: 'Oleh',
//   [getKey()]: 'man',
// };
// console.log(chelovechek);

// // методы объекта                     ===>
// const anotherSchool = {
//   name: 'lazy',
//   capacity: 2,
//   educationLvl: 1,
//   greeting() {
//     console.log('welcome');
//   },
// };
// console.log(anotherSchool);
// anotherSchool.greeting();

// // обращение this. Где this = имя объекта! ===>
// const bigSchool = {
//   name: 'Biiiig',
//   capacity: 1500,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };
// bigSchool.showName();
// bigSchool.changeCapacity(2000);
// console.log(bigSchool);
// console.log(bigSchool.showName());
// console.log(bigSchool.changeCapacity());

// ПЕРЕБОР ОБЪЕКТА             ==================>
// Цикл for ... in             ===>
// const tank = {
//   name: 'Is-8',
//   length: 10,
//   height: 3,
//   weaponCaliber: 12,
//   captainName: 'Kolian',
// };

// console.log(tank);
// for (const key in tank) {
//   console.log('key:', key);
//   console.log('value:', tank[key]);
// }

// Object.keys(), Object.values(), Object.entries()  ===>
// const tank = {
//   name: 'Is-8',
//   length: 10,
//   height: 3,
//   weaponCaliber: 12,
//   captainName: 'Kolian',
// };

// const keys = Object.keys(tank);
// const values = Object.values(tank);
// const entries = Object.entries(tank);
// console.log(keys, values, entries);

// for (const key of keys) {
//   console.log('value:', tank[key]);
// }

// for (entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }

// Нахождение суммы чисел в ключах объекта         ====>
// const pupils = {
//   boys: 22,
//   girls: 21,
// };

// const gendCounter = Object.values(pupils);
// console.log(gendCounter);
// let total = 0;
// for (value of gendCounter) {
//   total += value;
// }
// console.log(total);
