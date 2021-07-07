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
// //   console.log(planets);
//     const deletedPlanets = planets.splice(1, planets.length - 2);
//     console.log(deletedPlanets);
//     console.log(planets);
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
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(' ').join('-');
//   return slug;
//   // Change code above this line
// }

// 14 task
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length - 0);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15 task
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line

// 16 task
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const totalArray = firstArray.concat(secondArray);
//   if (totalArray.length <= maxLength) {
//     return totalArray;
//   } else if (totalArray.length > maxLength) {
//     return totalArray.slice(0, maxLength);
//   }
//   // Change code above this line
// }

// 17 task
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 19 task
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20 task
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
//     // Change code above this line
//     return total;
//   }

// 21 task
// function findLongestWord(string) {
//   let strSplit = string.split(' ');
//   let longestWord = [0];
//   for (let i = 0; i < strSplit.length; i += 1) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i];
//     }
//   }
//   console.log(strSplit[4].length);
//   console.log(longestWord);
//   return longestWord;
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
//

// 22 task
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);

// 23 task

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   console.log(numbers[4]);
//   console.log(newArr);
//   return newArr;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);

// // 24 task
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

// 25 task
// function getCommonElements(array1, array2) {
//     const newArr = [];
//     for (let i = 0; i < array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//         newArr.push(array1[i]);
//       }
//     }
//     return newArr;
//   }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3, 6, 8], [2, 1, 17, 19, 5, 9, 8]);

// 26 task
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (const number of order) {
//       total += number;
//     }

//     // Change code above this line
//     return total;
//   }

// 27 task
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
//     for (const number of numbers) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
//     return filteredNumbers;
//     // Change code above this line
//   }

// 28 task
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// 29 task
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let newArr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }

// 30 task
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31 task
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//          return number;
//       }
//     }
//     // Change code above this line
//   }

// 32 task
// function includes(array, value) {
//   // Change code below this line
//   for (let object of array) {
//     if (object === value) {
//       return true;
//     }
//   }
//   for (let object of array) {
//     if (object !== value) {
//       return false;
//     }
//   }
//   // Change code above this line
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
 