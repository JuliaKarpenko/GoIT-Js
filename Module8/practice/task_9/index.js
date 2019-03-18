// ------------- 9 ---------------

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const BUTTON  = document.querySelector('.btn');
const MODAL_HIDDEN  = document.querySelector('.modal-hidden');
const CLOSE = document.querySelector('[data-action="close-modal"]');
const WRAPPER = document.querySelector('.js-modal-backdrop');
const MODAL = document.querySelector('.modal-content');


function openModal (el, className) {
  el.classList.remove(className);
}

function closeModal (el, className) {
  el.classList.add(className);
}

BUTTON.addEventListener('click', () => openModal(MODAL_HIDDEN, 'modal-hidden'));
CLOSE.addEventListener('click', () => closeModal(MODAL_HIDDEN, 'modal-hidden'));

WRAPPER.addEventListener('click', function (e) {
  console.log(e.target);
  if(e.target !== MODAL) {
    closeModal(MODAL_HIDDEN, 'modal-hidden');
  }
});
