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

const users = [
   { name: 'Mango', inactiveDays: 15, isActive: true },
   { name: 'Poly', inactiveDays: 8, isActive: false },
   { name: 'Ajax', inactiveDays: 32, isActive: false },
   { name: 'Chelsey', inactiveDays: 85, isActive: true }
 ];

//  const setGuestState =(guests, period) => guests.map((x) => x.inactiveDays > period ? x.isActive = false : x.isActive = true )
 
const setGuestState = (guests, period) => guests.map((x) => ({
   ...x,
   isActive: x.inactiveDays < period
 }));

  console.log(updatedUsers);
const setGuestState = (users, period) =>
   users.map(
     obj =>
       obj.inactiveDays < period
         ? { ...obj, isActive: true }
         : { ...obj, isActive: false }
   );
 // Вызовы функции для проверки
 console.log(
   setGuestState(users, 10)
 ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
 
 console.log(
   setGuestState(users, 20)
 ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
 
 console.log(
   setGuestState(users, 50)
 ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
