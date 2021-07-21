
// РАБОТА С КЛАССАМИ ЭЛЕМЕНТА------------------------------------------------------------------------------------------------------------------->
// const elem = document.querySelector('#paragraph');
// console.log(elem.classList); // DOMTokenList(3) ["text", "red", "big", value: "text red big"]
// console.log(elem.classList.contains('red')); // true
// elem.classList.remove('big');
// console.log(elem.classList); // ["text", "red", value: "text red"]
// elem.classList.add('new-class');
// console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]
// elem.classList.add('lol', 'wow', 'wtf');
// console.log(elem.classList); //["text", "red", "new-class", "lol", "wow", "wtf", value: "text red new-class lol wow wtf"]
// elem.classList.toggle('hidden'); // Добавили класс который скрывает элемент
// console.log(elem.classList);
// elem.classList.toggle('hidden');
// elem.classList.forEach(a => 
//     console.log(a)); // получим список классов которые перебрал метод forEach

// // РАБОТА С АТРИБУТАМИ ЭЛЕМЕНТА -------------------------------------------------------------------------------------------------------->
// const imaga = document.querySelector('.image');
// console.log(imaga);
// console.log(imaga.attributes); // Получили объект всех аттрибутов элемента--> NamedNodeMap {0: class, 1: src, 2: alt, class: class, src: src, alt: alt, length: 3}
// console.log(imaga.hasAttribute('src')); // true
// console.log(imaga.getAttribute('alt')); // lake and clouds
// imaga.setAttribute('alt', 'big lake and some clouds') // Меняем значение аттрибута на другое
// console.log(imaga.getAttribute('alt')); // big lake and some clouds

// // СОЗДАНИЕ ЭЛЕМЕНТА-----------------------------------------------------------------------------------------------------------------------------ю
// const textik = document.createElement('h1')
// console.log(textik); // пока просто вывалился тег в консоли <h1></h1>
// textik.textContent = 'There we are';
// console.log(textik); // Уж пришел текст в тег заголовка <h1>There we are</h1>, но его еще нет в документе тега.
// const imaga = document.createElement('img');
// console.log(imaga); // пришел тег <img>
// imaga.setAttribute('src', 'https://placeimg.com/640/480/nature'); 
// imaga.setAttribute('alt', 'красотищща)))))');// добавляем аттрибуты
// console.log(imaga); // пришли аттрибуты к элементу.

// // ДОБАВЛЕНИЕ ЭЛЕМЕНТА В HTML ВЕРСТКУ------------------------------------------------------------------------------------------------------------------------>
// const newItem = document.createElement('a');
// newItem.href = '#';
// newItem.classList = 'btn';
// newItem.textContent = 'Oppa';

// const nav = document.querySelector('.nav');  //создаем переменную в которой висит все дерево навигации из примера
// nav.appendChild(newItem);  // добавляем в навигацию Ли-шку, в конец списка

// const headik = document.createElement('h1');
// headik.textContent = 'Zagalovak';
// const container = document.querySelector('.container');
// container.insertBefore(headik, nav);

// // УДАЛЕНИЕ ЭЛЕМЕНТА ИЗ ВЕРСТКИ--------------------------------------------------------------------------------------------->
// const article = document.querySelector('.article');
// const text = article.querySelector('.text');
// article.remove(text);
// const link = article.querySelector('.link');
// link.remove();


// // ВЕШАЕМ СЛУШАТЕЛЕЙ НА ЭЛЕМЕНТЫ -------------------------------------------------------------------------------------------------------->
// const singlBtn = document.querySelector('#single');
// const handleClick = () => alert('click');
// singlBtn.addEventListener('click', handleClick); // сначала действие пользователя потом отклик что с ним делать

// const multiply = document.querySelector('#multiple')
// const firstAl = () => alert('first click');
// const secondAl = () => alert('second click');
// const thirdAl = () => alert('third click');

// multiply.addEventListener('click', firstAl);
// multiply.addEventListener('click', secondAl);
// multiply.addEventListener('click', thirdAl);

// // УЗНАЕМ ТИП СОБЫТИЯ------------------------------------------------------------------------------------------------------------------------>
// const btn = document.querySelector('#btn');
// const handleClick = event => {
// console.log('event', event);
// console.log('event type', event.type);
// console.log('this', this);
// console.log('target', event.target);
// };
// btn.addEventListener('click', handleClick);

console.log('hello lapot6');