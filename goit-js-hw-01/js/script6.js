"use strict";

let input;
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total = total + Number(input);
  }
}
alert(`Общая сумма чисел равна ${total}`);