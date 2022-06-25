document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const checkboxNumber = document.querySelector('#numbers');
  const checkboxSymbol = document.querySelector('#symbols');
  const inputPassword = document.querySelector('.password__input');
  const counter = document.querySelector('.range-label span');
  const range = document.querySelector('#range');
  const button = document.querySelector('.settings__btn');

  const numbers = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = ' !@#$%^&*()_-+={}[];:|.,?/~`\'';

  const random = str => str[Math.floor(Math.random() * str.length)];

  const showRangeValue = () => counter.textContent = range.value;

  const createPassword = () => {
    let password = [];

    for (let index = 0; index < +range.value; index++) {
      password.push(random(letters));
      password.push(random(letters.toUpperCase()));

      if (checkboxNumber.checked) {
        password.push(random(numbers));
      }

      if (checkboxSymbol.checked) {
        password.push(random(symbols));
      }
    }

    inputPassword.classList.add('click');

    const result = password.slice(0, +range.value);

    const mixPassword = () => Math.random() - 0.5;

    return inputPassword.value = result.sort(mixPassword).join('');
  }

  const getPassword = () => {
    const showCoppyed = document.querySelector('.password__hover');

    if (inputPassword.value.length > 1) {
      navigator.clipboard.writeText(inputPassword.value);

      showCoppyed.classList.add('active');
      setTimeout(() => showCoppyed.classList.remove('active'), 680);
    }
  }

  range.addEventListener('input', showRangeValue);
  button.addEventListener('click', createPassword);
  inputPassword.addEventListener('click', getPassword);
});