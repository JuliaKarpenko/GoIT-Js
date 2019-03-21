/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
    let myDate = new Date(time);
    let minutes = myDate.getMinutes();
    let second = Math.abs(Math.floor(myDate.getSeconds()));
    let millisecond = Math.abs(Math.floor(myDate.getMilliseconds() / 100) % 60);
    if (second.toString().length   == 1) second   = '0' + second;
    if (minutes.toString().length   == 1) minutes   = '0' + minutes;

    return `${minutes}:${second}.${millisecond}`;
  }
  
  console.log(
    getFormattedTime(1523621052858)
  ); // 04:12.8
  
  console.log(
    getFormattedTime(1523621161159)
  ); // 06:01.1
  
  console.log(
    getFormattedTime(1523621244239)
  ); // 07:24.2

  // function getFormattedTime(time) {
  //   let date = new Date(time);
  //   minutes = ("0" + date.getMinutes()).slice(-2);
  //   seconds = ("0" + date.getSeconds()).slice(-2);
  //   milliseconds = parseInt(date.getMilliseconds() / 100);
  
  //   return `${minutes}:${seconds}.${milliseconds}`;
  // }