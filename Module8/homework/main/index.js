/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
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

const MAIN_BLOCK = document.querySelector('.js-image-gallery');


document.addEventListener("DOMContentLoaded", function () {
    const FULL_VIEW = document.createElement('div');
    FULL_VIEW.classList.add('fullview');
    let fullViewImgBlock = `<li><img class="fullViewImg" style='height: 430px' src=${galleryItems[0].src} data-preview=${galleryItems[0].preview} data-fullview=${galleryItems[0].fullview} alt='${galleryItems[0].alt}'></li>`;
    FULL_VIEW.innerHTML = fullViewImgBlock;
    MAIN_BLOCK.appendChild(FULL_VIEW);
    FULL_VIEW.style.listStyleType = "none";
    FULL_VIEW.style.textAlign = "center";
    
    const PREVIEW = document.createElement('ul');
    PREVIEW.classList.add('preview');
    PREVIEW.style.display= "flex";
    PREVIEW.style.justifyContent = "center";
    PREVIEW.style.padding = "0";


    let previewList = galleryItems.reduce((acc, i) => acc + `<li style='margin: 12px; list-style-type: none;'><img style='width:220px; height: 112px' src=${i.src} data-preview=${i.preview} data-fullview=${i.fullview}  alt='${i.alt}' ></li>`, '');
    PREVIEW.innerHTML = previewList;
    MAIN_BLOCK.appendChild(PREVIEW);

    let fullViewImg = document.querySelector('.fullViewImg');
    MAIN_BLOCK.addEventListener('click', function(e) {
      if( e.target.nodeName !== "IMG") return;
        fullViewImg.src = e.target.dataset.fullview;
    });
});


