#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 0;
const maxValue = 100;

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runRound = () => {
  const randomNumber = getRandomNumber(minValue, maxValue);
  const question = `${randomNumber}`;
  const correctAnswer = checkEven(randomNumber);
  return [question, correctAnswer];
};

const runEven = () => {
  run(runRound, description);
};

export default runEven;
