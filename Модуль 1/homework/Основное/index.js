'use strict';

// /* 
// Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
//   При загрузке страницы у посетителя запрашивается логин через prompt:
  
//     - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
//     - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
//        показывать alert с текстом 'Доступ запрещен, неверный логин!'   
//     - Если был введен логин совпадающий со значением константы adminLogin, 
//       спрашивать пароль через prompt.
    
//   При вводе пароля:
  
//       - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
//       - Если введен пароль который не совпадает со значением константы adminPassword,
//         показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
//       - Если введён пароль который совпадает со значением константы adminPassword, 
//         показывать alert с текстом 'Добро пожаловать!'
        
//   🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
// */

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancel = 'Canceled by user!';
const autrorizationComplite = "Welcome";

const loginMessage = "Please, enter your login";
const loginError = "Access is denied, invalid login";

const passwordMessage = "Please, enter your password";
const passwordError = "Access is denied, invalid password";

let userName = prompt(loginMessage);

if (userName == adminLogin) {
    let userPassWord = prompt(passwordMessage);

    if (userPassWord == null) {
        alert(cancel);
    } else if (userPassWord == adminPassword) {
        alert(autrorizationComplite)
    } else {
        alert(passwordError);
    }
    
} else if (userName == null ){
    alert(cancel);
} else {
    alert(loginError);
}


