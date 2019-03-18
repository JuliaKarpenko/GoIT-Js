// ------------- 8 ---------------
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно отображаться в p.input-value 
*/

let message = document.querySelector('.message');
let input = document.querySelector('.input');
let inputValue = document.querySelector('.input-value');


input.addEventListener('focus', () => message.textContent= "Input is in focus!");

input.addEventListener('keypress', () => inputValue.textContent = input.value);