// * ---------- № 1 ---------------
//   Напишите скрипт который реализует следующий функционал.
  
//   Есть кнопка с классом button, текст которой отображает 
//   кол-во раз которое по ней кликнули, обновляется при каждом клике.
// */

let button = document.querySelector('.button');

function addCounter(el) {
    let count = el.textContent;

    return function () {
        count ++;
        el.textContent = count;
        return el.textContent;
    };
}

// let counter = addCounter(button);

// button.addEventListener('click' , () => counter(button));

// let button = document.querySelector('.button');
// let count = button.value;

button.addEventListener('click' , () => button.textContent++);
