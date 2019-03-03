
// ==================Array.forEach()==============
// Перебирает
// Может изменять
// Не возвращает

// const numbers = [1, 2, 3];

//  // Классический for
//  for (let i = 0; i < numbers.length; i += 1) {
//    console.log(numbers[i]);
//  }

//  // Функциональный forEach
//  numbers.forEach(num => console.log(num));

//  // Указываем параметр idx если нужен доступ к счетчику
//  numbers.forEach(
//    (num, idx) => console.log(`index ${idx}, value ${num}`)
//  );

// ================== Array.map()==================

// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// ----------------------------

// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];

// const updatedUsers = users.map(user => ({
//     ...user,
//     isActive: user.daysInactive < 7
//   }));
 
//   console.log(updatedUsers);

// =======================Array.filter()==============

// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   console.log(
//     numbers.filter(num => num > 5)
//   ); // [6, 7, 8, 9]

//   console.log(
//     numbers.filter(num => num < 5)
//   ); // [0, 1, 2, 3, 4]

//   console.log(
//     numbers.filter(num => num === 5)
//   ); // [5]

//   ------------

// const users = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true },
//     { name: "Chelsey", isActive: false }
//   ];

//   // Для каждого элемента коллекции (user) проверим
//   // поле isActive. Если оно true, то
//   // текущий элемент (user) будет записан
//   // в результирующий массив.
//   const activeUsers = users.filter(user => user.isActive);
//   console.log(activeUsers);

//   // Для каждого элемента коллекции (user) проверим
//   // поле isActive. Если оно false, то
//   // текущий элемент (user) будет записан
//   // в результирующий массив.
//   const inactiveUsers = users.filter(user => !user.isActive);
//   console.log(inactiveUsers);

//   ================Array.find()================

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент
// (будет искать до первого совпадения,
// после чего прервет свое выполнение.)

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   numbers.find(num => num > 5)
// ); // 6

// console.log(
//   numbers.find(num => num < 5)
// ); // 0

// console.log(
//   numbers.find(num => num === 5)
// ); // 5

// // ------------
// const users = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false }
//   ];
  
//   // Для каждого элемента коллекции (user) проверим
//   // поле id. Если оно совпадает с искомым идентификатором, то
//   // find прекратить дальнейшее выполнение и вернет текущий
//   // элемент (user) как результат выполнения
//   const user = users.find(user => user.id === "002");
//   console.log(user);
  
//   // Создадим функцию которая будет возвращать нам пользователя по id
//   const getUserById = (arr, id) => arr.find(x => x.id === id);
  
//   console.log( getUserById(users, "001") );
//   console.log( getUserById(users, "003") );

//   =================Array.every() и Array.some()===============
// Перебирает
// Не изменяет
// Возвращает true или false

// Функция которая проверяет величину значения,
 // возвращает true или false.
//  const isBigEnough = val => val >= 10;

//  /*
//    Допустим нам нужно узнать достаточно ли большие ВСЕ числа
//    в коллекции. Все что нам нужно это буль true/false.

//    Метод every вернет true только тогда, когда все элементы
//    коллекции будут удовлетворять условию в callback-функции.
//  */
//  console.log(
//    [12, 5, 8, 130, 44].every(isBigEnough)
//  ); // false

//  console.log(
//    [12, 54, 18, 130, 44].every(isBigEnough)
//  ); // true

//  /*
//    Допустим нам достаточно узнать ЕСТЬ ЛИ в коллекции числа
//    больше 10, хотя бы одно или больше. Все что нам нужно это
//    буль true/false.

//    Метод some вернет true только тогда, когда хотябы 1 или
//    более элементов коллекции будут удовлетворять условию
//    в callback-функции.
//  */
//  console.log(
//    [2, 5, 8, 1, 4].some(isBigEnough)
//  ); // false

//  console.log(
//    [12, 5, 8, 1, 4].some(isBigEnough)
//  ); // true

//  ====================Array.reduce()=====================
// Перебирает
// Не изменяет
// Возвращает что угодно

