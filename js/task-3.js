const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

if (ADMIN_PASSWORD === userPassword) { message = 'Добро пожаловать!' } else { message = 'Доступ запрещен, неверный пароль!' };
if (userPassword === null) { message = 'Отменено пользователем!' };
console.log(message);