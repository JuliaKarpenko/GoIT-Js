/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 

    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.

*/

const btnGetUsers = document.querySelector("#js-btn-get-users");
const btnGetId = document.querySelector("#js-btn-get-id");
const btnGetAdd = document.querySelector("#js-btn-add");
const btnGetRemove = document.querySelector("#js-btn-remove");
const btnGetUpdate = document.querySelector("#js-btn-update");


// const setUsers = document.querySelector("#");
// const setId = document.querySelector("#");
// const setAdd = document.querySelector("#");
// const setUsers = document.querySelector("#");

function getAllUsers() {
    console.log('getAllUsers');
}

function getUserById() {
    console.log('getUserById');
}

function addUser() {
    console.log('addUser');
}

function removeUser() {
    console.log('removeUser');
}

function updateUser() {
    console.log('updateUser');
}



btnGetUsers.addEventListener("click", getAllUsers);
btnGetId.addEventListener("click", getUserById);
btnGetAdd.addEventListener("click", addUser);
btnGetRemove.addEventListener("click", removeUser);
btnGetUpdate.addEventListener("click", updateUser);


