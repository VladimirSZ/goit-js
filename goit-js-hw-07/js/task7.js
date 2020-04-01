'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
fontSizeControl.value = 16;
fontSizeControl.addEventListener('input', control);

function control(e) {
  spanText.style.fontSize = `${e.currentTarget.value}px`;
}