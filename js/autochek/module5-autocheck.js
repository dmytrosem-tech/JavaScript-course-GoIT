// // 1 task
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// // 2 task
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// // 3 task
// function Car(brand, model, price) {
//   (this.brand = brand), (this.model = model), (this.price = price);
// }

// const audi = new Car('Audi', 'Q3', 36000);
// const bmw = new Car('BMW', 'X5', 58900);
// const nissan = new Car('Nissan', 'Murano', 31700);

// // 4 Task
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// // 5 task
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// 6 task
function Storage([items]) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function ([newItem]) {
  this.items.push(newItem);
};
Storage.prototype.removeItem = function ([item]) {};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
