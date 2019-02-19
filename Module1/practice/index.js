"use strict";

// var year = 2018;
// let month = "November";
// const date = 27;
// let apple = 10;
// let bananas = 5;
// let lime = 100;

// let fontSize = "5.5px";

// // let summFruits = apple * bananas + lime;
// // console.log('summFruits', summFruits);
// // alert(`We are have ${summFruits} fruits`);
// // const resultConfirm = confirm(`Is it ${month}?`);
// // const resultPrompt = prompt('How old are you?');
// // console.log('resultConfirm', resultConfirm);
// // console.log('resultPrompt', resultPrompt);

// console.log(typeof apple);
// console.log(`тип яблоко и тип лайм = ${typeof apple === typeof lime}`);
// console.log(`тип яблоко и тип месяц = ${typeof apple === typeof month}`);

// console.log(`Index letter "N" in word "November" is ${month.indexOf("N")}`);
// console.log(`Index letter "w" in word "November" is ${month.indexOf("w")}`);
// console.log(`Index letter "o" in word "November" is ${month.indexOf("o")}`);

// console.log(`Includes letter "o" in word "November" is ${month.includes("o")}`);
// console.log(`Includes letter "w" in word "November" is ${month.includes("w")}`);

// console.log(`Parsing Int of string "fontSize" is ${Number.parseInt(fontSize)}`);
// console.log(
//   `Parsing Float of string  "fontSize" is  ${Number.parseFloat(fontSize)}`
// );

// console.log(`Is "apple" is not a number? - ${isNaN(apple)}`);
// console.log(`Is "month" is not a number? - ${isNaN(month)}`);

// const a = 0.3;
// const b = 0.5;

// console.log("Summa a + b = ", a + b);
// console.log("Summa with to.Fixed(10) is a + b = ", (a + b).toFixed(10));

// const text = "ПреобраЗование В цеЛое Число";

// console.log("Преобразование к нижнему регистру = ", text.toLowerCase());
// console.log("Преобразование к верхнему регистру = ", text.toLocaleUpperCase());

// const name = "John";
// const surname = "Cannor";
// const years = 40;
// const height = 180;

// console.log(`Hello, my name is ${name} ${surname}. I'm ${years} and ${height}`);
// console.log(`Hello, my name is ${name} ${surname}. I'm ${years} and ${height + 2 + 'sm'}`);

// ======================================part 2======================================================

// const num = 20;
// const result = num < 30 && num > 10;
// console.log(result);
// const text = 'texttext';
// console.log(text.length < 30 && text.length > 5);
// console.log(text.length < 30 && text.length > 9);

// console.log(text.length < 30 || text.length > 9);

// // =============================================

// let hours = 7;
// let minutes = 3;
// let seconds = 43;
// if (hours <= 10) {
//   hours = '0' + hours;
// }else{

// }
// if (minutes <= 10) {
//   minutes = '0' + minutes;
// }else{
  
// }
// if (seconds <= 10) {
//   seconds = '0' + seconds;
// }else{
  
// }

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);


// ===================================

// const monthName = 'January';
// let result;

// if (monthName === "June") {
//   result = 'summer';
// } else {
//   result = 'winter';
// }

// console.log(result);

// let season = monthName === 'June' ? 'summer' : 'winter';

// console.log(season);

// ================================

// const monthName = "January";

// const season = monthName === "June"
//   ? "summer" : monthName === "May"
//   ? "spring" : monthName === "September"
//   ? "autumn" : "winter";

// console.log(season);

// ========================================

// const monthName = "January";
// let season;

// switch (monthName) {
//   case "June":
//     season = "summer";
//     break;
//   case "May":
//     season = "spring";
//     break;
//   case "September":
//     season = "autumn";
//     break;
//   default:
//     season = "winter";
// }

// console.log(season); //winter


// ========================task 2=========

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = day + '\\' + month + '\\' + year; 

// console.log(date); // 02\10\2017

// ==========================task 9==============

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// hours = String(hours);
// minutes = String(minutes);
// seconds = String(seconds);

// if (hours.length === 1) {
//   hours = '0' + hours;
// }

// if (minutes.length === 1) {
//   minutes = '0' + minutes;
// }

// if (seconds.length === 1) {
//   seconds = '0' + seconds;
// }

// const time = `${hours}:${minutes}:${seconds}`;
// console.log('Time is: ', time);

// ================ with function ===================
/*
  Время состоит из:
    часов(hours)
    минут (minutes)
    секунд(seconds).

  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45

  Составляющие времени не гарантированно состоят из 2-х цифр!

  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;
//
// const time =  `${hours < 10 ?
//   '0' + hours : hours}:${minutes < 10 ?
//   '0' + minutes : minutes}:${seconds <10 ?
//   '0' + seconds : seconds}`;
//
//
//
// console.log('Time is: ', time);


/*
  Создайте срипт поиска отелей, где пользователь
  с помощью prompt должен ввести число от 1 до 5

  Проверить что пользователь ввел именно цифру от 1 до 5

  Если пользователь нажал Cancel, то вывести
  alert с текстом 'очень жаль, приходите еще!'

  Если было введено что либо кроме чисел 1-5,
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'

  Если же пользовател ввел валидное число,
  в зависимости от числа, используя switch,
  вывести alert с одной из строк:

    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
const promptValue = prompt ("Type number from 1-5");

if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <= 5) ) {
  switch(+promptValue) {
    case 1 :
    alert ("Каталог хостелов")
    break;
    case 2 :
      alert ("Каталог бюджетных отелей")
      break;
    case 3 :
      alert ("Каталог отелей ***")
      break;
    case 4 :
      alert ("Каталог отелей ****")
      break;
    case 5 :
      alert ("Каталог лучших отелей")
      break;
  }
} else if(promptValue === null) {
  alert ("очень жаль, приходите еще!")

} else {
  alert ("Неверный ввод, возможные варианты 1-5!")
}



