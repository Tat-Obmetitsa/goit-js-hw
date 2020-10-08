let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;
//Write code under this line   
const keys = Object.keys(user);
for (const key of keys) {

  message += `${key}: ${user[key]}\n`;
}

console.log(message);