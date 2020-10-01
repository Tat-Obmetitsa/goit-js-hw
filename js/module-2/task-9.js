// function isLoginValid(login, min = 4, max = 16) {
//   return login.length >= min && login.length <= max ? true : false;
// }

// function isLoginUnique(allLogins, login) {
//   'use strict';
//   return allLogins.includes(login) ? false : true;
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   for (login of allLogins) {
//     if (login !== isLoginValid) { message = ERROR; };
//     if (isLoginUnique === login) {
//       message = SUCCESS;
//     } else if (isLoginUnique !== login) { message = REFUSAL; };
//   }
//   return message;

// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'