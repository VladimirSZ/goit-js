'use strict';

const userInput = function() {
  let input;
  let total = 0;
  const numbers = [];

  do {
    input = prompt('Введите число:');
    if (!input) {
      break;
    }

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(Number(input));
      // console.log(numbers);
    }
  } while (input !== null);

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }

  return `Общая сумма чисел равна ${total}`;
};

console.log(userInput());







