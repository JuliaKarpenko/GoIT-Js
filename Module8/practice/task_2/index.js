/* ---------- № 2 ---------------
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
*/

let firstInput = document.querySelector("#input1");
let secondInput = document.querySelector("#input2");
let button = document.querySelector('button[data-action="add"]');
let result = document.querySelector('.result');

function summ(el1, el2) {
    result.textContent = +el1.value + (+el2.value);
    return result.textContent;
}

button.addEventListener('click', () => summ(firstInput, secondInput));
