/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
* 
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

// const products = { 
//   name: 'Apples, Grapes, Cheese, Milk',
//   quantity: ['50', '44', '128', '93'] 
// }
  // { name: , quantity: 44 },
  // { name: "Cheese", quantity: 128 },
  // { name: "Milk", quantity: 93 }
// ;

// const products = {'products': [{
//   name: "Apples", quantity: 50 ,
//   name: "Grapes", quantity: 44 ,
//   name: "Cheese", quantity: 128 ,
//   name: "Milk", quantity: 93 
// }]
// }


const products = [
  { name: "Apples", quantity: 50 },
  { name: "Grapes", quantity: 44 },
  { name: "Cheese", quantity: 128 },
  { name: "Milk", quantity: 93 }
];

let data = {
  data: products,
}

const sourse = document.querySelector('#template').innerHTML.trim();
const template = Handlebars.compile(sourse);

const markUp = template(data);
console.log(markUp);

const container = document.querySelector('.products');
container.innerHTML = markUp;
  

// const products = [
//   { name: "Apples", quantity: 50 },
//   { name: "Grapes", quantity: 44 },
//   { name: "Cheese", quantity: 128 },
//   { name: "Milk", quantity: 93 }
// ];


// const container = document.querySelector('.products');
// const source = document.querySelector('#productsItem').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = products.reduce((acc,item) =>acc + template(item), '');
// container.innerHTML = markup;
  