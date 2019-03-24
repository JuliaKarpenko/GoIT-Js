/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 2.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
 * Вспомогательные функции
 */

/*
 * Обновляет поле счетчика новым значением при вызове
 * аргумент time это кол-во миллисекунд
 */

function getFormattedTime(time) {
  let myDate = new Date(time);
  let minutes = myDate.getMinutes();
  let second = Math.abs(Math.floor(myDate.getSeconds()));
  let millisecond = Math.abs(Math.floor(myDate.getMilliseconds() / 100) % 60);
  if (second.toString().length == 1) second = '0' + second;
  if (minutes.toString().length == 1) minutes = '0' + minutes;

  return `${minutes}:${second}.${millisecond}`;
}

function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #2
  elem.textContent = getFormattedTime(time);
}

function startTimer() {
  timer.startTime = Date.now();

  if (timer.id != null) {
    clearInterval(timer.id);
  }

  timer.id = setInterval(function () {
    timer.deltaTime = (Date.now() - timer.startTime);
    updateClockface(clockface, timer.deltaTime);
  }, 100);
  
}

stopBtn.addEventListener('click', function () {
  console.log("clear called");
  clearInterval(timer.id);
});

startBtn.addEventListener('click', startTimer);

/*
 * Подсветка активной кнопки
 */
function setActiveBtn(target) {
  if (target.classList.contains('active')) {
    return;
  }

  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');

  target.classList.add('active');
}