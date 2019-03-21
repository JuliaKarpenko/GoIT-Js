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

const User = function (name, isActive, age, friends) {
  this.name = name,
  this.isActive = isActive,
  this.age = age,
  this.friends = friends,
  this.getUserIngo = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
  };
};

const newUser = new User("Mango", true, 7, 10);
console.log(newUser);
console.log(newUser.getUserIngo());

