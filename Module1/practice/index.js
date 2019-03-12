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

// const season = monthName === "June" ? "summer" 
// : monthName === "May" ? "spring" 
// : monthName === "September"  ? "autumn"
// : "winter";

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
// const promptValue = prompt ("Type number from 1-5");

// if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <= 5) ) {
//   switch(+promptValue) {
//     case 1 :
//     alert ("Каталог хостелов")
//     break;
//     case 2 :
//       alert ("Каталог бюджетных отелей")
//       break;
//     case 3 :
//       alert ("Каталог отелей ***")
//       break;
//     case 4 :
//       alert ("Каталог отелей ****")
//       break;
//     case 5 :
//       alert ("Каталог лучших отелей")
//       break;
//   }
// } else if(promptValue === null) {
//   alert ("очень жаль, приходите еще!")

// } else {
//   alert ("Неверный ввод, возможные варианты 1-5!")
// }

// ---- повторение первого модуля ---------
// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// let a = 2;

// let pow = Math.pow(a, 10);
// console.log('pow', pow);

// 31) Найдите квадратный корень из 245.

// let b = 245;
// let sqrt = Math.sqrt(b);
// console.log('sqrt', sqrt);

// 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// let c = 379;
// let sqrt2 = Math.sqrt(c);
// console.log(`Результат округлите до целых: ${sqrt2.toFixed(0)}, до десятых ${sqrt2.toFixed(1)}, до сотых ${sqrt2.toFixed(2)}`);


// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны

// let d = 587;
// let sqrt3 = Math.sqrt(d);
// console.log(`Округлите результат в большую: ${Math.ceil(sqrt3)} и меньшую стороны: ${Math.floor(sqrt3)}`);

// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = 3;
// let b = 4;
// let c = a % b;
// if (c === 0) {
//   console.log('Делится');
// } else {
//   console.log('Делится с остатком:', c);
// }

// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let arr = [4, -2, 5, 19, -130, 0, 10];
// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] >= max) {
//     max = arr[i];
//   } else if ( arr[i] <= min ) {
//     min = arr[i];
//   }
// }
// console.log("min:", min, 'max:', max);

// 35) Выведите на экран случайное целое число от 1 до 100.

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   rand = Math.floor(rand);
//   return rand;
// }

// console.log( randomInteger(0, 1 ) );

/// 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.

// let number = Number(prompt('vvedite chislo 1 2 3'));
// switch(number){
//    case 1: console.log('vvedeno: 1');
//    break;
//    case 2: console.log('vvedeno: 2');
//    break;
//    case 3: console.log('vvedeno: 3');
//    break;
//    default: console.log('Я таких значений не знаю');
// }
//===variant2
// let number = Number(prompt('vvedite chislo'));
// alert(`vvedeno ${number}`);
//================


// 37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// const num = Number(prompt('введите число 1'));
// if(num === 1) {
//    alert(`Вы ввели число ${num}`)
// }else {alert('Вы ввели число не равное 1')
// }
//================


// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// let nmb = Number(prompt('Введите число'));
// num % 2 === 0 ? console.log('chet') : console.log('nechet');
//================


// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// let arr = [88.88, 76.76, 55.55, 77.77];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//    sum += arr[i];
// }
// console.log(parseInt(sum));
// console.log(parseFloat(sum));
//================


// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let i = Number(prompt('enter number'));
// switch (i) {
//    case 1: alert('winter');
//    break;
//    case 2: alert('spring');
//    break;
//    case 3: alert('autumn');
//    break;
//    case 4: alert('summer');
//    break;
//    default: alert('not a season')
// }

// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// ....

// 44)  Если переменная a равна нулю или равна двум, 
// то прибавьте к ней 7, иначе поделите ее на 10. 
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const a = 0; 
// let result;

// if(a === 0 || a === 2) {
//   result = a + 7;
// } else {
//   result = a/10;
// }
// console.log(result);

// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

