//============== module 5 # 5 =====================================
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
   { name: "Mango", age: 20, isActive: true },
   { name: "Poly", age: 18, isActive: false },
   { name: "Ajax", age: 30, isActive: true },
   { name: "Chelsey", age: 45, isActive: false }
 ];
 const getGuestsOlderThan = (arr, age) => arr.filter((i) => i.age > age)
 
 // Вызовы функции для проверки
 console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
 
 console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
 
 console.log(getGuestsOlderThan(guests, 55)); // []