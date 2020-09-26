const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

if (ADMIN_PASSWORD === userPassword) { message = ACCESS_IS_ALLOWED } else { message = ACCESS_DENIED };
if (userPassword === null) { message = CANCELED_BY_USER };
console.log(message);