const countTotalSalary = function (employees) {
  let total = 0;
  const values = Object.values(employees);
  for (const salary of values) { total += salary };
  return total;

};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
//console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
//console.log(countTotalSalary(supports));
// 500
