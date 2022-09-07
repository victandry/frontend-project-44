#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isCorrect, greeting } from '../index.js';

const generateRand = () => (Math.round(Math.random() * 100));

const isPrime = (num) => {
  let div = 1;
  for (let i = 2; i <= Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      div = i;
    }
  }
  const answer = div === 1 ? 'yes' : 'no';
  return answer;
};

const brainPrimeRound = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = generateRand();
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const corrAnswer = isPrime(num);
  return [userAnswer, corrAnswer];
};

const brainPrimeGame = () => {
  const name = greeting();
  for (let i = 0; i < 3; i += 1) {
    if (!isCorrect(brainPrimeRound(), name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainPrimeGame;