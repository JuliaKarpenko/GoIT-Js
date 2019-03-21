//============== module 5 # 9 =====================================
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/
// let allGuestsActive = (guests) => guests.every(el => el.isActive)

// const guestsA = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: false },
//    { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: true },
//    { name: "Ajax", isActive: true }
// ];
// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status);


const numbers = [1, 2, 3];

 const doubledNumbers = numbers.map(num => num * 2);

 console.log(doubledNumbers);

 const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

 const tags = tweets.reduce(
  (acc, tweet) => tweet.tags ? acc.concat(tweet.tags) : acc,
  []
);

console.log(tags); //["js", "nodejs", "html", "css", "html", 
// "js", "nodejs", "css", "react", "js", "nodejs", "react"]