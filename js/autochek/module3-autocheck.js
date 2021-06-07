// 1 task
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// 2 task
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// 3 task
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// 4 task
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// 5 task
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// 6 task
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// 7 Task
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// 8 task
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];
// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// 9 task
// const emailInputName = 'email';
// const passwordInputName = 'password';
// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };

// 10 taskconst
// apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// 11 task
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// 12 task
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   let hmmm = [];
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(key);
//       hmmm.push(key);
//       propCount = hmmm.length;
//     }
//   }
//   console.log(propCount);
//   // Change code above this line
//   return propCount;
// }
// countProps({ name: 'Mango', age: 2 });

// 13 task
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]);
// }

// 14 task
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   let arrayKeys = [];
//     const keys = Object.keys(object);
//   for (let key of keys) {
//     arrayKeys.push(key);
//     console.log(arrayKeys);
//     propCount = arrayKeys.length;
//   }
//   return propCount;
//   // Change code above this line
// }
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// 15 task
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16 task
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryArr = Object.values(salaries);
//   for (let salary of salaryArr) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// 17 task
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// 18 task
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//   for (product of products) {
//     if (product.name.includes(productName)) {
//       console.log(product.price);
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// getProductPrice('Radar');

// 19 task
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const valuesArray = [];
//   for (let product of products) {
//     // console.log(product);
//     const productKeys = Object.keys(product);
//     // console.log(productKeys);
//     // const productValues = Object.values(product);
//     // console.log(productValues);
//     for (key of productKeys) {
//       //   console.log(key);
//       if (key === propName) {
//         valuesArray.push(product[key]);
//         // console.log(product[key]);
//         console.log(valuesArray);
//       }
//     }
//   }
//   return valuesArray;
// }
// getAllPropValues('price');
// getAllPropValues('category');

// 20 task
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// 21 task
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22 task
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23 task
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24 task
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25 task
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// 26 task
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh
//     }
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27 task
