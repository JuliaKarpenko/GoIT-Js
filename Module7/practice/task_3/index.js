// ---------------task 3 -------------------------

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
let list = document.querySelector('.list');
let mark = elements.reduce((acc, i) => acc + `<li>${i}</li>`, "");
list.innerHTML = mark;