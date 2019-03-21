
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
    */

// let inputParent = document.querySelector('.input-list');

// function getResult(e) {
//   e.target.addEventListener('blur', verification);
// }

// function verification (event) {
//   const target = event.target;
//     if (target.value.length === +target.dataset.length) {
//         target.classList.remove("invalid");
//       target.classList.add("valid");
//     } else {
//       target.classList.remove("valid");
//       target.classList.add("invalid");
//     }
// }

// inputParent.addEventListener('click', getResult);

// -------------or-------------

// const x = document.querySelector('.input-list');

// x.addEventListener('focusout', checkInput);

// function checkInput(e) {
//     let y = e.target.value;
//     ['valid', 'invalid'].forEach((k)=> e.target.classList.remove(k));
//     y.length === Number(e.target.dataset.length) ? e.target.classList.add('valid') : e.target.classList.add('invalid');
// }


// -------------------or-------------------
const inputList = document.querySelector('.input-list');
  const inputs = document.querySelectorAll('input');

  let inputType = () => {


    inputs.forEach(el => {
      if(el.value.length > 0){
        if (Number(el.dataset.length) === el.value.length){
          el.classList.add('valid');
        }else
          el.classList.add('invalid');
      }
      })

  };

  inputList.addEventListener('focusout', inputType);