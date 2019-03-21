//============== module 5 # 7 =====================================
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
const order = {
   bread: 10,
   apples: 25,
   chicken: 60,
   milk: 15,
   cheese: 40
 };
 const arrr = Object.values(order);
 let summ = arrr.reduce((acc, value) => acc + value);
console.log(); // 150
//  =======

 console.log(Object.values(order).reduce((acc, value) => acc + value)); // 150
