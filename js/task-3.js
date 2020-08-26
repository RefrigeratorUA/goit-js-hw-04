// const findBestEmployee = function (employees) {
//   // твой код
//   let maxValue = 0;
//   let best = 'Все бездари! Разогнать!!!';

//   for (const key of Object.keys(employees)) {
//     if (employees[key] > maxValue) {
//       maxValue = employees[key];
//       best = key;
//     }
//   }
//   return best;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// const findBestEmployee = function (employees) {
//   // Write code under this line
//   let maxValue = 0;
//   let best = '';

//   for (const key of Object.keys(employees)) {
//     if (employees[key] > maxValue) {
//       maxValue = employees[key];
//       best = key;
//     }
//   }
//   return best;
// };

const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let result = '';
  let maxValue = 0;

  for (const [name, value] of entries) {
    if (value > maxValue) {
      maxValue = value;
      result = name;
    }
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
