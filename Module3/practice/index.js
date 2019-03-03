// const users = ["Alex", "Nikolay", "Helen", "5", "hi"];
// let i = 0;
// while (i < users.length) {
//   if (users[i] === "Alex");
//   {
//     console.log("Alex найден");
//     break;
//   }
// }

// do {
//   if ( users[i] !== "Helen" ) {
//     console.log('Hello: ', users[i]);
//     ++i;
//   } else {
//     ++i
//     continue;
//   }
// }  while (i < users.length);

// do {
//   if ( users[i] !== "Helen" ) {
//     console.log('Hello: ', users[i]);
//   }
//   i++;
// }  while (i < users.length);

// let i = 0;
// const users = ['Jim','Bem','Dambo','Alert','Alex', 'Nikol', 'Helen', 'And someone else'];

// do{
//     console.log('Datz is number of iteration: '+i);
//     if (users[i]==='Alex'){
//         console.log('We have found Alex!!!');
//         i++;
//         continue
//     }
//     console.log('Iteration after if');
//     console.log(users[i]);
//     i++;
// }while(i <users.length);

// ==========================FUNCTIONS============================================

/*-------------------------task 1----------------------------

  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// let checkNumberType = function(num) {
//     if  (num % 2) {
//         console.log('You enter even number');
//     } else {
//         console.log('You enter odd number');
//     }
// }
// // Вызовы функции для проверки
// console.log (checkNumberType(2) ); // 'Even'

// console.log(checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

/*----------------------------task 2 ---------------------------

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// let formatString = function (str) {
//     if (str.length < 40 ) {
//         return str;
//     } else {
//         return str.slice(0, 40) + '...';
//     }
// }

// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка

// --------------------------------task 3 ---------------------------------

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// let lowerCase = function(a) {
//   return a.toLowerCase();
// };

// let checkForSpam = function(str) {
//   const newStr = lowerCase(str);
//   if (newStr.includes("spam") || newStr.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// ------------       OR

// let checkForSpam = function (str) {
//   const newStr = lowerCase(str);
//   return (newStr.includes("spam") || newStr.includes("sale"));
// }

// Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// --------------------------------task 4 ---------------------------------
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// let getPx = function(str) {
//     if (str === String(str)) {
//         return Number.parseFloat(str);
//     } else {
//         return null;
//     }
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

// --------------------------------task 5 ---------------------------------
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// let findLongestWord = function(str) {
//     const arr = str.split(' ');
//     let min = arr[0].length;
//     let max = min;
//     let maxLong;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length >= max) {
//             max = arr[i].length;
//             maxLong = arr[i];
//         } else if (arr[i].length <= min ) {
//             min = arr[i].length;
//         }
//     }
//     return maxLong;
// }

// let findLongestWord = function(str) {
//   const arr = str.split(" ");
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i = i + 1) {
//     if (arr[i].length >= max.length) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// findLongestWord("The quick brown fox jumped over the lazy dog");

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

// console.log(findLongestWord("Google do a roll")); // вернет 'Google'

// console.log(findLongestWord("May the force be with you")); // вернет 'force'

// --------------------------------task 6 ---------------------------------

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// let findLargestNumber = function (numbers) {
//     max = numbers[0];
//     for (i = 1; i < numbers.length; i ++) {
//         if (max < numbers[i]) {
//             max = numbers[i];
//         }
//     }
//     return max;
// }

// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3

//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27

//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128

// --------------------------------task 7 ---------------------------------

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// let addUniqueNumbers = function (...args) {
//   for (i = 0; i < args.length; i++) {
//     if (uniqueNumbers.includes(args[i])) {
//       continue;
//     } else {
//       uniqueNumbers.push(args[i]);
//       console.log(uniqueNumbers);
//     }
//   }
//   return uniqueNumbers;
// }
// // Вызовы функции для проверки

// console.log('вызов функции addUniqueNumbers(1, 2, 3) =',
//   addUniqueNumbers(1, 2, 3)
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// --------------------------------ClassWork ---------------------------------

// let value = 10;

// const fn = function () {
//   let value = 20;
//   console.log(value + 10);
// };

// fn();

// --------------------------------

// const x = 50;

// const add = function (num) {
//   const x = 10;
//   return num + x;
// };

// // x объявлен глобально и поэтому доступен.
// console.log(add(4));
// console.log(x);

// --------------------------------

// let a = 10;

// const fn = function (value) {
//   const ifValue = Number(value) || a;
//   if(!Number.isNaN(ifValue)) {
//     console.log(ifValue + 10);
//   } else {
//     console.log('value is NaN');
//   }
// };

// fn("3");

// --------------------------------------
// const fnSum = (a, b, c) => {
//   return a + b + c;
// };
// console.log(fnSum(1,2,2));

// const Multipl = x => {
//   return x * 2;
// };

// Multipl(2);

// const fnCol = () => {
//   console.log("Hello! :)");
// };

// fnCol()

// const printMessage = function (callback) {
//   const message = callback();
//   console.log( message );
// };

// const getMessage = function () {
//   return "Welcome to the jungle!";
// }

// printMessage(getMessage);

// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//   const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты

//   // перебираем, входящий при вызове функции массив, записанный в аргумент arr.
//   // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//   // и записываем результат callback-функции в переменную result.
//   // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//   // последним этапом функции map будет возврат(return) переменной resultArr.
//   for(const element of arr) {
//     const result = callback(element);
//     resultArr.push(result);
//   }
//   return resultArr;
// };

// const double = val => val * 2;
// const triple = val => val * 3;
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const tripledNumbers = map(numbers, triple);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const ourArray = (transfer, arr) => {
//   let newArr = [];
//   for (const number of arr) {
//     const elemIteration = transfer(number);
//     newArr.push(elemIteration);
//   }
//   return newArr;
// };

// const double = number => number * number;
// const triple = number => number * number * number;

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = ourArray(double, numbers);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const tripledNumbers = ourArray(triple, numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15];

// const createCounter = () => {
//   // Локальная «свободная» переменная privateCounter,
//   // которая доступна только в замыкании.
//   let privateCounter = 0;

//   const increment = () => {
//     privateCounter += 1;
//     console.log(privateCounter);
//   };

//   return increment;
// };

// const counterA = createCounter();
// counterA(); // 1
// counterA(); // 2
// counterA(); // 3

// const counterB = createCounter();
// counterB(); // 1
// counterB(); // 2

// рекурсия

// const createCounter = () => {
//   // Локальная «свободная» переменная privateCounter,
//   // которая доступна только в замыкании.
//   let privateCounter = 0;
//   const increment = () => {
//     privateCounter += 1;
//     console.log(privateCounter);
//     if(privateCounter > 9) {
//       console.log('sss');
//       return increment();
//     }
//     if (privateCounter > 9) {
//       return privateCounter
//     }
//   };

//   return increment();
// };
// createCounter();

// --------------------------------task 8 ---------------------------------
/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr) {
//   let newArr = [];
//   // console.log(arguments[0]);
//   for (const i = 0; i < arguments.length; i++) {
//     console.log(i);
//     if (arguments[0].includes(arguments)) {
//       continue;
//     } else {
//       newArr.push(arguments[i]);
//     }
//     return newArr;
//   }
// }; (newArr.includes(pseudoArr[i]))

// const filterFromArray = (...arr) =>{
//   const newArr = arr[0];
//   const pseudoArr = arr.slice(1);

//   console.log(pseudoArr.length);

//   for (let i = 0; i < pseudoArr.length; i++) {
//     console.log(i);
//     if (newArr.includes(pseudoArr[i])) {
//       console.log("incl");
//       newArr.splice(newArr.indexOf(pseudoArr[i]), 1);
//     } else {
//       console.log("hi");
//     }
//   }
//   return newArr;
// };

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

// ----------------------------------

// var i = 0, j = 0;
// // Желаемое количество строк
// var max = 5;
// var space = "",
//     star = "";

// while (i < max) {
//     space = "";
//     star = "";
//     for (j = 0; j < max - i; j++) space += " ";
//     for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(space + star);
//     i++;
// }
// ----------------------------------

// function matrixArray(rows,columns){
//   var arr = new Array();
//   for( var i=0; i<rows; i++){
//     arr[i] = new Array();
//     for( var j=0; j < columns; j++){
//       arr[i][j] = i + j + 1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
//     }
//   }
//   return arr;
// }
// // var myMatrix = matrixArray(3,3);
// console.log( matrixArray(3,3));
// ----------------------------------

// var n = 4, m = 4;
// var mas = [];
// for (var i = 0; i < m; i++){
//     mas[i] = [];
//     for (var j = 0; j < n; j++){
//         mas[i][j] = 0;
// }}
// console.log(mas);

// ----------------------------------

// let empty = [];
// let teamNumber = +prompt('Введите количество команд');
// let teamAmount = +prompt('Какое количество играков?');
// let first = [];

// for(let j = 0; j < teamNumber; j++){
//     let first = [];
//     for(let i = 1; i <= teamAmount; i++) {
//       first.push( i + j * teamAmount);
//     }
//     empty.push(first);
// }
// console.log(empty);

// --------------------------------------

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// let sum;
// const sumTo = function(num) { 
//   sum = num;
//   for (let i = 1; i < num; i++) {
//     let a = num - i;
//     sum += a;
//   }
//   return sum; 
// } 
// console.log('sum = ',sumTo(100));
// ------------------------------------------

// const sumTo = function(num) {
//   let sum = 1;
//   for (let i = 2; i <= num; i++) {
//    sum += i;
//   }
//   return sum;
//  }
//  console.log(sumTo(100));

// ---------------------------------------------
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// let sum;
// const sumTo = function(num) { 
//   sum = num;
//   for (let i = 1; i < num; i++) {
//     let a = num - i;
//     sum += a;
//     console.log(a);
//   }
//   return sum; 
// } 
// console.log('sum = ',sumTo(5));

// // ------------------------------------------

// const sumTo = function(num) {
//   let sum = 1;
//   for (let i = 2; i <= num; i++) {
//    sum += i;
//   }
//   return sum;
//  }
//  console.log(sumTo(100));

// function sumTo(num) { 
//   function recSum(num, i, sum) {
//     if (i > num ) {
//       return sum;
//     } else {
//       return recSum(num, i+1, sum+i);
//     }
//   }
//   return recSum(num, 2, 1);
//  }
//  console.log(sumTo(4));

// // ---------------------------

//  function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// console.log('sum = ',sumTo(5));
// -----------------------------------------------

// const numbers = [1, [2, 3], 7];

// const flatten = function fn(arr) {
//   const flatArr = [];

//   for(let elem of arr) { 
//     const isArray = Array.isArray(elem);
//     if (isArray) {
//       for(let x of elem) {
//         flatArr.push(x);
//       }
//     } else {
//       flatArr.push(elem);
//     }
//   }

//   return flatArr;
// }

// const flat = flatten(numbers);
// console.log(flat);


const numbers = [1, [2, 3, [2, 3, [2, 3, [2, 3, [2, 3]]]]], 4, [5, 6], 7];
const number = [1, 4, [5, 6], 7];

const flatten = function self(arr) {
  console.log('self call arr:', arr);
  let flatArr = [];

  for(let elem of arr) { 
    const isArray = Array.isArray(elem);
    if (isArray) {
      flatArr = flatArr.concat(self(elem));
    } else {
      flatArr.push(elem);
    }
  }

  return flatArr;
}

const flat = flatten(numbers);
console.log(flat);