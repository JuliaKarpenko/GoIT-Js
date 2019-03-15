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

// ==========================ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ===============

/* ---------- № 1 ---------------
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let button = document.querySelector('.button');

// function addCounter(el) {
//     let count = el.textContent;

//     return function () {
//         count ++;
//         el.textContent = count;
//         return el.textContent;
//     };
// }

// let counter = addCounter(button);

// button.addEventListener('click' , () => counter(button));

// let button = document.querySelector('.button');
// // // let count = button.value;

// button.addEventListener('click' , () => button.textContent++);


/* ---------- № 2 ---------------
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
*/

// let firstInput = document.querySelector("#input1");
// let secondInput = document.querySelector("#input2");
// let button = document.querySelector('button[data-action="add"]');
// let result = document.querySelector('.result');

// function summ(el1, el2) {
//     result.textContent = +el1.value + (+el2.value);
//     return result.textContent;
// }

// button.addEventListener('click', () => summ(firstInput, secondInput));

/* ---------- № 3 ---------------
Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/

// let btnAdd = document.querySelector('button[data-action="add"]');
// let btnSub = document.querySelector('button[data-action="sub"]');
// let span = document.querySelector('.value');

// // btnAdd.addEventListener('click' , () => span.textContent++);
// // btnSub.addEventListener('click' , () => span.textContent--);

// // with class
// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     }

//   increment () {
//     this.value++;
//     this.onChange(this.value);
//   }

//   decrement () {
//     this.value-=1;
//     this.onChange(this.value);
//   }

// }

// function changeValue(value) {
//   span.textContent = value;
// }

// const counter = new Counter(changeValue);

// btnAdd.addEventListener('click', counter.increment);
// btnSub.addEventListener('click', counter.decrement);




/* ---------- № 4 ---------------
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// let button = document.querySelector('.btn');
// let result = document.querySelector('.result');

// button.addEventListener('click', function(e) {
//     e.preventDefault();
//     let checkedInputs = document.querySelectorAll('input[name="option"]:checked');
//     setNewValue(checkedInputs, resultValue);
// });

// function setNewValue (arr, callback) {
//     return (result.textContent = "Result: " + callback(arr));
// }

// function resultValue(arr) {
//     let newArr = Array.from(arr);
//     return newArr.reduce((acc, i) => acc + i.value, '');
// }

/*---------------5----------------------
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// let parentElem = document.querySelector('.images');

// parentElem.addEventListener("click", () => alert(event.target.src) );

// parentElem.addEventListener("click", getImgScr);

// function getImgScr(e) {
//     e.preventDefault();
//     return alert(event.target.src);
//     // const target = event.target;
//     // let result = target.src;
//     // alert(result);
// }

/*---------------6----------------------
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// let parentElem = document.querySelector('.list');

// parentElem.addEventListener("click", () => event.target.parentNode.remove());

// function removeElem(e) {
//     e.preventDefault();
//     const target = event.target;
//     console.log(target.parentNode.remove());
// }


// ------------- 7 ---------------

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
    */

// let inputParent = document.querySelector('.input-list');

// function getResult(e) {
//   e.target.addEventListener('blur', verification);
// }

// function verification (event) {
//   const target = event.target;
//     if (target.value.length === +target.dataset.length) {
  //       target.classList.remove("invalid");
//       target.classList.add("valid");
//     } else {
//       target.classList.remove("valid");
//       target.classList.add("invalid");
//     }
// }

// inputParent.addEventListener('click', getResult);

// ------------- 8 ---------------
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно отображаться в p.input-value 
*/

// <p class="message"></p>
// <input class="input" type="text">
// <p class="input-value">Current input value: </p> 

// let message = document.querySelector('.message');
// let input = document.querySelector('.input');
// let inputValue = document.querySelector('.input-value');

// // function

// input.addEventListener('focus', () => message.textContent= "Input is in focus!");

// input.addEventListener('keypress', () => inputValue.textContent = input.value);

// ------------- 9 ---------------

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// const BUTTON  = document.querySelector('.btn');
// const MODAL_HIDDEN  = document.querySelector('.modal-hidden');
// const CLOSE = document.querySelector('[data-action="close-modal"]');
// const WRAPPER = document.querySelector('.js-modal-backdrop');
// const MODAL = document.querySelector('.modal-content');


// function openModal (el, className) {
//   el.classList.remove(className);
// }

// function closeModal (el, className) {
//   el.classList.add(className);
// }

// BUTTON.addEventListener('click', () => openModal(MODAL_HIDDEN, 'modal-hidden'));
// CLOSE.addEventListener('click', () => closeModal(MODAL_HIDDEN, 'modal-hidden'));

// WRAPPER.addEventListener('click', function (e) {
//   console.log(e.target);
//   if(e.target !== MODAL) {
//     closeModal(MODAL_HIDDEN, 'modal-hidden');
//   }
// });

// ------------- 10 ---------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const MAIN_MENU  = document.querySelector('.js-menu');
let link = document.querySelectorAll('.menu-link');

MAIN_MENU.addEventListener('click', function(e) {
  e.preventDefault();

  link.forEach(elm => {
    elm.classList.remove('active');
  });
  e.target.classList.add('active');

});
