// ---------------------Task 2 ---------------------------

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

let tasksCompletedValues = Object.values(tasksCompleted);

let maxValue = tasksCompletedValues[0];

for ( let i = 1; i < tasksCompletedValues.length; i++) {
  if (tasksCompletedValues[i] > maxValue) {
    maxValue = tasksCompletedValues[i];
  }
}

console.log(maxValue);
