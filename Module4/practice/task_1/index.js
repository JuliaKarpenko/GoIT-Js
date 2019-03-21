// ============Дополнительный задание №1 ==========================
/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

//1 - добавляет поле mood со значением 'happy'
user.mood ='happy';
console.log('user', user);

//2 - заменяет значение hobby на 'javascript'
user.hobby = 'javascript';
console.log('user', user);

//3 - удаляет свойство premium
delete user.premium;
console.log('user', user);

//4 - выводит содержимое объекта user в формате ключ:значение
// используя цикл for...in

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

//5 - выводит содержимое объекта user в формате ключ:значение
// используя Object.keys и for...of

const keys = Object.keys(user);
console.log(keys);

for(const key of keys) {
  console.log(`${key}:, ${user[key]}`);
}
