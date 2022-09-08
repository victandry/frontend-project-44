#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const runRound = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const num = generateRand(0, 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const corrAnswer = checkEven(num);
  return [userAnswer, corrAnswer];
};

const runBrainEven = () => {
  runGame(runRound);
};

export default runBrainEven;
