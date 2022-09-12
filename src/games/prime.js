#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  let div = 1;
  const halfNum = Math.ceil(num / 2);
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      div = i;
    }
  }
  const answer = div === 1 ? 'yes' : 'no';
  return answer;
};

const runRound = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num}`;
  const corrAnswer = isPrime(num);
  return [question, corrAnswer];
};

const runPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(runRound, gameDescription);
};

export default runPrime;
