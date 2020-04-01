'use strict';
let counterValue = 0;

function counter() {
  const decrementBtn = document.querySelector('[data-action="decrement"]');
  const incrementBtn = document.querySelector('[data-action="increment"]');
  const valueSpan = document.querySelector('#value');

  incrementBtn.addEventListener('click', hendelIncrement);
  decrementBtn.addEventListener('click', hendelDecrement);

  function hendelIncrement() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
  }

  function hendelDecrement() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
  }
}

counter();