// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
// на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.
"use strict";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('.switcher button[data-action="start"]');
const stopBtn = document.querySelector('.switcher button[data-action="stop"]');
const body = document.body;
let onClick;
const min = 0;
const max = colors.length;
let isActive = false;

startBtn.addEventListener('click', myStart);
stopBtn.addEventListener('click', myStop);

function myStart() {
  if (isActive) return
  isActive = true;
  onClick = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
}

function myStop() {
  clearInterval(onClick);
  isActive = false;
}