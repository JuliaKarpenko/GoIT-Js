/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p> 
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
  
    <div class="stopwatch">
    <p class="time js-time">00:00.0</p> 
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

    */
let clockface = document.querySelector(".js-time");
let startBtn = document.querySelector(".js-start");
let resetBtn = document.querySelector(".js-reset");
let lapBtn = document.querySelector(".js-take-lap");
let laplist = document.querySelector(".js-laps");
resetBtn.setAttribute("disabled", "disabled");

const timer = {
  startTime: null,
  deltaTime: null,
  interval: null
};

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

function toggleAttr(elem) {
  if (elem.dataset.action === "true") {
    elem.dataset.action = !elem.dataset.action;
  } else {
    elem.setAttribute("data-action", true);
  }
  elem.innerHTML = elem.dataset.action === 'true' ? "Pause" : "Continue";
}

function myTimer() {
  if (!timer.interval) {
    timer.interval = setInterval(function () {
      timer.deltaTime = (Date.now() - timer.startTime);
      updateClockface(clockface, timer.deltaTime);
    }, 100);
  }
}

function pauseMyTimer() {
  if (timer.interval) {
    clearInterval(timer.interval);
  }
  timer.interval =  null;
}

function startTimer() {
  timer.startTime === null ? timer.startTime = Date.now():
  (timer.startTime = (Date.now() - timer.deltaTime));
  toggleAttr(startBtn);

  startBtn.dataset.action === 'true' ? myTimer() : pauseMyTimer();
  resetBtn.removeAttribute('disabled');
}

function reset() {
  if (timer.interval) {
    clearInterval(timer.interval);
  }
  timer.interval = null;
  timer.startTime = null;
  timer.deltaTime = null;
  timer.startTime = Date.now();
  clockface.innerHTML = `00:00.0`;
  startBtn.innerHTML = "Start";
  startBtn.removeAttribute('data-action');
  
  let resultList = document.querySelectorAll('.js-laps li');
  resultList.forEach(element => {
    element.innerHTML= '';
  });

}

let list;
function saveCurrentTime() {
  let currentTime = [];
  list = document.createElement('li');
  laplist.appendChild(list);
  let result = `${clockface.innerHTML}`;
  currentTime.push(result);
  list.innerHTML = currentTime;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', saveCurrentTime);

// Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
// в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x