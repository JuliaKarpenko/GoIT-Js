
//============== module 5 # 4 =====================================

 /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
   { name: "Mango", age: 20, isActive: true },
   { name: "Poly", age: 18, isActive: false },
   { name: "Ajax", age: 30, isActive: true },
   { name: "Chelsey", age: 45, isActive: false }
 ];

 function getActiveGuests(guests) {
    return guests.filter(function(guests){
       return guests.isActive;
    } )
 }
// ======
function getActiveGuests(guests){


   return guests.filter(function(el){
       if(el.isActive === true)
       return el;
       // console.log(el);
     })
    
   }
// ======
const getActiveGuests = (guests) => guests.filter(i => i.isActive === true);
 
 // Вызовы функции для проверки
 console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
 