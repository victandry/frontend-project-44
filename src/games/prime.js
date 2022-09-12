#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

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
  const number = getRandomNumber(0, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

const runPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(runRound, gameDescription);
};

export default runPrime;
