/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

function getUserById(evt) {
    evt.preventDefault();
    let API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${Number(input.value)}`;
    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = data.reduce((acc, i) => acc + `<div><p>Body: ${i.body}</p></div><div><p> Id: ${i.id}</p></div><div><p>Title: ${i.title}</p></div><div><p>UserId: ${i.userId}</p></div> --------`,'');
    })
    .catch( result.innerHTML = "Такого id нет");

}

form.addEventListener("submit", getUserById);
