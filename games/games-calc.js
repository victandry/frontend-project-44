#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isCorrect, greeting } from '../src/index.js';

const generateRand = () => (Math.round(Math.random() * 100));

const generateOper = () => {
  const randNum = generateRand() % 3;
  switch (randNum) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return '+';
  }
};

const getCalc = (num1, num2, operand) => {
  switch (operand) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

const brainCalcRound = () => {
  const num1 = generateRand();
  const num2 = generateRand();
  const operand = generateOper();
  console.log('What is the result of the expression?');
  console.log(`Question: ${num1} ${operand} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const corrAnswer = getCalc(num1, num2, operand);
  return [userAnswer, corrAnswer];
};

const brainCalcGame = () => {
  const name = greeting();
  for (let i = 0; i < 3; i += 1) {
    if (!isCorrect(brainCalcRound(), name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainCalcGame;
