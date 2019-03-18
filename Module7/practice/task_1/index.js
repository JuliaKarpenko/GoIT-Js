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
let list = document.querySelectorAll('.categories>li');
let children;
for (let i = 0; i < list.length; i++) {
    children = list[i].firstChild.textContent;
    console.log('Категория:', children);

    console.log('Количество вложенных li:', list[i].childNodes[1].childElementCount);
    console.log('Количество вложенных li:', list[i].children[0].childElementCount);
    
    console.log('Количество вложенных li:', list[i].children[0].children.length);

}
list.forEach(list => console.log(`Categories: ${list.firstChild.textContent} Length: ${list.children[0].children.length}`));
