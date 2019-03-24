
/*---------------6----------------------
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

let parentElem = document.querySelector('.list');

parentElem.addEventListener("click", () => event.target.parentNode.remove());
// parentElem.addEventListener("click", () => removeElem(parentElem));

// function removeElem(e) {
//     const target = event.target;
//     if( target.nodeName !== "BUTTON") return;
//     target.parentNode.remove();
// }
