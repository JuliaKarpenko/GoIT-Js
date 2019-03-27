// Модуль 11 - Домашнее задание
/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
  {
    size: 13,
    color: 'white',
    release_date: 2015,
    price: 28000,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    flag: false,
  },
];

const btnFilter = document.querySelector('button[type="submit"]');
const btnReset = document.querySelector('button[type="reset"]');

const filterObj= { 
    size: [], 
    color: [], 
    release_date: [] 
};

laptops.forEach(el => el.flag = true);
console.log(laptops);


function getInputsResult() {
    
    let regSize = /^\d{2}$/;
    let regColor = /^\D+$/;
    let regReleaseDate = /\d{4}/;
    let inputsChecked = document.querySelectorAll('input:checked');
    inputsChecked.forEach(element => {
        if (regSize.test(element.value)) {
            filterObj.size.push(+element.value);

        } else if (regColor.test(element.value)) {
            filterObj.color.push(element.value);

        } else if (regReleaseDate.test(element.value)){
            filterObj.release_date.push(+element.value);
        }
    });
    console.log(filterObj);
} 

function setAttr(arr) {
    arr.forEach(element => { element.flag = false;});

    arr.filter(element => {
        return (filterObj.size.length > 0 ? filterObj.size.includes(element.size) : true);
     }).filter(element => {
        return (filterObj.color.length > 0 ? filterObj.color.includes(element.color) : true);
    }).filter(element => {
        return (filterObj.release_date.length > 0 ?filterObj.release_date.includes(element.release_date) : true);
    }).forEach(element => { element.flag = true;});
}

function displaySelection() {
    const container = document.querySelector('.js-result');
    const source = document.querySelector('#template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const result = laptops.reduce((acc, i) => acc + template(i), '');
    container.innerHTML = result;
}

function filter(event) {
    event.preventDefault();

    for (const key in filterObj) {
        filterObj[key] = [];
    }
    
    getInputsResult();
    setAttr(laptops);
    displaySelection();
}

function reset() {
    laptops.forEach(element => { element.flag = false;});
    displaySelection();
}



btnFilter.addEventListener('click', filter);
btnReset.addEventListener('click', reset);