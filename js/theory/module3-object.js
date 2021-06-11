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

// //  ЗАДАЧА ПРО БАНК ОТ ВОВЫ  =======>

// // 5) Напиши скрипт управления личным кабинетом интернет банка.
// // Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount,
//       type,
//     };
//   },

//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   withdraw(amount) {
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Transaction Not Exist';
//   },

//   getTransactionTotal(type) {
//     const filteredTransactions = [];
//     let total = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         filteredTransactions.push(transaction);
//       }
//     }

//     for (let transaction of filteredTransactions) {
//       total += transaction.amount;
//     }
//     return total;
//   },
// };

// // console.log(`account`, account);
// // console.log("result", account.createTransaction(100, Transaction.DEPOSIT));
// account.deposit(100);
// account.deposit(115);
// account.withdraw(50);
// console.log(account.getTransactionDetails(10));
// console.log('balance', account.getBalance());
// console.log(`history`, account.transactions);
// console.log(`filter`, account.getTransactionTotal(Transaction.WITHDRAW));

//  Моя задача про садик  ==========>

const typeOfEvent = {
  ADMISSION: 'admission',
  GRADUATION: 'graduation',
};

const kindergarden = {
  // количество детей в садике
  childsCount: 0,

  // список детей
  childsCirculationList: [],

  // карточка поступившего ребенка
  createChildCart(childName, age, typeOfEvent) {
    return {
      id: this.childsCirculationList.length,
      childName,
      age,
      typeOfEvent,
    };
  },

  // Поступления голопузого :)
  admission(amount, childName, age) {
    this.childsCount += amount;
    const transaction = this.createChildCart(
      childName,
      age,
      typeOfEvent.ADMISSION,
    );
    this.childsCirculationList.push(transaction);
  },

  //   Отчисление/выпуск из садика.
  graduation(amount, childName, age) {
    this.childsCount -= amount;
    const transaction = this.createChildCart(
      childName,
      age,
      typeOfEvent.GRADUATION,
    );
    this.childsCirculationList.push(transaction);
  },

  //  Получаем количество детей в садике.
  getChildsCount() {
    return this.childsCount;
  },

  // Получаем детали события в садике (поступление/выпуск).
  getChildCirculationDetai(id) {
    for (let event of this.childsCirculationList) {
      if (event.id === id) {
        return event;
      }
    }
    return 'event is undefined';
  },

  // Сортируем события по типу (поступление/выпуск).
  getEventsByType(typeOfEvent) {
    const eventByType = [];

    for (let event of this.childsCirculationList) {
      if (event.typeOfEvent === typeOfEvent) {
        eventByType.push(event);
      }
    }
    return eventByType;
  },
};

kindergarden.admission(1, 'Liza Princess', 3);
kindergarden.admission(2, ['Vovan Bobov', 'Kolyan Bobov'], [3, 4]);
kindergarden.admission(1, 'Tolik Ivanko', 5);
kindergarden.graduation(1, 'Tolik Ivanko', 6);

// console.log(kindergarden);
console.log('childrens quantity:', kindergarden.getChildsCount());
console.log(kindergarden.getChildCirculationDetai(2));
console.log(kindergarden.getChildCirculationDetai(10));
console.log('childrens circulation:', kindergarden.childsCirculationList);
console.log(
  'filter by type of event:',
  kindergarden.getEventsByType(typeOfEvent.ADMISSION),
);
