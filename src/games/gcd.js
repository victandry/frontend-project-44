#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => {
  let gcd = 1; // НОД по умолчанию
  let remainder = 2; // остаток от деления, сначала произвольный
  let number1 = Math.abs(num1);
  let number2 = Math.abs(num2);
  if (Math.sign(number1 - number2) < 0) {
    number1 = number2;
    number2 = Math.abs(num1);
  }
  while (remainder ** 2 > 1) { // алгоритм Евклида
    remainder = number1 % number2; // если = 0, то НОД = absnum2; если = 1, то вз-простые числа
    gcd = number2;
    number1 = number2;
    number2 = remainder;
    if (remainder === 1) {
      gcd = 1;
    }
  }
  return gcd;
};

const runRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `Question: ${number1} ${number2}`;
  const corrAnswer = getGcd(number1, number2);
  return [question, corrAnswer];
};

const runGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  run(runRound, gameDescription);
};

export default runGcd;
