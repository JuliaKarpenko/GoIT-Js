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

class StringBuilder {
    constructor(value) {
       this._value = value;
    }
 
    get value (){
       return this._value;
    }
    toAppend(str){
       return this._value = this._value + str;
    }
    toPrepend(str){
       return this._value = str + this._value;
    }
    toPad(str){
       return this._value = str + this._value + str;
    }
 }
 
 const builderClass = new StringBuilder(' and ');
 
 builderClass.toAppend('Jerry'); 
 console.log(builderClass.value); // and Jerry
 
 builderClass.toPrepend('Tom'); 
 console.log(builderClass.value); //Tom and Jerry
 
 builderClass.toPad(' ! '); 
 console.log(builderClass.value); // ! Tom and Jerry !
