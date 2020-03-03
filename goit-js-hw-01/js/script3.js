"use strict";

const ADMIN_PASSWORD = "1111";
let message;
const password = prompt("Пожалуйста, введите пароль!");

if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Неверный пароль!";
}
alert(message); 