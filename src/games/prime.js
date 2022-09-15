#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 0;
const maxValue = 100;

const isPrime = (number) => {
  let divisor = 1;
  const halfNumber = Math.ceil(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
      divisor = i;
    }
  }
  const answer = divisor === 1 ? 'yes' : 'no';
  return answer;
};

const runRound = () => {
  const number = getRandomNumber(minValue, maxValue);
  const question = `${number}`;
  const correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

const runPrime = () => {
  run(runRound, description);
};

export default runPrime;
