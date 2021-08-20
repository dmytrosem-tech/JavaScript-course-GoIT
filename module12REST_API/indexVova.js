// const refs = {
//   form: document.querySelector('#form'),
//   input: document.querySelector('#search'),
//   container: document.querySelector('.container'),
// };

// const hendlerSubmit = e => {
//   e.preventDefault();
//   const value = refs.input.value;
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
//     .then(res => res.json())
//     .then(data => renderCollection(data.drinks))
//     .catch(err => console.log(err));
// };

// function createItem ({strDrinkThumb, strDrink})  {
//     const article = `
//     <article>
//       <img src='${strDrinkThumb}' alt='${strDrink}'/>
//       <p>${strDrink}<p/>
//     </article>
//     `
//     refs.container.insertAdjacentHTML('beforeend', article)
// }

// function renderCollection (arr) {
//     arr.forEach(el => createItem(el))
// }

// refs.form.addEventListener('submit', hendlerSubmit);
