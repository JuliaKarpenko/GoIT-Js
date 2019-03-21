// *
//   Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */

let list = document.querySelector('.list');
console.log(list);
let firstChild = list.firstElementChild;
console.log(firstChild);
firstChild.style.color = 'red';
let lastChild = list.lastElementChild;
console.log(lastChild);
lastChild.style.color = 'blue';