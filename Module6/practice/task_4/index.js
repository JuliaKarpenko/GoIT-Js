// -----------------------------task 4--------------------------

/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
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

Car.getSpecs = function() {
    console.log('static');
};



const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);
console.log(car);
// car.getSpecs();
Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

