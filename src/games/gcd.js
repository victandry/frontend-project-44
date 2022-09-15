#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minValue = 0;
const maxValue = 100;

const getGcd = (number1, number2) => {
  let gcd = 1; // НОД по умолчанию
  let remainder = 2; // остаток от деления, сначала произвольный
  let x = Math.abs(number1);
  let y = Math.abs(number2);
  if (Math.sign(x - y) < 0) {
    x = y;
    y = Math.abs(number1);
  }
  while (remainder ** 2 > 1) { // алгоритм Евклида
    remainder = x % y; // если = 0, то НОД = absnum2; если = 1, то вз-простые числа
    gcd = y;
    x = y;
    y = remainder;
    if (remainder === 1) {
      gcd = 1;
    }
  }
  return gcd;
};

const runRound = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

const runGcd = () => {
  run(runRound, description);
};

export default runGcd;
