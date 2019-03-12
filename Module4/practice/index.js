"use strict";

// const user = {
//   name: 'Frank',
//   age: 21,
//   male: true,
//   getInfo: function() {
//     return `name: ${this.name} / age: ${this.age} / male: ${this.male}`
//   }
// };
// // console.log(user.getInfo());
// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.male);
// user.height = 180;
// // delete user.name;
// // console.log(user.getInfo());

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// // console.log(Object.keys(user));
// // console.log(Object.values(user));
// console.log("");
// const userArr = Object.entries(user);
// console.log(userArr);
// console.log("");
// for (const el of userArr) {
//   console.log(`${el[0]}: ${el[1]}`);
// }

// // ------------------------------------------------

// const a = {
//   x: 1,
//   y: 2
// };

// const b = {
//   x: 0,
//   z: 3
// }

// // const c = {...a, ...b};
// const c = Object.assign({}, a, b);

// console.log(c);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const person = {
//   name: "Hi",
//   age: 25,
// }

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status = "free" } = hotel;
// const { name: name1, age, status: status1 = "asdadsa" } = person;

// console.log(name, stars, status);
// console.log(name1, age, status1);

// =============================Модуль 4, урок 2=============================

// const users = ["Greengo", "Riki", "Floyd", "Marchellos"];
// let userIndex;

// for (let input of users) {
//   if (input === "Riki") {
//     userIndex = users.indexOf(input);
//   }
// }
// console.log(userIndex);

// let ask = prompt("Add a new user");

// if (users.includes(userInput) === false) {
//   users.push(userInput);
// } else {
//   alert ('This user has allready');
// }

// for (let user of users) {
//   let exist = true;
//   if (ask === user) {
//     alert("this user already exists");
//   } else {
//     users.push(ask);
//   }
// }
// console.log(userIndex);
// sliseArr = users.splice(userIndex,1);
// console.log(sliseArr);
// console.log(users);
// users.splice(userIndex, 0, "hi");
// console.log(users);

// Дальше давайте перепишем каждый шаг в отдельную функцию getUserID(id),
// addUser('string'), deleteUser(id), updateUser(id)

// function getUserID(name) {
//   let userIndex = "";
//   for (let input of users) {
//     if (input === name) {
//       userIndex = users.indexOf(input);
//     }
//   }
//   if (userIndex !== "") {
//     return userIndex;
//   } else {
//     alert("user is not finded");
//   }
//   console.log(userIndex);
// }

// console.log(getUserID("aabbbba")); // если юзера нет "user is not defined"

// const addUser = function(arr, name) {
//   if (arr.includes(name)) {
//     alert("user has already exist");
//   } else {
//     arr.push(name);
//   }
// };
// addUser(users, "Ajax");
// addUser(users, "Pablo");
// console.log(users);

// const deleteUser = userIndex => {
//   users.splice(userIndex, 1);
// };
// deleteUser(2);

// console.log("aftedDelete", users);
// deleteUser(getUserID("Max"));
// console.log(users);

// const updateUser = function(index, name, arr) {
//   arr[index] = name;
//   return arr;
// };
// console.log(getUserID("aaa"));
// console.log(updateUser(getUserID("aaa"), "Max", users));

// // - выводит содержимое объекта user в формате ключ:значение
// // используя Object.entries и for...of

// const users = [
//   { id: "user_id_1", name: "Greengo" },
//   { id: "user_id_2", name: "Riki" },
//   { id: "user_id_3", name: "Floyd" },
//   { id: "user_id_4", name: "Marchellos" }
// ];
// // обновим функцию getUserID id: 'user_id_111' - должно вернуть
// // объект юзер с id user_id_111

// function getUserID(id) {
//   let userIndex = "";
//   for (let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input);
//     }
//   }
//   if (userIndex !== "") {
//     return userIndex;
//   } else {
//     alert("user is not finded");
//   }
//   console.log(userIndex);
// }

// console.log(getUserID("user_id_2"));
// console.log(users[getUserID("user_id_2")].name);
// // -----------------------------------------
// const deleteUser = userIndex => {
//   users.splice(userIndex, 1);
// };
// deleteUser(2);
// console.log(users);
// console.log(deleteUser("user_id_111"));
// console.log(users);

// // // -----------------------------------------

// const updateUser = function(index, name, arr) {
//   arr[index] = name;
//   return arr[index];
// };

// const update = updateUser(getUserID("user_id_4"), 'Max', users);
// console.log(getUserID("user_id_2"));
// console.log(users);

// const addUser = function(arr, obj) {
//   arr.push(obj);
// }

// addUser(users, {id: 'user_id_555', name:'Ajax'});
// addUser(users, {id: 'user_id_666', name: 'Pablo'});
// console.log(users);

