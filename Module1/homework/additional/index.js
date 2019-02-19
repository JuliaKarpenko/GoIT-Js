
/* Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

let sharm = 15;
let hurgada = 25;
let taba = 6;
const error = 'Error';
const canselMessage = 'We are so sorry, come again!'

let userEnter = prompt('Enter a number');
let isInteger = Number.isInteger(Number.parseInt(userEnter));


if (isInteger === true && userEnter > 0 ) {

  if (userEnter <= sharm && userEnter < hurgada) {
    confirm('there is a place in the group sharm. Do you want to choose this gooup?');
  } else if (userEnter <= hurgada) {
    confirm('there is a place in the group hurgada. Do you want to choose this gooup?');
  } else if (userEnter <= taba && userEnter < sharm) {
    confirm('there is a place in the group taba. Do you want to choose this gooup?');
  }

} else if (userEnter == null) {
  alert(canselMessage);
} else {
  alert(error);
}