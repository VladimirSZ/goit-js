'use strict';

const symbol = 40;
const formatString = function(string) {
if (string.length>symbol) {
const stringslice = string.slice(0,40)+'...';
return stringslice;
} else {
    return string;
}
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

