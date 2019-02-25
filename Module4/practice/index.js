// "use strict";

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


// ==================Домашка

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
  bread: 10,
  milk: 15,
  apples: 20,  
  chicken: 50,
  cheese: 40,
};

/* 
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
    
    - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    
    - countTotalPrice(order) - метод, получает объект списка покупок, считает общую стоимость покупок.
      🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
         а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
         Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
     
    - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
        * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
        * Если денег было передано достаточно, возвращает разницу денег.
        * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
        
    - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
    
    - reset() - метод, сбрасывает поле customerMoney 0.
*/
// 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countTotalPrice = function(order) {
    let totalPrice = 0;
    for (let keys in order) {
      totalPrice += order[keys] * this.productDatabase[keys];
    }
    return totalPrice;
  };
  this.countChange = function(totalPrice) {
    let change = 0;
    if (this.customerMoney >= totalPrice) {
      change = this.customerMoney - totalPrice;
      return change;
    } else {
      return null;
    }
  }
  this.onSuccess = function(change) {
    if (change !== null) {
      alert(`Спасибо за покупку, ваша сдача ${change}!`);
    }
  }
  this.onError = function(change) {
    if (change == null)
    alert('Очень жаль, вам не хватает денег на покупки');
  }
  this.reset = function(customerMoney) {
    customerMoney = 0;
  }
};

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0

