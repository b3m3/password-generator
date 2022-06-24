document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const counterEl = document.querySelector('.range-label span');
  const numbersEl = document.querySelector('#numbers');
  const symbolsEl = document.querySelector('#symbols');
  const rangeEl = document.querySelector('#range');
  const buttonEl = document.querySelector('.settings__btn');

  const numbers = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = ' !@#$%^&*()_-+={}[];:|.,?/~`\'';

  let password = [];

  const random = str => 
    str[Math.floor(Math.random() * str.length)];


  rangeEl.oninput = () => counterEl.textContent = rangeEl.value;
});