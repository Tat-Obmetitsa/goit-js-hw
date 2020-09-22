const stock = 100;
let invoice = 100;
console.log = invoice <= stock ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно твоаров!';

invoice = 20;
console.log;

invoice = 80;
console.log;

invoice = 130;
console.log;


// let invoice = 100;
// const stock = 100;
// const messageTrue = 'Заказ оформлен, с вами свяжется менеджер';

// console.log("invoice>=stock", messageTrue);

// invoice = 50;
// console.log("invoice>=stock", messageTrue);
// invoice = 150;
// const messageFalse = 'На складе недостаточно твоаров!';
// console.log("invoice>=stock", messageFalse);