// array.reduce(
//   callback[previousValue, currentItem, index, array],
//   initialValue
// )

// previousValue - промежуточный результат (аккумулятор)
// currentItem - текущий элемент массива
// index - индекс текущего элемента массива
// array - оригинальный массив

// Работает это так:

// Функция reduce создаст новую переменную, называемую аккумулятор. 
// Затем присвоит аккумулятору значение текущего (первого) элемента массива currentItem.
// Функция проверит - есть ли у массива следующий элемент и если он есть, 
// то добавит значение к аккумулятору. 
// Когда следующего элемента не окажется (конец массива), функция вернет значения аккумулятора.
// Вторым аргументом reduce может быть начальное значение initialValue. 
// Это значение будет присвоено аккумулятору до применения callback-функции к первому элементу массива.

// const numbers = [1, 2, 3, 4, 5];
//   const summ = numbers.reduce((acc, value) => acc + value, 0);
//   console.log(summ); // 15

//   --------------
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   // Пройдем по всем элементам коллекции и прибавим
//   // значения свойства likes к  аккумулятору,
//   // начальное значаение которого укажем 0.
//   const likes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);

//   console.log(likes); // 32

//   // Наверное подсчет лайков не одиночная операция,
//   // поэтому напишем функцию для подсчета лайков из коллекции
//   const countLikes = arr => arr.reduce((acc, x) => acc + x.likes, 0);

//   console.log(
//     countLikes(tweets)
//   ); // 32

//   // Пройдем по всем элементам коллекции и добавим
//   // значения свойства tags к  аккумулятору,
//   // начальное значаение которого укажем пустым массивом [].
//   // Если tweet.tags есть, то конкатенируем его
//   // с текущим аккумулятором и возвращаем результат.
//   // Если поля tags нету, то возвращаем текущий аккумулятор.
//   const tags = tweets.reduce(
//     (acc, tweet) => tweet.tags ? acc.concat(tweet.tags) : acc,
//     []
//   );

//   console.log(tags);

//   // Наверное сбор тегов не одиночная операция,
//   // поэтому напишем функцию для сбора тегов из коллекции
//   const getTags = arr => arr.reduce(
//     (acc, x) => x.tags ? acc.concat(x.tags) : acc,
//     []
//   );

//   console.log( getTags(tweets) );

//   const tags1 = getTags(tweets);

//   // Вынесем callback-функцию отдельно,
//   // а в reducе передадим ссылку на нее.
//   // Это стандартная практика если callback-функция
//   // довольно большая.

//   // Если в объекте-аккумуляторе acc нету своего
//   // свойства с ключем tag, то создаем его и
//   // записывает ему значение 0.
//   // В противном случае увеличиваем значение на 1.
//   const getTagStats = (acc, tag) => {
//     if(!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
//   };

//   // Начальное значение аккумулятора это пустой объект {}
//   const countTags = arr => arr.reduce(getTagStats, {});

//   const tagCount = countTags(tags1);
//   console.log(tagCount);

// ==========================Array.sort()======================
// Перебирает
// Изменяет
// Возвращает коллекцию

// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log(
//   "Before sort: ", numbers
// ); // [2, 1, 4, 3, 5]

// console.log(
//   "After sort: ", numbers.sort()
// ); // [1, 2, 3, 4, 5]

// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];
// // Отсортирует по алфавиту
// console.log(
//   "Before sort: ", clients
// ); // ["Mango", "Ajax", "Poly", "Chelsey"]

// console.log(
//   "After sort: ", clients.sort()
// ); // ["Ajax", "Chelsey", "Mango", "Poly"]


// const users = [
//     { name: "Mango", daysActive: 15 },
//     { name: "Poly", daysActive: 4 },
//     { name: "Ajax", daysActive: 27 },
//     { name: "Chelsey", daysActive: 2 }
//   ];
  
//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
//   console.log(
//     users.sort(sortByActiveDays)
//   );
//   ====================ПРАКТИКА==========================

