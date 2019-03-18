
/* ---------- № 4 ---------------
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

let button = document.querySelector('.btn');
let result = document.querySelector('.result');

button.addEventListener('click', function(e) {
    e.preventDefault();
    let checkedInputs = document.querySelectorAll('input[name="option"]:checked');
    setNewValue(checkedInputs, resultValue);
});

function setNewValue (arr, callback) {
    return (result.textContent = "Result: " + callback(arr));
}

function resultValue(arr) {
    let newArr = Array.from(arr);
    return newArr.reduce((acc, i) => acc + i.value, '');
}
