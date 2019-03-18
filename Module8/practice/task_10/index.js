// ------------- 10 ---------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const MAIN_MENU  = document.querySelector('.js-menu');
let link = document.querySelectorAll('.menu-link');

MAIN_MENU.addEventListener('click', function(e) {
  e.preventDefault();

  link.forEach(elm => {
    elm.classList.remove('active');
  });
  e.target.classList.add('active');

});
