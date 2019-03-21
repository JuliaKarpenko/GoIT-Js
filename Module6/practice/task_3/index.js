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
  
  const carUseClass = new Car({ maxSpeed: 300 });

  carUseClass.turnOn();
  carUseClass.accelerate(50);
  carUseClass.drive(2);
  carUseClass.turnOff();
  console.log(`maxSpeed: ${carUseClass.maxSpeed}, speed: ${carUseClass.speed}, running: ${carUseClass.running ? 'is driving' : "is'n driving"}, distance: ${carUseClass.distance}`);

Car.prototype.getSpecs = function(obj) {
    console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running ? 'is driving' : "is'n driving"}, distance: ${obj.distance}`);
};

// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// console.log(car.getSpecs());

