'use strict';

// repeat module 4
// const User = function(name, isActive) {
//     this.name = name;
//     this.isActive = isActive;
//     this.getStatus = function() {
//       return `${this.name} is ${this.isActive ? 'active' : 'unactive'}`;
//     }
//   };
  
  
//   const user = new User('Boris', false);
  
//   console.log(user.getStatus());

//   ======================================== module 6 ==========

// const animal = { eats: true };

// const dog = { barks: true, undefined };

// dog.__proto__ = animal;

// console.log( dog.barks ); // true
// console.log( dog.eats );


// const animal = { eats: true };

// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }


// Бывают задачи хранения в объекте произвольных значений по ключу,
//  как коллекцию. При поиске в этой коллекции мы найдём не 
// только указанные поля, но и встроенные методы.


// const user = { 
//     name: 'Mango',
//     age: 2
//   };
  
//   console.log(user.toString);
//   console.log(user);



// Это может приводить к ошибкам. Чтобы этого избежать, 
// мы можем создавать объект с помощью метода Object.create(obj), 
// передав параметру obj значение null.

// const userWithoutProto = Object.create(null);
// userWithoutProto.name = 'Mango';

// console.log(userWithoutProto.name); // Mango
// console.log(userWithoutProto.toString);
// console.log(userWithoutProto);

// Объект, создаваемый при помощи Object.create(null) 
// не имеет прототипа, а значит в нём нет лишних свойств. 
// Для коллекции – как раз то, что надо.

// function Guest (name, room) {
//     this.name = name;
//     this.room = room;
//   }
  
//   console.log(Guest.prototype);

//   Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
//   };
  
//   const mango = new Guest('Mango', 28);
//   const poly = new Guest('Poly', 36);
  
//   mango.showGuestInfo(); // name: Mango, room: 28
//   poly.showGuestInfo();
//   console.log(Guest.prototype);


//   --------------dop task 







// -------------------------------------Task 5-------------------------



// -------------practic----------------

// Класс со статическими свойствами и методами
// class Calc {
//     // класс-калькулятор для двух аргументов
//     constructor () { }
  
//     // метод как замена свойству
//     static get PI (){
//       return 3.14;
//     }
  
//     // статический метод +
//     static add (...args) {
//       return args.reduce((acc, next) => acc + next, 0);
//     }
//     // статический метод *
//     static mult (...args) {
//       return args.reduce((acc, next) => acc * next, 1);
//     }
//   }
  
//   console.log(Calc.PI);            // 3.14
//   console.log(Calc.add(2, 3, 4));  // 9
//   console.log(Calc.mult(12, 3, 4)); // 144