// const getAllUsers = function(arr) {
//   for (const el of arr) {
//     console.log(`id: ${el.id} name: ${el.name}`);
//   }
//  }

//  console.log(getAllUsers(users));

// --------------------practic--------------------------------

// const Student = function(name, birthday, slogan) {
//   this.name = name;
//   this.birthday = birthday;
//   this.slogan = slogan;
//   this.getSlogan = function() {
//     alert(`${this.slogan}`);
//   }
// }

// const newStudent = new Student('Ben', '2.08.1988', 'Winter is comming');
// console.log('newStudent :', newStudent);
// newStudent.getSlogan();

// // ============Дополнительный задание №1 ==========================
// /*
//   Напишите скрипт, который, для объекта user, последовательно:

//     - добавляет поле mood со значением 'happy'

//     - заменяет значение hobby на 'javascript'

//     - удаляет свойство premium

//     - выводит содержимое объекта user в формате ключ:значение
//       используя цикл for...in

//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.keys и for...of

//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.entries и for...of
// */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// //1 - добавляет поле mood со значением 'happy'
// user.mood ='happy';
// console.log('user', user);

// //2 - заменяет значение hobby на 'javascript'
// user.hobby = 'javascript';
// console.log('user', user);

// //3 - удаляет свойство premium
// delete user.premium;
// console.log('user', user);

// //4 - выводит содержимое объекта user в формате ключ:значение
// // используя цикл for...in

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// //5 - выводит содержимое объекта user в формате ключ:значение
// // используя Object.keys и for...of

// const keys = Object.keys(user);
// console.log(keys);

// for(const key of keys) {
//   console.log(`${key}:, ${user[key]}`);
// }

// ---------------------Task 2 ---------------------------

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let tasksCompletedValues = Object.values(tasksCompleted);

// let maxValue = tasksCompletedValues[0];

// for ( let i = 1; i < tasksCompletedValues.length; i++) {
//   if (tasksCompletedValues[i] > maxValue) {
//     maxValue = tasksCompletedValues[i];
//   }
// }

// console.log(maxValue);


// ------------------------------Task 3------------------------------

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

// const dog = {
//   name: 'Yara',
//   age: 3
// }
// let counter = 0;
// const countProps = function (obj) { 
//   for (key in obj) {
//     counter++;
//   }
//   return counter;
// };

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3


// ---------------------------------Task 4 ------------------------------

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.

*/

// const isObjectEmpty = function (obj) {
//     if (Object.keys(obj).length === 0) {
//       return true;
//     } else {
//       return false;
//     }
// };

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// ---------------------------------Task 5 ------------------------------

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = function (salaries) {
//   let values = Object.values(salaries);
//   console.log(values);
//   let sum = 0;
//   for (let key of values) {
//     sum += key;
//   }
//   return sum;
// }

// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// ---------------------------------Task 6 ------------------------------

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const getAllPropValues = function (arr, prop) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][prop]);
//   }
//   return newArr;
// };

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

// ---------------------------------Task 7 ------------------------------

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// const User = function (name, isActive, age, friends) {
//   this.name = name,
//   this.isActive = isActive,
//   this.age = age,
//   this.friends = friends,
//   this.getUserIngo = function() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   };
// };

// const newUser = new User("Mango", true, 7, 10);
// console.log(newUser);
// console.log(newUser.getUserIngo());


// ---------------------------------Task 8 ------------------------------

/*  
  Расставьте отсутствующие this в методах объекта store
*/

// /* 
  
  // const store = {
  //   products: ['bread', 'cheese', 'milk', 'apples'],
  //   managers: ['poly', 'mango', 'ajax'],
  //   addManager(manager) {
  //     this.managers.push(manager);
      
  //     console.log(this.managers);
  //   },
  //   removeManager(manager) {
  //     const idx = this.managers.indexOf(manager);
      
  //     this.managers.splice(idx, 1);
      
  //     console.log(this.managers);
  //   },
  //   getProducts() {
  //     console.log(this.products);
      
  //     return this.products;
  //   }
  // }
  
  // store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
  
  // store.removeManager('mango'); // ['poly', ajax', 'chelsey']
  
  // store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// ---------------------------------Task 9 ------------------------------

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     password = newPassword;

//     console.log(password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'


// // ==================Домашка

// /*
//   Создайте скрипт кассира, который получает список продуктов и деньги,
//   подсчитывает общую стоимость продуктов, и в зависимости от того хватает
//   денег или нет, уведомляет покупателя о результате.
// */

// /* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40,
// };

// /*
//   Необходимо создать функцию-конструктор Cashier.

