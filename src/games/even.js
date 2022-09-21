#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 0;
const maxValue = 100;

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const randomNumber = getRandomNumber(minValue, maxValue);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  run(getRound, description);
};

export default runEven;
