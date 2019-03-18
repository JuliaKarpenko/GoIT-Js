// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   alert("CLICK EVENT LISTENER ALERT!");
// };

// addBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
// });


// ------------------------------------------


// const user = {
//     name: 'Mango',
//     showName() {
//       console.log('this', this);
//       // this будет ссылаться на button
//       // если использовать showName как callback
//       console.log(`My name is: ${this.name}`);
//       // тут undefined так как поля name нету у button
//     }
//   }
  
//   // Представим что у нас есть кнопка с классом js-btn
//   // Выберем ее и повесим на нее слушатель клика
//   const btn2 = document.querySelector('.js-btn');
  
//   user.showName(); //работает
//   btn2.addEventListener('click', user.showName); // не работает
//   btn2.addEventListener('click', user.showName.bind(user)); // работает

  // ------------------------------------------

//   const btn = document.querySelector("#btn");

// // event - это и есть обьект события который автоматически 
// // передается первым аргументом, мы можем называть его как угодно, 
// // хоть qwerty, но чаще всего он называется или e, evt или event

// const handleClick = event => {
//   console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

//   console.log("event type: ", event.type); // event type:  click

//   // будет window, так как мы используем стрелочную функцию, 
//   // которая использует внешний контекст 
//   // Если использовать обычную функцию то this будет самим элементом 
//   // button и равен currentTarget
//   console.log("this: ", this); 
//   console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
// };

// btn.addEventListener("click", handleClick);

// -----------------------------всплытие ----------------

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// const parentClickHandler = () => alert('PARENT click handler');
// const childClickHandler = () => alert('CHILD click handler');
// const innerClickChildHandler = () => alert('INNER CHILD click handler');

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerClickChildHandler);

// -----------------------------event.target ----------------

// const parent = document.querySelector("#parent");

// const handleClick = event => {
//   console.log(`event.target id : ${event.target.id}`);
//   console.log(`event.target: ${event.target}`);
//   console.log(`event.currentTarget  id : ${event.currentTarget.id}`);
// };

// // откройте консоль и покликайте, вы увидите что
// // event.target это всегда исходный (и самый глубокий) элемент
// // на котором был сделан клик
// parent.addEventListener("click", handleClick);

// -----------Прекращение всплытия-----------------

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// const parentClickHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до PARENT event не дойдет!"
//   );
// };

// const childClickHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до CHILD event не дойдет!"
//   );
// };

// const innerChildClickHandler = event => {
//   event.stopPropagation();
//   alert("INNER-CHILD click handler!");
// };

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHandler);
// innerChild.addEventListener("click", innerChildClickHandler);


// ------------stopImmediatePropagation--------------

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// const parentClickHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до PARENT event не дойдет!"
//   );
// };

// const childClickHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до CHILD event не дойдет!"
//   );
// };

// const innerChildClickHandler = event => {
    
//     alert("INNER-CHILD click handler!");
//     event.stopImmediatePropagation();
// };

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHandler);
// innerChild.addEventListener("click", innerChildClickHandler);

// ---------------Делегирование событий---------------------

// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

// ----------доп задание--------------
// /Задача №1
// //Алерт по нажатию на кнопку.
// //При нажатии на кнопку "Нажми на меня"
// //выводиться сообщение 'Привет!


// let button  = document.querySelector('.js-btn');

// button.addEventListener('click', () => alert("Hi i'm button"));



// //Задача №2
// //Изменение текста в инпуте.
// //По нажатию на кнопку - изменяеться текст в импуте

// let input  = document.querySelector('#input');
// button.addEventListener('click', () => changeValue(input));

// function changeValue(el) {
//     el.value = "4";
// }

// // //Задача №3
// // //Изменение текста в инпуте.
// // //По нажатию на кнопку -  она выводит алертом содержимое инпута

// button.addEventListener('click', () =>  changeValueAlert(input));
// function changeValueAlert(el) {
//     alert(el.value);
// }

// // //Задача №4
// // //Изменение текста в инпуте.
// // //По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат

// button.addEventListener('click', () =>  changeValueAlertDouble(input));
// function changeValueAlertDouble(el) {
//     let doubleValue = +el.value;
//     doubleValue = Math.pow(doubleValue, 2);
//     alert(doubleValue);
// }

// //Задача №5
// // Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:

// let button  = document.querySelector('.js-btn');
// let firstInput = document.querySelector("#input1");
// let secondInput = document.querySelector("#input2");

// button.addEventListener('click', () => changeValue(firstInput, secondInput));

// function changeValue(el1, el2) {
//     let temporalvalue = el1.value;
//     el1.value = el2.value;
//     el2.value = temporalvalue;
// }

// // //Задача №6
// // // Задача. При нажатии на кнопку - поменяется ее текст:
// // <input type="button"  value="Нажми на меня">

// let inputButton = document.querySelector('input[type=button]');
// inputButton.addEventListener('click' , () => inputButton.value = "hi");

// //Задача №8
// // Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
// let buttonLock = document.querySelector('#lock');
// let buttonUnLock = document.querySelector('#unlock');
// let input = document.querySelector('#input');

// buttonLock.addEventListener('click', () => input.setAttribute("disabled", "disabled"));
// buttonUnLock.addEventListener('click', () => input.removeAttribute ("disabled"));
