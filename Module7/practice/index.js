'use strict';

// // Создадим еще один li и вставим его в конец списка
// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "item 4";

// // const nav = document.querySelector(".nav");
// // nav.appendChild(item);

// // // Создадим заголовок и вставим его в container перед списком
// // const heading = document.createElement("h1");
// // heading.textContent = "Nav heading";

// // const container = document.querySelector(".container");
// // container.insertBefore(heading, nav);


// let title = document.createElement('h2');
// title.classList.add('red-text');
// title.textContent = 'Hello';
// let div = document.querySelector('.first');
// div.append(title);
// div.innerHTML += '<ul class = "red"> <li>hi</li><li>bye</li></ul>';
// let mylist = document.querySelector('.red');
// mylist.style.color = 'red';
// let arterend =  document.createElement('div');
// arterend.textContent = "i'm afterend, use insertAdjacentElement"

// mylist.insertAdjacentHTML("beforebegin", "<p>i'm beforebegin</p>");
// mylist.insertAdjacentHTML("afterbegin", "<p>i'm afterbegin</p>");
// mylist.insertAdjacentHTML("beforeend", "<p>i'm beforeend</p>");
// mylist.insertAdjacentElement("afterend", arterend);

// ---------------task 1--------------------------

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let list = document.querySelectorAll('.categories>li');
// let children;
// for (let i = 0; i < list.length; i++) {
//     children = list[i].firstChild.textContent;
//     console.log('Категория:', children);

//     console.log('Количество вложенных li:', list[i].childNodes[1].childElementCount);
//     console.log('Количество вложенных li:', list[i].children[0].childElementCount);
    
//     console.log('Количество вложенных li:', list[i].children[0].children.length);

// }
// list.forEach(list => console.log(`Categories: ${list.firstChild.textContent} Length: ${list.children[0].children.length}`));

// ---------------task 2 -------------------------

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// let list = document.querySelector('.list');
// console.log(list);
// let firstChild = list.firstElementChild;
// console.log(firstChild);
// firstChild.style.color = 'red';
// let lastChild = list.lastElementChild;
// console.log(lastChild);
// lastChild.style.color = 'blue';

// ---------------task 3 -------------------------

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// let list = document.querySelector('.list');
// let mark = elements.reduce((acc, i) => acc + `<li>${i}</li>`, "");
// list.innerHTML = mark;

// ---------------task 4 -------------------------

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// let list = document.querySelector('.gallery');
// let mark = galleryItems.reduce((acc, i) => acc + `<li><img class="sizes" src ="${i.url} alt = "${i.alt}"></li>`, "");
// list.innerHTML = mark;
// const sizes = document.querySelectorAll('.sizes');
// sizes.forEach(i => i.style.width = "300px");
  

// ---------------task 5 -------------------------
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let arrInput = document.querySelectorAll('input:checked');


// // function collectInputData(inputs) {
// //     let arr = Array.from(inputs);
// //     let value = arr.map(elem => elem.value);
// //     return value;
// // }

// function collectInputData(inputs) {
//     return Array.from(inputs).map(elem => elem.value);
// }

// // collectInputData(arrInput);
// console.log(collectInputData(arrInput));



// ---------------task 6 -------------------------

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

{/* <div class="movie">
    <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">

    <div class="movie__body">
        <h2 class="movie__title">The Godfather</h2>
        <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
        would-be killers, launching a campaign of bloody revenge.</p>

        <p class="movie__date">Released: 1972-03-14</p>
        <p class="movie__rating">Rating: 8.6</p>
    </div>
</div> */}


// function createMovieCard() {
//     let movie = document.querySelector('.movie')
//     let div = document.createElement("div");
//     movie.append(div);
//     div.innerHTML += '<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image"><div class="movie__body"><h2 class="movie__title">The Godfather</h2><p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p><p class="movie__date">Released: 1972-03-14</p><p class="movie__rating">Rating: 8.6</p></div>';
// }  
// createMovieCard();

// function createMovieCard() {
//     let movie = document.querySelector('.movie');
//     let elem = document.createElement("img");
//     elem.classList.add('movie__image');
//     elem.src = "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg";
//     elem.alt = 'movie__image';
//     movie.append(elem);

//     let elemText = document.createElement('div');
//     elemText.classList.add('movie__body');

//     let elemH2 = document.createElement('h2');
//     elemH2.classList.add('movie__title');
//     elemH2.innerText = 'The Godfather';
//     elemText.append(elemH2);

//     let elemp1 = document.createElement('p');
//     elemp1.classList.add('movie__description');
//     elemp1.innerText = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     elemText.append(elemp1);

//     let elemp2 = document.createElement('p');
//     elemp2.classList.add('movie__datae');
//     elemp2.innerText = 'Released: 1972-03-14';
//     elemText.append(elemp2);

//     let elemp3 = document.createElement('p');
//     elemp3.classList.add('movie__rating');
//     elemp3.innerText = 'Rating: 8.6';
//     elemText.append(elemp3);


//     movie.append(elemText);
// }  
// createMovieCard();


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

// function randomColor() {
//     let result = '';
//     let max = 255;
//     let a = Math.floor(Math.random() * (255 + 1) );
//     let b = Math.floor(Math.random() * (255 + 1) );
//     let c = Math.floor(Math.random() * (255 + 1) );
//     return result = `rgb(${a}, ${b}, ${c})`;
// }
// console.log(randomColor());

// let userInput = +prompt("Enter a number");

// function randomColor() {
//     let result = '';
//     let max = 255;
//     return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
// }
// console.log(randomColor());

// function createBoxes(num) {
//     let container = document.createElement('div');
//     let mainDiv = document.querySelector('#root');
//     let i = 1;
//     let width = 30;
//     let height = 30;

//     do {
//         // let divs = document.createElement("div");
//         // divs.style.backgroundColor = randomColor();

//         // divs.style.width = width +"px";
//         // divs.style.height = height + "px" ;

//         container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
//         i++;
//         width += 10;
//         height += 10;

//     } while (i <= num);

//     mainDiv.append(container);
// }

// createBoxes(userInput);

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