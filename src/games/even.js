#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = checkEven(randomNumber);
  return [question, correctAnswer];
};

const runEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(runRound, gameDescription);
};

export default runEven;