//   Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
//     - name - строка, имя кассира, передается при вызове конструктора

//     - productDatabase - объект база данных продуктов, передается при вызове конструктора

//     - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0

//     - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.

//     - countTotalPrice(order) - метод, получает объект списка покупок, считает общую стоимость покупок.
//       🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
//          а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
//          Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.

//     - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
//         * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
//         * Если денег было передано достаточно, возвращает разницу денег.
//         * Если в customerMoney меньше денег чем в totalPrice, возвращает null

//     - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.

//     - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'

//     - reset() - метод, сбрасывает поле customerMoney 0.
// */
// // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта

// function Cashier(name, productDatabase) {
//   this.name = name;
//   this.productDatabase = productDatabase;
//   this.customerMoney = 0;
//   this.getCustomerMoney = function(value) {
//     this.customerMoney = value;
//   };
//   this.countTotalPrice = function(order) {
//     let totalPrice = 0;
//     for (let keys in order) {
//       totalPrice += order[keys] * this.productDatabase[keys];
//     }
//     return totalPrice;
//   };
//   this.countChange = function(totalPrice) {
//     let change = 0;
//     if (this.customerMoney >= totalPrice) {
//       change = this.customerMoney - totalPrice;
//       return change;
//     } else {
//       return null;
//     }
//   }
//   this.onSuccess = function(change) {
//     if (change !== null) {
//       alert(`Спасибо за покупку, ваша сдача ${change}!`);
//     }
//   }
//   this.onError = function(change) {
//     if (change == null)
//     alert('Очень жаль, вам не хватает денег на покупки');
//   }
//   this.reset = function(customerMoney) {
//     customerMoney = 0;
//   }
// };

// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

// /* Пример использования */
// const mango = new Cashier('Mango', products);

// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);

// // Проверям что посчитали
// console.log(totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange(totalPrice);

// // Проверяем что нам вернул countChange
// console.log(change); // 190

// // Проверяем результат подсчета денег
// if(change !== null) {
//    // При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }

// // Вызываем reset при любом исходе обслуживания
// mango.reset();

// // Проверяем значения после reset
// console.log(mango.customerMoney); // 0

// const user = {
//   name: 'Baron',
// };

// const user1 = {
//   name: 'Vasya',
// };

// const myFunc = function (message = '') {
//   console.log('this in myFunc:', this);
//   return `Hello my name is ${this.name}. ${message}`;
// };
// // console.log(myFunc()); // 'name' of undefined
// const result = myFunc.call(user, 'How are you?');
// console.log(result);

// user.getMyname = myFunc;
// console.log('call user1 to user.getMyName:',user.getMyname.call(user1));

// console.log('from user: ', user.getMyname());

// const action = function (callback) {
//   return callback('how are you', 'dsdsdsds');
// };

// console.log(action(myFunc.bind(user1)));

// ===================== practic 26.02
// const dogs = {
//   name: 'Yara',
//   breed: 'Shepherd',
// }

// const cat = {
//   name: 'Minu',
//   breed: 'Scottish',
// }

// const breedFunct = function () {
//   return `The animal breed is ${this.breed}`
// }

// const action = function(callback) {
//   return callback();
// }

// console.log(action(breedFunct.bind(dogs)));
// console.log(action(breedFunct.bind(cat)));

// console.log('call function with dogs object = ', breedFunct.call(dogs));
// console.log('apply function with dogs object = ', breedFunct.apply(dogs));

// console.log('call function with cat object = ', breedFunct.call(cat));
// console.log('apply function with cat object = ', breedFunct.apply(cat));

// ---------------Function Constructor

// function Dog(name = "Poops", age, breed, color, male, vegenation, facebook) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.color = color;
//   this.male = male;
//   this.vegenation = vegenation;
//   this.facebook = facebook;
//   this.yep = function() {
//     return 'wwwwwwwwwooooooofffff'
//   }
// }

// const dog = new Dog(undefined, 2, "chau-chau", "black", "female", true, 'http://facebook.com/poops');
// console.log(dog);

// console.log(dog.yep());

// dog.getAboutData = function () {
//   return `name: ${this.name}; age: ${this.age}, breed: ${this.breed}`
// }
// console.log(dog.getAboutData());

// const dog2 = new Dog(undefined, 5, "боксер", "orange", "male", false, undefined);
// console.log(dog2);

// const numbers = [1, 2, 3, 4, 5]; //not our mass

// // const ourArray =(transfer,numbersClone) => {//new mass
// //   let newMass = []; //future mass
// //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
// //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
// //     newMass.push(newElement); // rewrite new mass
// //   }
// //   return newMass; // return parametrs in numbersclone
// // };

// const double = (number) => number *2; // our function

