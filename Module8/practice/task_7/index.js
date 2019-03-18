
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
    */

let inputParent = document.querySelector('.input-list');

function getResult(e) {
  e.target.addEventListener('blur', verification);
}

function verification (event) {
  const target = event.target;
    if (target.value.length === +target.dataset.length) {
        target.classList.remove("invalid");
      target.classList.add("valid");
    } else {
      target.classList.remove("valid");
      target.classList.add("invalid");
    }
}

inputParent.addEventListener('click', getResult);