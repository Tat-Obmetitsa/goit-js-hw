const total = 100;
let ordered = 50;
const type = ordered <= total ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно твоаров!';
console.log(type);

ordered = 20;
console.log(type);

ordered = 80;
console.log(type);

ordered = 130;
console.log(type);