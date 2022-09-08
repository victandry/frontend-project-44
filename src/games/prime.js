#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = generateRand(0, 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const corrAnswer = isPrime(num);
  return [userAnswer, corrAnswer];
};

const runBrainPrime = () => {
  runGame(runRound);
};

export default runBrainPrime;
