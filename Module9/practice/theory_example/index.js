'use strict';

// const btn = document.querySelector('#js-button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // через 2 секунды после нажатия на кнопку 
// // появится alert указаный внутри колбека setTimeout
// btn.addEventListener('click', onClick);

// // ----------this 

// const obj = {
//     classicFoo() {
//       setTimeout(function() {
//         console.log(`${this} in object scope`); // window
//       }, 1000);
//     },
//     arrowFoo() {
//       setTimeout(() => {
//         console.log(`${this} in object scope`); // obj
//       }, 1000);
//     }
//   };
  
//   setTimeout(function() {
//     console.log(`${this} in global scope`); // window
//   }, 1000);
  
//   setTimeout(() => {
//     console.log(`${this} in global scope`); //window
//   }, 1000);
  
//   obj.classicFoo(); // window
//   obj.arrowFoo(); // obj
  
//  таймер(при обновлении браузера) отсчета времени до обеда.


// let date = new Date();

// // формат вывода
// const options = {
//     year    : 'numeric',

//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit',
//     second  :'numeric'
// };

// const dinner = new Date(2019, 2, 14, 14, 0, 0, 0); //когда обед
// console.log('dinner ', dinner);

// let localeUk = date.toLocaleString('Uk-uk', options); // данное время
// console.log('today ',localeUk); 

// let localeUkDinner = dinner.toLocaleString('Uk-uk', options);
// console.log('время до обеда ', localeUkDinner); 

// let arrDinner = localeUkDinner.split(' ');
// console.log('время до обеда', arrDinner);

// let arrLocal = localeUk.split(' ');
// console.log("время в данный момент", arrLocal);

// let data = (arrDinner[0] - arrLocal[0]);
// let month = (arrDinner[1] - arrLocal[1]);
// let year = (arrDinner[2] - arrLocal[2]);
// let time = (arrDinner[3] - arrLocal[3]);
// console.log(data);
// console.log(month);
// console.log(year);
// console.log(time);
// let newarr = arrDinner[2].split(':');
// console.log(newarr);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Если все ок, то вызываем resolve и передаем данные
//       resolve("Data passed into resolve function :)");
  
//       // Если что-то не так, вызваем reject и передаем ошибку
//     //   reject("Error passed into reject function :(")
//     }, 1000);
//   });
  
//   // выполнится мгновенно
//   console.log("BEFORE promise.then");
  
//   const onResolve = data => {
//     console.log("INSIDE promise.then - onResolve");
//     console.log(data); // "Data passed into resolve function :)"
//   };
  
//   const onReject = error => {
//     console.log("INSIDE promise.then - onReject");
//     console.log(error); // "Error passed into reject function :("
//   };
  
//   promise.then(
//     // будет вызвана через 2 секунды, если обещание выполнится успешно
//     onResolve,
//     // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//     onReject
//   );
  
//   // выполнится мгновенно
//   console.log("AFTER promise.then");

