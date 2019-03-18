/*---------------5----------------------
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

let parentElem = document.querySelector('.images');

parentElem.addEventListener("click", () => alert(event.target.src) );

// parentElem.addEventListener("click", getImgScr);

// function getImgScr(e) {
//     e.preventDefault();
//     return alert(event.target.src);
//     // const target = event.target;
//     // let result = target.src;
//     // alert(result);
// }