// const users = [
//    {
//      id: '121asdasda',
//      name: 'Gleb',
//      sex: 'male',
//      position: 'manager',
//      salery: 24
//    },
//    {
//      id: '121a232asda',
//      name: 'Alin',
//      sex: 'female',
//      position: 'solider',
//      salery: 15
//    },
//    {
//      id: '11241asda',
//      name: 'Adam',
//      sex: 'male',
//      position: 'developer',
//      salery: 19
//    },
//    {
//      id: '94421asda',
//      name: 'Funk',
//      sex: 'female',
//      position: 'developer',
//      salery: 13
//    },
//    {
//      id: '77221asda',
//      name: 'Gooliver',
//      sex: 'male',
//      position: 'gooliver',
//      salery: 17
//    }
//  ];
//  console.log(users[1].id, users[2].sex);
 
 //шукємо usera по id
//  for (const elem of users){
//    console.log(elem);
//    if (elem.id === '94421asda'){
//       console.log(elem);
//    }   
//  }

//  function findById ( id ) {
//    for (const elem of users){
//       if (elem.id === id)
//          return elem;
//    }
//  }
//  console.log(findById('94421asda'));
 
// function findBy ( id, action ) {
//    for (const elem of users){
//       let find = action(id, elem);
//       if (find !==null) {
//          return find;
//       }
//    };
// };

// const byId = (id, elem) => elem.id === id ? elem : null;
// const byName = (name, elem) => elem.name === name ? elem : null;
// console.log(findBy('121a232asda', byId));
// console.log(findBy('Adam', byName));

// const map = function (arr, change, currency, pdw) {
//    let newArr = [];
//    for (let num of arr){
//       newArr.push(change(num.salery, currency, pdw));      
//    }
//    return newArr;
// }
// const changeSalery = (salery, currency, pdw) => Math.round(salery * currency * (1 - pdw/100));
// console.log(map(users, changeSalery, 30, 20));

//============== module 5 # 1 ========================

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => arr.filter((i) => i > num);
   // const result = [];
 
   // for (let i = 0, max = arr.length; i < max; i += 1) {
   //   if (arr[i] > num) {
   //     result.push(arr[i]);
   //   }
   // } 
 
   // return result;
 
 
//  console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//  console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//  console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
 
 /* 
   Функция multiplyBy принимает два аргумента - число и массив. 
   Возвращает массив все значения которого умножены на число.
 */
//  const multiplyBy = (num, arr) => arr.map((i) => i * num);
//  {
//    let result = [];
 
//    for (let i = 0, max = arr.length; i < max; i += 1) {
//      result.push(arr[i] * num);
//    }
 
//    return result;
//  };
 
//  console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//  console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//  console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
 
 /* 
   Функция summAllNumbers принимает любое число аргументов.
   Возвращает число - сумму всех аргументов.
 */
//  function summAllNumbers(...args){
//     return args.reduce((acc, i) => acc + i,0);
//  };
//  {
//    let accumulator = 0;
 
//    for (let i = 0, max = args.length; i < max; i += 1) {
//      accumulator += args[i];
//    }
 
//    return accumulator;
//  }
 
//  console.log( summAllNumbers(1, 2, 3) ); // 6
//  console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//  console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
 
 /* 
   Функция findEvery получает два аргумента - число и массив.
   Возвращает true если все элементы массива больше или равны числу.
   Иначе если есть хоть один элемент меньше числа, то возвращается false.
 */
//  const findEvery = (num, arr) => arr.every((i) => num <= i);
//  {
//    for (let i = 0, max = arr.length; i < max; i += 1) {
//      if (arr[i] < num) {
//        return false;
//      }
//    }
 
//    return true;
//  };
 
//  console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//  console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//  console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

//============== module 5 # 2 =====================================

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/  
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];
//  function getPropValues (arr, prop) {
//     return arr.map((i) => i[prop]);
//  }
 
//  // Вызовы функции для проверки
//  console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
 
//  console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
 
//  console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
 

