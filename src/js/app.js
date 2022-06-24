document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const numbers = document.querySelector('#numbers');
  const symbols = document.querySelector('#symbols');
  const range = document.querySelector('#range');
  const button = document.querySelector('.settings__btn');

  (function showRangeValue()  {
    const counter = document.querySelector('.range-label span');
    range.oninput = () => {
      counter.textContent = range.value;
    }
  })();

  
});