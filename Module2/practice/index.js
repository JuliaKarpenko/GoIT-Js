"use strict";
//=================  дополнительное дз по модолю 1==========================
// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt("Введите количество мест");
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm) {
//     hotel = "Sharm";
//   } else if (+requiredPlaces <= hurgada) {
//     hotel = "Hurgada";
//   } else if (+requiredPlaces <= taba) {
//     hotel = "Taba";
//   }
//   if (confirm(`хотите ли вы остаться в ${hotel}?`)) {
//     alert(`добро пожаловать в ${hotel}`);
//   } else if (!hotel) {
//     alert('Извините, столько мест нет ни в одной группе!');
//   } else {
//     alert("Нам очень жаль, приходите еще!");
//   }
// } else if (!requiredPlaces) {
//   alert("Нам очень жаль, приходите еще!");
// }

// ====================================ARRAYS==================

// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// // -----------------------length----------------

// console.log("array length clients = ", clients.length);
// console.log("array clients, index[0] = ", clients[0]);
// console.log("array clients, index[1] = ", clients[1]);
// console.log("array clients, index[2] = ", clients[2]);

// clients.length = 3;
// console.log("array clients if change length = ", clients);

// // -----------------------JOIN doing a string from array ----------------
// console.log(' ');
// console.log('--------------JOIN doing a string from array--------------');

// let splitArray = clients.join(", ");
// console.log("array clients if join it with ',' create string = ", splitArray);

// // -----------------------SPLIT doing a array from string----------------

// console.log(' ');
// console.log('--------------SPLIT doing a array from string--------------');

// let arraySplit = "I'm a new array";
// console.log("defolt string  = ", arraySplit);

// arraySplit = arraySplit.split(' ');
// console.log("a string if use split = ", arraySplit);

// // -----------------------SHIFT returns first elem form array----------------

// console.log(' ');
// console.log('--------------SHIFT returns first elem form array--------------');

// let shiftArray = clients;
// console.log('It is coppy of array clients = ', shiftArray);

// let returnElem = shiftArray.shift();
// console.log('It is use shift on array and RETURN this value = ', returnElem);
// console.log('It is array use shift = ', shiftArray);

// // -----------------------UNSHIFT add first elem form array----------------

// console.log(' ');
// console.log('--------------UNSHIFT add first elem form array--------------');

// let unshiftArray = clients;
// unshiftArray.unshift("firstElem");
// console.log('new array use unshift = ', unshiftArray);

// // -----------------------PUSH add elem form array to the end ----------------

// console.log(' ');
// console.log('--------------PUSH add  elem form array to the end--------------');

// unshiftArray.push('END');
// console.log('new array use push = ', unshiftArray);

// // -----------------------POP delete elem form the end of array  ----------------

// console.log(' ');
// console.log('\n--------------POP delete elem form the end of array-------------- ');

// let popArray = clients;
// popArray.pop('END');
// console.log('new array use POP = ', popArray);

// // -----------------------SLISE cut array for interval  ----------------

// console.log(' ');
// console.log('--------------SLISE cut array use interval and dont change initial array -------------- ');

// let sliceArray = clients;
// let test = sliceArray.slice(0, 2);
// console.log('new array use SLISE = ', test);

// // ======================= SPLICE can to delete, add and replace elem of array ===================

// console.log(' ');
// console.log('--------------SPLICE can to delete, add and replace elem of array -------------- ');

// let spliceArray = ["Mango", "Ajax", "Poly", "Chelsey", ];;
// console.log('initial array = ',  spliceArray);
// spliceArray.splice(0, 2);
// console.log('new array use SPLISE, cut array using interval (0, 2) = ',  spliceArray);

// spliceArray.splice(3, 0, "NEW ELEM", "NEW ELEM");
// console.log('new array use SPLISE, add new elem to array BEFORE fist index what we wrote) = ',  spliceArray);

// spliceArray.splice(1, 3, "hi", "hi");
// console.log('new array use SPLISE, add new elem to array && delete old elem) = ',  spliceArray);

// // ======================= CONCAT - join 2 arrays ===================

// console.log(' ');
// console.log('-------------- CONCAT - join 2 arrays-------------- ');

// let fruitsArray = ["apple", "banannas", "lime"];
// let vegetablesArray = ["potatoes", "tomatos", "cucumber"];
// let newArray = fruitsArray.concat(vegetablesArray);
// console.log('initial array "fruitsArray"', fruitsArray);
// console.log('initial array "vegetablesArray"', vegetablesArray);
// console.log('concan two arrays "fruitsArray" and "vegetablesArray" = ', newArray);

// // ======================= REVERSE - sorting array ===================
// console.log(' ');
// console.log('-------------- REVERSE - sorting array -------------- ');
// console.log('sorting array in reverse way', newArray.reverse());

// let test123 = [1, 2, 3,4,5,6];
// test123.slice(3)
// console.log(test123);

// ========================== CYCLES===============

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let userInput;

// do {
//  userInput = +prompt("Enter a number more then 100");

// } while ( userInput < 100 );

               
// ----------------------------------------------------
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for ( let i = min; i < max; i+=1 ) {
//     if ( i % 3 === 0 ) {
//         console.log(`${i}  = Fizz`);
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log(`${i} = Buzz`);
//     } else {
//         console.log(i);
//     }
// }
// ----------------------------------------------------
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let index of numbers) {
//     if (index > num ) {
//         newArray.push(index);
//     }
// }

// console.log(newArray);

// ------------------------------------------------
/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;

// const newArray = string.split(" ");
// console.log(newArray);
// longestWord = newArray[0];
// console.log(longestWord);

// for (const i of newArray) {
//     if (i.length > longestWord.length ) {
//         longestWord = i;
//     }
// }

// console.log(longestWord); // 'force'

// -------------------------------------------------------
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let userInput;
// const numbers = [];
// let total = 0;

// do {
//     userInput = +prompt("Please, enter a number");
//     if ( userInput !==0 ) {
//         numbers.push(userInput);
//     }
//     console.log(numbers);
// } while (userInput !== 0);

// if ( numbers.length !== 0 ) {
//     for (let i of numbers) {
//       total += i;
//     }
// }
// console.log(total);


// -------------------------------
/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];

let minArr = numbers[0];
let maxArr = numbers[numbers.length-1];
let userInput;

userInput = prompt(`Enter a number in range from ${minArr} to ${maxArr}`);

if (isNaN(userInput)) {
  alert('It is not a number');
} else if (numbers.includes(Number(userInput)) === true ) {
  alert ('You are rigth!');
} else {
  alert ('Sorry, try again');
}

// ------------------------------------------
