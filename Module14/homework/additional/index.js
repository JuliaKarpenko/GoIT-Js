const imagesList = [
  'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_sx.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-6.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_REV.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/fronte-copia.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-4.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/retro-copia.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/trequarti.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-7.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/21_riserblog-yamaha-mt-10-naked-eicma-2015-10.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/36_riserblog-yamaha-mt-07-fluo-3.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-3.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-6.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-7.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-1.jpg',
];

// У вас есть массив с картинками imagesList

// Нам нужно загружать 3 картинки после чего рендерить их в галерею.
// После того как картинки будут загружены и отрендерены нужно сделать паузу в 2 секунды
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// И так до конца массива

// В работе используем только нативный джс


// const gallery = document.querySelector('.gallery');
// const PAUSE = 2000;
// let newList = imagesList.splice(0, 3);
// gallery.innerHTML = newList.reduce((acc, index) => acc + `<div class="wrapper" ><img src="${index}" alt="img" style="height: 100px; width: auto"></img></div>`, '');

// const renderImage = (arr) => {
//   let sliceElem = arr.splice(0, 3);

//   newList = newList.concat(sliceElem);
//   gallery.innerHTML = newList.reduce((acc, index) => acc + `<div class="wrapper" ><img class="img" src="${index}" alt="img"></img></div>`, '');
// };

// const getItem = setInterval(function() {
//   renderImage(imagesList); 
//   if( imagesList.length == 0 ) {
//     clearInterval(getItem);
//   }
// }, 2000);

const gallery = document.querySelector('.gallery');
const PAUSE = 2000;
let newList = imagesList.splice(0, 3);
gallery.innerHTML = newList.reduce((acc, index) => acc + `<div class="wrapper" ><img src="${index}" alt="img" style="height: 100px; width: auto"></img></div>`, '');

const renderImage = (arr) => {
  let sliceElem = arr.splice(0, 3);
  newList = newList.concat(sliceElem);
  gallery.innerHTML = newList.reduce((acc, index) => acc + `<div class="wrapper" ><img class="img" src="${index}" alt="img"></img></div>`, '');
};

const fetchImagesAsync = (arr) => {
  return new Promise(() => {
    const getItem = setInterval(function () {
      renderImage(arr);
      if (arr.length == 0) {
        clearInterval(getItem);
      }
    }, 2000);
  });
};


fetchImagesAsync(imagesList);