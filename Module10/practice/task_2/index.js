/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
// const API_URL = "";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
    evt.preventDefault();

    let API_URL = `https://api.github.com/users/${input.value}`;
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {console.log(data);
        result.innerHTML = `<p>Avatar: <img src="${data.avatar_url}" style="width:100px"/></p>
        <p>Username: ${data.login}</p><p>Bio: ${data.bio}</p>
        <p>Public repos: ${data.public_repos}</p>
        `;
        })
        .catch( result.innerHTML = "Такого имени нет");
}


