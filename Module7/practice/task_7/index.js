// ---------------task 7 -------------------------

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

function randomColor() {
    let result = '';
    let max = 255;
    let a = Math.floor(Math.random() * (255 + 1) );
    let b = Math.floor(Math.random() * (255 + 1) );
    let c = Math.floor(Math.random() * (255 + 1) );
    return result = `rgb(${a}, ${b}, ${c})`;
}
console.log(randomColor());

let userInput = +prompt("Enter a number");

function randomColor() {
    let result = '';
    let max = 255;
    return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
}
console.log(randomColor());

function createBoxes(num) {
    let container = document.createElement('div');
    let mainDiv = document.querySelector('#root');
    let i = 1;
    let width = 30;
    let height = 30;

    do {
        // let divs = document.createElement("div");
        // divs.style.backgroundColor = randomColor();

        // divs.style.width = width +"px";
        // divs.style.height = height + "px" ;

        container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
        i++;
        width += 10;
        height += 10;

    } while (i <= num);

    mainDiv.append(container);
}

createBoxes(userInput);

// -----OR----

// let root = document.querySelector('#root');
// root.setAttribute('style', ' display: grid; grid-template-columns: repeat(4, 1fr)');
// function createBoxes(mun, color) {
//     for (let i = 0; i < mun; i++){
//         let dIv = document.createElement('div');
//         let size = 30 + i * 10;
//         let red = color(0, 255);
//         let green = color(0, 255);
//         let blue = color(0, 255);
//         dIv.setAttribute('style', `background-color: rgb(${red},${green},${blue}); height: ${size}px; width: ${size}px`);
//         root.append(dIv);
//     }
//     console.log(root);
// }

// function randomColor(min, max) {
//     const minValue = min;
//     let maxValue = max;
//     return Math.floor(Math.random()* (maxValue - minValue + 1)) + minValue;
// }

// createBoxes( 5, randomColor);