//============== module 5 # 3 =====================================

 /*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const users = [
//    { name: 'Mango', inactiveDays: 15, isActive: true },
//    { name: 'Poly', inactiveDays: 8, isActive: false },
//    { name: 'Ajax', inactiveDays: 32, isActive: false },
//    { name: 'Chelsey', inactiveDays: 85, isActive: true }
//  ];

// //  const setGuestState =(guests, period) => guests.map((x) => x.inactiveDays > period ? x.isActive = false : x.isActive = true )
 
// const setGuestState = (guests, period) => guests.map((x) => ({
//    ...x,
//    isActive: x.inactiveDays < period
//  }));

//   console.log(updatedUsers);
// const setGuestState = (users, period) =>
//    users.map(
//      obj =>
//        obj.inactiveDays < period
//          ? { ...obj, isActive: true }
//          : { ...obj, isActive: false }
//    );
//  // Вызовы функции для проверки
//  console.log(
//    setGuestState(users, 10)
//  ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
 
//  console.log(
//    setGuestState(users, 20)
//  ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
 
//  console.log(
//    setGuestState(users, 50)
//  ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//============== module 5 # 4 =====================================

 /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];

//  function getActiveGuests(guests) {
//     return guests.filter(function(guests){
//        return guests.isActive;
//     } )
//  }
//======
// function getActiveGuests(guests){


//    return guests.filter(function(el){
//        if(el.isActive === true)
//        return el;
//        // console.log(el);
//      })
    
//    }
//======
// const getActiveGuests = (guests) => guests.filter(i => i.isActive === true);
 
//  // Вызовы функции для проверки
//  console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
 
//============== module 5 # 5 =====================================
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];
//  const getGuestsOlderThan = (arr, age) => arr.filter((i) => i.age > age)
 
//  // Вызовы функции для проверки
//  console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
 
//  console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
 
//  console.log(getGuestsOlderThan(guests, 55)); // []

//============== module 5 # 6 =====================================
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { id: 1, name: 'Mango', age: 20 },
//    { id: 2, name: 'Poly', age: 18 },
//    { id: 3, name: 'Ajax', age: 30 },
//    { id: 4, name: 'Chelsey', age: 45 }
//  ];
//  const getGuestById = (arr, id) => arr.find((element) => element.id === id);
 
//  // Вызовы функции для проверки
//  console.log(
//    getGuestById(guests, 3)
//  ); // {id: 3, name: 'Ajax', age: 30}
 
//  console.log(
//    getGuestById(guests, 1)
//  ); // {id: 1, name: 'Mango', age: 20}
 
//  console.log(
//    getGuestById(guests, 5)
//  ); // undefined

//============== module 5 # 7 =====================================
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//    bread: 10,
//    apples: 25,
//    chicken: 60,
//    milk: 15,
//    cheese: 40
//  };
//  const arrr = Object.values(order);
//  let summ = arrr.reduce((acc, value) => acc + value);
// console.log(); // 150
 //=======

//  console.log(Object.values(order).reduce((acc, value) => acc + value)); // 150

//============== module 5 # 8 =====================================
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/
// const getTotalPrice = function(products, order) {
//    let kay = Object.keys(order);
//    return kay.reduce ((acc,element) => acc + order[element] * products[element], 0)
// }

// const products = {
//    bread: 10,
//    milk: 15,
//    apples: 20,
//    cheese: 30,
//    chicken: 40
//  };
 
//  const orderA = {
//    bread: 2,
//    apples: 4,
//    chicken: 1
//  };
 
//  const orderB = {
//    bread: 1,
//    milk: 2,
//    cheese: 3
//  };
 


 // Вызовы функции для проверки
//  console.log(getTotalPrice(products, orderA)); // 140
 
//  console.log(getTotalPrice(products, orderB)); // 130

//============== module 5 # 9 =====================================
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/
// let allGuestsActive = (guests) => guests.every(el => el.isActive)

// const guestsA = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: false },
//    { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: true },
//    { name: "Ajax", isActive: true }
// ];
// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true



