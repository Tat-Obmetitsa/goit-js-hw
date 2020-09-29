const getItemsString = function (array) {
  let numbers = "";
  for (let i = 0; i < array.length; i += 1) {
    numbers += `${i + 1} - ${array[i]}\n`;
  }
  return numbers;
};
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));