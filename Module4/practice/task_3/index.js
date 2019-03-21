// ------------------------------Task 3------------------------------

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

const dog = {
  name: 'Yara',
  age: 3
}
let counter = 0;
const countProps = function (obj) { 
  for (key in obj) {
    counter++;
  }
  return counter;
};

console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3
