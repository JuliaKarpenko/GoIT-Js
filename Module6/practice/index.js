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
// ----------------------------task 1------------------
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// c  помощью конструктора

// const Account = function(login, email) {
//     this.login = login;
//     this.email = email;
// }

// Account.prototype.getInfo = function() {
//     console.log(`${this.login} and ${this.email}`);
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

//  с помощью класса

// class Account {

//     constructor (login, email) {
//         this.login = login;
//         this.email = email;
//     }

//     getInfo () {
//         console.log(`${this.login} and ${this.email}`);
//     }
// }

// const mango = new Account('mango', 'mango@dog.woof');
// mango.getInfo();

/*----------------------------task 2------------------
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// c  помощью конструктора

// const StringBuilder = function(value) {
//     this.value = value;
//   };
  
//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };
  
//   StringBuilder.prototype.toAppend = function(str) {
//     return (this.value = this.value + str);
//   };
  
//   StringBuilder.prototype.toPrepend = function(str) {
//     return (this.value = str + this.value);
//   };
  
//   StringBuilder.prototype.toPad = function(str) {
//     return (this.value = str + this.value + str);
//   }; 

// const builder = new StringBuilder('.');

// builder.toAppend('^'); 
// console.log(builder.value); // '.^'

// builder.toPrepend('^'); 
// console.log(builder.value); // '^.^'

// builder.toPad('='); 
// console.log(builder.value); // '=^.^='

//  -------------------------------с помощью класса---------------------

// class StringBuilder {
//     constructor(value) {
//        this._value = value;
//     }
 
//     get value (){
//        return this._value;
//     }
//     toAppend(str){
//        return this._value = this._value + str;
//     }
//     toPrepend(str){
//        return this._value = str + this._value;
//     }
//     toPad(str){
//        return this._value = str + this._value + str;
//     }
//  }
 
//  const builderClass = new StringBuilder(' and ');
 
//  builderClass.toAppend('Jerry'); 
//  console.log(builderClass.value); // and Jerry
 
//  builderClass.toPrepend('Tom'); 
//  console.log(builderClass.value); //Tom and Jerry
 
//  builderClass.toPad(' ! '); 
//  console.log(builderClass.value); // ! Tom and Jerry !

// ----------------------------task 3------------------
/*
 * Напиши класс Car с указанными свойствами и методами
*/

// const Car = function({ maxSpeed, running, distance }) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = running;
//     this.distance = distance;
// };

// class Car {
//     constructor({ maxSpeed = 0 }) {
      
        // Добавь свойства:
        //   - speed - для отслеживания текущей скорости, изначально 0.
        //   - maxSpeed - для хранения максимальной скорости 
        //   - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        //   - distance - содержит общий киллометраж, изначально с 0
        // }


// turnOn() {
// Добавь код для того чтобы завести автомобиль
// Просто записывает в свойство running значание true
// };
// Car.prototype.turnOn = function() {
//     return (this.running = true);
// };
  
  
// //     turnOff() {
// //       // Добавь код для того чтобы заглушить автомобиль
// //       // Просто записывает в свойство running значание false
// //     };

// Car.prototype.turnOff = function() {
//     return (this.running = false);
// };

  
// //     accelerate(spd) {
// //       // Записывает в поле speed полученное значение, при условии что
// //       // оно не больше чем значение свойства maxSpeed
// //     };

// Car.prototype.accelerate = function(spd) {
//     if (spd <= this.maxSpeed) {
//         return (this.speed = spd);
//     } else {
//         console.log("the speed is to big");
//     }
// };
  
// //     decelerate(spd) {
// //       // Записывает в поле speed полученное значение, при условии что
// //       // оно не больше чем значение свойства maxSpeed и не меньше нуля
// //     };

// Car.prototype.decelerate = function(spd) {
//     if (spd <= this.maxSpeed && spd > 0) {
//         return (this.speed = spd);
//     } else {
//         console.log("the speed is to big");
//     }
// };
  
// //     drive(hours) {
// //       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
// //       // но только в том случае если машина заведена!
// //     }


// Car.prototype.drive = function(hours) {
//     if (this.running === true) {
//         return (this.distance = hours * this.speed);
//     }
// };
  
//   const car = new Car({ maxSpeed: 100 });

// car.turnOn();
// car.accelerate(40);
// car.decelerate(90);
// console.log(car.drive(50));
// car.turnOff();


//  -------------------------------с помощью класса---------------------



/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
    constructor({ maxSpeed = 0 }) {
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.running = false;
        this.distance = 0;
      /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
    }
  
    turnOn() {
        return (this.running = true);
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
    }
  
    turnOff() {
        return (this.running = false);
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
    }
  
    accelerate(spd) {
        if (spd <= this.maxSpeed) {
            return (this.speed = spd);
        } else {
            console.log("the speed is to big");
        }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
    }
  
    decelerate(spd) {
        if (spd <= this.maxSpeed && spd > 0) {
            return (this.speed = spd);
        } else {
            console.log("the speed is to big");
        }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
    }
  
    drive(hours) {
        if (this.running === true) {
            return (this.distance = hours * this.speed);
        }
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
    }
  }
  
//   const carUseClass = new Car({ maxSpeed: 300 });

//   carUseClass.turnOn();
//   carUseClass.accelerate(50);
//   carUseClass.drive(2);
//   carUseClass.turnOff();
//   console.log(`maxSpeed: ${carUseClass.maxSpeed}, speed: ${carUseClass.speed}, running: ${carUseClass.running ? 'is driving' : "is'n driving"}, distance: ${carUseClass.distance}`);

// Car.prototype.getSpecs = function(obj) {
//     console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running ? 'is driving' : "is'n driving"}, distance: ${obj.distance}`);
// };

// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// // console.log(car.getSpecs());




// -----------------------------task 4--------------------------

/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
// car.turnOff();

// Car.prototype.getSpecs = function(obj) {
//     console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running ? 'is driving' : "is'n driving"}, distance: ${obj.distance}`);
// };

// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// // console.log(car.getSpecs());

// -----------с классом ----------------

/*
* Добавь к классу Car из {предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

// Car.getSpecs = function() {
//     console.log('static');
// };



// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
// console.log(car);
// car.getSpecs();
// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100


// -------------------------------------Task 5-------------------------

/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000


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
