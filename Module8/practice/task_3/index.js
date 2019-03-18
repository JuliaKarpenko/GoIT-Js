/* ---------- № 3 ---------------
Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/

let btnAdd = document.querySelector('button[data-action="add"]');
let btnSub = document.querySelector('button[data-action="sub"]');
let span = document.querySelector('.value');

// btnAdd.addEventListener('click' , () => span.textContent++);
// btnSub.addEventListener('click' , () => span.textContent--);

// with class
class Counter {
  constructor(onChange) {
    this.value = 0;
    this.onChange = onChange;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    }

  increment () {
    this.value++;
    this.onChange(this.value);
  }

  decrement () {
    this.value-=1;
    this.onChange(this.value);
  }

}

function changeValue(value) {
  span.textContent = value;
}

const counter = new Counter(changeValue);

btnAdd.addEventListener('click', counter.increment);
btnSub.addEventListener('click', counter.decrement);

