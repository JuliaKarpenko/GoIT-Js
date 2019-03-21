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


function createMovieCard() {
    let movie = document.querySelector('.movie')
    let div = document.createElement("div");
    movie.append(div);
    div.innerHTML += '<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image"><div class="movie__body"><h2 class="movie__title">The Godfather</h2><p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p><p class="movie__date">Released: 1972-03-14</p><p class="movie__rating">Rating: 8.6</p></div>';
}  
createMovieCard();

function createMovieCard() {
    let movie = document.querySelector('.movie');
    let elem = document.createElement("img");
    elem.classList.add('movie__image');
    elem.src = "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg";
    elem.alt = 'movie__image';
    movie.append(elem);

    let elemText = document.createElement('div');
    elemText.classList.add('movie__body');

    let elemH2 = document.createElement('h2');
    elemH2.classList.add('movie__title');
    elemH2.innerText = 'The Godfather';
    elemText.append(elemH2);

    let elemp1 = document.createElement('p');
    elemp1.classList.add('movie__description');
    elemp1.innerText = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
    elemText.append(elemp1);

    let elemp2 = document.createElement('p');
    elemp2.classList.add('movie__datae');
    elemp2.innerText = 'Released: 1972-03-14';
    elemText.append(elemp2);

    let elemp3 = document.createElement('p');
    elemp3.classList.add('movie__rating');
    elemp3.innerText = 'Rating: 8.6';
    elemText.append(elemp3);


    movie.append(elemText);
}  
createMovieCard();
