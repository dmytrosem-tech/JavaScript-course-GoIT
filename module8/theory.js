// // Всплытие события, когда жмякаем на самого глубокого потомка то отрабатывает все по очереди вложенности, начиная с самого глубокого.
// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   innerChild: document.querySelector('#inner-child'),
// };

// const onParentClick = event => alert('Жмякнул на батю');
// const onChildClick = event => alert('Жмякнул на первого потомка');
// const onInnerChildClick = event => alert('Жмякнул на вложенного потомка');

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// // Событие только на том элементе на котором кликают--------------------->
// const parent = document.querySelector('#parent');
// parent.addEventListener('click', onParentClick);
// function onParentClick(event) {
//   alert(`event target', ${event.target.id}`);
//   console.log(event.target);
// }

const nav = document.querySelector('.js-nav');

nav.addEventListener('click', onNavClick);

function onNavClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log('event Target', target);
  if (target.nodeName !== 'A') {
    return;
  }
  setActiveLink(target);
}
function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector('a.active');
  if (currentActiveLink) {
    currentActiveLink.classList.add('active');
  }
  nextActiveLink.classList.add('active');
}