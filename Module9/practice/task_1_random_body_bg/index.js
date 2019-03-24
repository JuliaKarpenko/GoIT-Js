
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];
  
  const BTN_START = document.querySelector('button[data-action="start"]');
  const BTN_STOP = document.querySelector('button[data-action="stop"]');
  const BODY = document.body;
  console.log(BODY);

function getRandomColor() {
    let random = Math.floor(Math.random() * colors.length);
    BTN_START.setAttribute("disabled", "disabled");  
    return (BODY.style.backgroundColor = colors[random]);
}

function ChangeColor () { 
    let myInt = setInterval(getRandomColor, 1000);

    BTN_STOP.addEventListener('click', function() {
        clearInterval(myInt);
        BTN_START.removeAttribute ("disabled");
    });   
}

BTN_START.addEventListener('click', ChangeColor);
