#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isCorrect, greeting } from '../index.js';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEvenRound = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const num = Math.round(Math.random() * 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const corrAnswer = checkEven(num);
  return [userAnswer, corrAnswer];
};

const brainEvenGame = () => {
  const name = greeting();
  for (let i = 0; i < 3; i += 1) {
    if (!isCorrect(brainEvenRound(), name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;