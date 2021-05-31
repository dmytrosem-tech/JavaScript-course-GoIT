// 2 task
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// 3 task
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//   return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// 4 task
// // Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// 5 task
// const fruits = ["apple", "plum", "pear", "orange"];
// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// 6 task
// const fruits = ["apple", "plum", "pear", "orange"];
// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// 7 task
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;

// 8 task
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 9 task
// function getExtremeElements(planets) {
//   const deletedPlanets = planets.splice(1, planets.length - 2);
//   console.log(deletedPlanets);
//   console.log(planets);
// }
// getExtremeElements([
//   'Earth',
//   'Mars',
//   'Venus',
//   'Jupiter',
//   'Uranus',
//   'Saturn',
//   'Neptun',
//   'Tartar',
// ]);

// function getExtremeElements(array) {
//   // Change code below this line
//   const arr = array.splice(1, array.length - 2);
//   return array;
//   // Change code above this line
// }

// 10 task
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);

//   console.log(words);
//   // Change code above this line
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');

// 11 task
// function calculateEngravingPrice(message, pricePerWord) {
//   let price;
//   const wordsCount = message.split(' ');
//   console.log(wordsCount);
//   price = wordsCount.length * pricePerWord;
//   console.log(price);
// }
// calculateEngravingPrice('JavaScript is in my blood', 10);

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let price;
//   const wordsCount = message.split(' ');
//   price = wordsCount.length * pricePerWord;
//   return price;
//   // Change code above this line
// }

// 12 task
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// 13 task

function slugify(title) {
  //   title = title.toLowerCase();
  title = slugify(title);
  console.log(title);
  return title;
  //   return title
  //     .toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
}
slugify('Arrays for begginers');
