'use strict';

const nameInput = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

nameInput.addEventListener('input', hendlInput);

function hendlInput(e) {
  if (e.currentTarget.value !== '') {
    nameSpan.textContent = e.currentTarget.value;
  } else {
    nameSpan.textContent = 'незнакомец';
  }
}