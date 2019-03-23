/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

const form = document.querySelector(".search-form");
const userTable = document.querySelector(".user-table");

form.addEventListener("submit", fetchUsers);

/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
    evt.preventDefault();
    let API_URL = `https://jsonplaceholder.typicode.com/users/`;
    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    userTable.innerHTML = data.reduce((acc, i) => acc + `<tr><td>${i.name}</td><td>${i.email}</td><td>${i.address.city}</td><td>${i.website}</td><td>${i.company.name}</td></tr>`,'');
    })
    .catch( result.innerHTML = "Error");

}