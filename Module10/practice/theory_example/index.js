// const btn = document.querySelector("#js-btn");
// const output = document.querySelector("#js-output");

// const onClick = () => {
//   // по клику сделаем fetch к сервису хранения простых JSON конструкций.
//   // По указаному URL лежит JSON с данными о пользователе
//   fetch("https://test-users-api.herokuapp.com/users/")
//     // fetch вернет промис, у которого есть метод then
//     .then(response => {
//       // в первом then всегда проверяется состояния ответа,
//       // если поле ok обьекта response правдиво (truthy) 
//       // то возвращаем response.json() - сами данные,
//       // которые можно будет использовать в следующем then
//       if (response.ok) return response.json();

//       // если if не выполнился то "кидаем" ошибку
//       throw new Error("Error fetching data");
//     })
//     .then(data => {
//       // во втором then доступны данные которые мы 
//       // вернули из первого then, результат responce.json()
//       let dataArr = data.data;
//       console.log("data inside then: ", dataArr ); // {name: "Mango", age: 2, mood: "happy"}

//       // используем JSON.stringify для преобразования обьекта в строку,
//       // чтобы повесить результат как текстовый контент в абзац
//     //   output.textContent = JSON.stringify(parseData)
//         output.innerHTML =`<div>${dataArr[0].id}</div><div>${dataArr[0].name}</div><div>${dataArr[0].age}</div>`;
//     })
//     .catch(error => {
//       // catch обрабатывает возможную ошибку запроса
//       console.error("Error: ", error);
//     });
// };

// btn.addEventListener("click", onClick);


// ============================expl 2

const btn = document.querySelector("#js-btn");
const output = document.querySelector("#js-output");

// Рассмотрим классическую ошибку при работе с асинхронным запросом
// Начинающий разработчик пытается записать "результат fetch" 
// во внешнюю пременную и использовать ее
// ниже по коду сразу за fetch
let globalVariable = ""; // пустая строка

const onClick = () => {
  // Cделаем fetch к сервису
  fetch("https://api.myjson.com/bins/k9i31")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log("data inside then: ", data); // {name: "Mango", age: 2, mood: "happy"}

      // Запишем результат в глобальную переменную
      globalVariable = data;
      // Тут все ок, данные есть в переменной
      console.log("globalVariable inside fetch: ", globalVariable);

      output.textContent = JSON.stringify(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });

  // Вне метода then данных нет, так как эта строка кода 
  // выполнится раньше чем придет ответ от сервера
  // В это время переменная globalVariable еще содержит пустую строку
  // Данные промиса доступны только в методе then самого промиса
  console.log("globalVariable outside fetch: ", globalVariable);
};

btn.addEventListener("click", onClick);
