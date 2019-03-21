'use strict';

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

const galleryItems = [{
        src: '../../../img/img1.jpg',
        preview: '../../../img/img1.jpg',
        fullview: '../../../img/img1.jpg',
        alt: "alt text 1"
    },
    {
        src: '../../../img/img2.jpg',
        preview: '../../../img/img2.jpg',
        fullview: '../../../img/img2.jpg',
        alt: "alt text 2"
    },
    {
        src: '../../../img/img3.jpg',
        preview: '../../../img/img3.jpg',
        fullview: '../../../img/img3.jpg',
        alt: "alt text 3"
    },
    {
        src: '../../../img/img4.jpg',
        preview: '../../../img/img4.jpg',
        fullview: '../../../img/img4.jpg',
        alt: "alt text 4"
    },
    {
        src: '../../../img/img5.jpg',
        preview: '../../../img/img5.jpg',
        fullview: '../../../img/img5.jpg',
        alt: "alt text 5"
    },
    {
        src: '../../../img/img6.jpg',
        preview: '../../../img/img6.jpg',
        fullview: '../../../img/img6.jpg',
        alt: "alt text 6"
    },
];

class Gallery{
  constructor(items, parentNode, defaultActiveItem){
  this.items = items,
  this.parentNode = parentNode,
  this.defaultActiveItem = defaultActiveItem;
  }

 get createNewGallery(){
  let full = document.createElement('div');
  full.classList.add('fullview');
  let fullImg = `<img class='big' style= 'width:100%' src=${this.items[this.defaultActiveItem].fullview} >`;
  full.innerHTML= fullImg;
  this.parentNode.appendChild(full);
 
    let preview = document.createElement('ul');
    preview.classList.add('preview');
    let addImage = this.items.reduce((acc ,i) => acc + `<li><img style= 'width:100% height = 100px 'src=${i.preview} data-fullview = ${i.fullview} alt=${i.alt}> </li>`,"" );
    preview.innerHTML= addImage;
    this.parentNode.appendChild(preview);
  }
  get clicker(){
  this.parentNode.addEventListener('click', function(e){
      const bigImg = document.querySelector('.big');
      if(e.target.nodeName !== "IMG") return;
      bigImg.src = e.target.dataset.fullview;
    });
    }
  }


const gallery = new Gallery(
  galleryItems,
  document.querySelector('.image-gallery'),
  1
);

gallery.createNewGallery;
gallery.clicker;