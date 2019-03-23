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

const setUsers = document.querySelector(".setUsers");
const setId = document.querySelector(".setId");
const addUserInner = document.querySelector('.addUser');
const removeUserInner = document.querySelector('.remove');
const updateUserInner = document.querySelector('.update');


let API_URL = `https://test-users-api.herokuapp.com/users/`;

function getAllUsers() {

    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        newData = data.data;
        newData.forEach(i => {
            setUsers.innerHTML = newData.reduce((acc , i) => acc + `<div class="user-inner"><p>Age: ${i.age}</p><p> Id: ${i.id}</p><p>Name: ${i.name}</p></div> `, '' );
        });
    })
    .catch( setUsers.innerHTML = `<div class="user-inner">К сожалению пользователей нет</div>`);
}

function getUserById(id) {
    let API_URL = `https://test-users-api.herokuapp.com/users/${id}`;
    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        newData = data.data;
        setId.innerHTML =  `<div class="user-inner"><p>Age: ${newData.age}</p><p> Id: ${newData.id}</p><p>Name: ${newData.name}</p></div>`;
    })
    .catch( setId.innerHTML = "К сожалению пользователей нет");
}

function addUser(name, age) {
    fetch('https://test-users-api.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({name: name, age: age}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        newData = data.data;
        newData.forEach(i => {
            addUserInner.innerHTML = newData.reduce((acc , i) => acc + `<div class="user-inner"><p>Age: ${i.age}</p><p> Id: ${i.id}</p><p>Name: ${i.name}</p></div> `, '' );
        });
    })
    .catch( addUserInner.innerHTML = `<div class="user-inner">К сожалению пользователей нет</div>`);
}

function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "DELETE"
    })
    .then(() => console.log('success'))
    .catch(error => console.log('ERROR' + error));

    fetch(API_URL, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {
        newData = data.data;
        newData.forEach(i => {
            removeUserInner.innerHTML = newData.reduce((acc , i) => acc + `<div class="user-inner"><p>Age: ${i.age}</p><p> Id: ${i.id}</p><p>Name: ${i.name}</p></div> `, '' );
        });
    })
    .catch( removeUserInner.innerHTML = `<div class="user-inner">К сожалению пользователей нет</div>`);
}

function updateUser(id, name, age) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({name: name, age: age}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    fetch(`https://test-users-api.herokuapp.com/users/`, {
        method: "Get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        newData = data.data;
        newData.forEach( i => {
            updateUserInner.innerHTML = newData.reduce((acc , i) => acc + `<div class="user-inner"><p>Age: ${i.age}</p><p> Id: ${i.id}</p><p>Name: ${i.name}</p></div> `, '' );
        })
        
    })
    .catch( updateUserInner.innerHTML = `<div class="user-inner">К сожалению пользователей нет</div>`);

}



btnGetUsers.addEventListener("click", getAllUsers);
btnGetId.addEventListener("click", () => getUserById('5c961e32c2fbc500140de847'));
btnGetAdd.addEventListener("click", () => addUser('Optimus Prime', 32));
btnGetRemove.addEventListener("click", () => removeUser('5c96319ac2fbc500140de851'));
btnGetUpdate.addEventListener("click", () => updateUser('5c961e32c2fbc500140de847', 'BumblebeeNew', 25));