// const triple = (number) => number *3;
// // const triple = function (number) {     //our function
// //   return number * 3;
// // };
// // const doubledNumbers = ourArray(double, numbers); // we need results
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const tripledNumbers = ourArray(triple,numbers);
// // console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const newMass = [];
// numbers.map(function(el) { return newMass.push(el*2) });
// newMass2 = [];
// numbers.map(function(el) { return newMass2.push(triple(el))});

// // console.log(numbers);
// // console.log(newMass);
// // console.log(newMass2);

// const values = [9, 65, 3423, 234, 523];

// const newArr = values.map(function(el, index) {
//   console.log(`${index} : ${el}`);
//   return el * 2;
// })
// const newArr3 = values.map(double);

// console.log('newArr', newArr);
// console.log('newArr3', newArr3);

// ---------------------example work map


// const numbers = [1, 2, 3, 4, 5]; 

// const mapExample = function(arr, transfer) {
//   const numbersNew = [];
//   for (const el of arr) {
//     const elNew = transfer(el);
//     numbersNew.push(elNew);
//   }
//   return numbersNew;
// }

// const arrowFunction = (number) => number * 4;

// console.log(mapExample(numbers, arrowFunction));

// ===============this in arrow function

// const hotel = {
//   name: 'hello',
//   showThis() {
//     console.log('this in showthis: ', this);

//     const fn = () => {
//       console.log('this in fn: ', this);
//     };

//     console.log('fn function вызов', fn());
//   }
// }

// hotel.showThis();

// ---
// const hotel = {
//   name: 'hello',
//   showThis() {
//     console.log('this in showthis: ', this);
//   },
// };

// const fn = function(callback) {
//   console.log('this in fn: ', this);
//   console.log('callback: ', callback);
//   callback();
// };

// hotel.newFn = fn;

// hotel.newFn(hotel.showThis);

// ===================================06.03=============================
//=======================================
//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.Работать должно так:
// function isEmpty(obj) {
//    if(Object.keys(obj).length){
//       return true;
//    }return false 
//  } 

//  let schedule = {}; 

//  alert( isEmpty(schedule) ); // true 
//  schedule["8:30"] = "подъём"; 
//  alert( isEmpty(schedule) ); // false

//=======================================
// Сумма свойств
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:
// "use strict";
// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// //... ваш код выведет 650
// // P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.
// function getSumm (obj){
//    let summ = 0;
//    for(let key in obj){
//       summ += obj[key];
//    }return summ;
// }
// console.log(getSumm({}));
// console.log(getSumm(salaries));

// --------------------------------------------------------------------------------

// Свойство с наибольшим значением
// важность: 5


// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника,
//  у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

// Например:

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// let max = 0;
// let name = '';

// function bigSalary (obj) {
//   for (let key in obj) {
//     if (obj[key] >= max) {
//       max = obj[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(bigSalary(salaries));

// ... ваш код выведет "Петя"

// ==================================================
// Умножьте численные свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric, которая получает объект 
// и умножает все численные свойства на 2. Например:

// до вызова
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj, callback) {
//   for (let key in obj) {
//     if (callback(obj[key])) {
//       obj[key] = obj[key]*2;
//     }
//   }
// }

// // после вызова
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };
// // P.S. Для проверки на число используйте функцию:

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// multiplyNumeric(menu, isNumeric);
// console.log(menu);

// ----------------------------------------------------------
// Задание 10 Найти последовательность Хэеса, то есть пользователь 
// вводит число и в результате должно быть выдано сообщение, с 
// самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, 
// и вершиной последовательности, это максимальное число из этой 
// последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, 
// если оно чётное, делим на 2, если нечетное, умножаем на 3 и 
// прибавляем 1, и так до тех пор пока число не
// будет равно 1.

// 9*3+1=28
// 28/2=14
// 14/2=7
// 7*3+1=22
// 22/2=11
// 11*3+1=34
// 34/2=17
// 17*3+1=52
// 52/2=26
// 26/2=13
// 13*3+1=40
// 40/2=20
// 20/2=10
// 10/2=5
// 5*3+1=16
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1

// const Xeksa = function(num) {
//   let counter = 0;
//   let max = 0;
//   do {
//     if (num % 2 === 0 ) {
//       console.log(`${num} / 2 = ${num / 2}`);
//       num = num / 2;
//     } else {
//       console.log(`${num} * 3 + 1 = ${(num * 3) + 1}`);
//       num = (num * 3) + 1;
//       if (num >= max) {
//         max = num;
//       }
//     }
//     counter += 1;
//   } while (num !== 1);

//   console.log('counter:', counter);
//   console.log('max', max);

// };

// Xeksa(9);

