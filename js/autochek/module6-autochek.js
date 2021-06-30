// // 1 task
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(item => (totalPrice += item));
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// // 2 task
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// // 3 task
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([2, 3, 2], [2, 4, 8, 2]));

// // 4 task
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// // 5 task
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// // 6 task
// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// // Пиши код выше этой строки

// // 7 task
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// // 8 task
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return commonElements;
// };

// // 9 task
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });
//   return newArr;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// // 10 task
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// // 11 task
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки
// const titles = books.map(book => book.title);

// // 12 task
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки
// const genres = books.flatMap(book => book.genres);

// // 13 task
// const getUserNames = users => users.map(user => user.name);

// // 14 task
// const getUserEmails = users => users.map(user => user.email);

// // 15 task
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => (value % 2 ===0));
// const oddNumbers = numbers.filter(value => (value % 2 !== 0));

// // 16 task
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// // 17 task
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ПЕРЕМЕННАЯ С ПОЛЬЗОВАТЕЛЯМИ ДЛЯ СЛЕДУЮЩИХ 6 ЗАДАЧ ------------------------------------>
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
// ---------------------------------------------------------------------------

// //  18 task
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'brown'));
// console.log(getUsersWithEyeColor(users, 'green'));

// // 19 task
// const getUsersWithAge = (users, minAge, maxAge) =>
//  users.filter(user => user.age >= minAge && user.age <= maxAge);

// // 20 task
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// // 21 task
// const getFriends = users => {
//   const uniqFriends = users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
//   return uniqFriends;
// };
// console.log(getFriends(users));

// // 22 task
// const getActiveUsers = users => users.filter(user => user.isActive);

// // 23 task
// const getInactiveUsers = users => users.filter(user => !user.isActive);

// // 24 task
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// // 25 task
// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// // // 26 task
// // const firstArray = [26, 94, 36, 18];
// // const secondArray = [17, 61, 23];
// // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Пиши код ниже этой строки
// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => !(value % 2 === 0));
// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => !(value % 2 === 0));
// const eachElementInThirdIsEven = thirdArray.every(value => !(value % 2 === 0));
// const eachElementInThirdIsOdd = thirdArray.every(value => !(value % 2 === 0));

// // 27 task
// const isEveryUserActive = users => users.every(user => user.isActive);

// // 28 task
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => !(value % 2 === 0));
// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => !(value % 2 === 0));
// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 === 0);

// // 29 task
// const isAnyUserActive = users => users.some(user => user.isActive);

// // 30 task
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;

// // 31 task
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// // 32 task
// const calculateTotalBalance = users =>
//   users.reduce((total, user) => total + user.balance, 0);

// 33 task
// const getTotalFriendCount = users => {
//   const friends = users.flatMap(user => user.friends);
//   const allFriends = friends.length;
//   return allFriends;
// };

// const getTotalFriendCount = users =>
//   users.reduce((total, user) => total + user.friends.length, 0);

// 34 task
