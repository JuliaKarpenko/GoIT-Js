// / ---------------task 5 -------------------------
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

let arrInput = document.querySelectorAll('input:checked');


// function collectInputData(inputs) {
//     let arr = Array.from(inputs);
//     let value = arr.map(elem => elem.value);
//     return value;
// }

function collectInputData(inputs) {
    return Array.from(inputs).map(elem => elem.value);
}

// collectInputData(arrInput);
console.log(collectInputData(arrInput));

