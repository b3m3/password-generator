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

  const random = str => 
    str[Math.floor(Math.random() * str.length)];

  range.oninput = () => counter.textContent = range.value;

  button.addEventListener('click', () => {
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

    const result = password.slice(0, +range.value);

    const mixPassword = () => Math.random() - 0.5;

    return inputPassword.value = result.sort(mixPassword).join('');
  });

  inputPassword.addEventListener('click', () => {

  });
});