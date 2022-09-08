#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

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

const runRound = () => {
  const num1 = generateRand(0, 100);
  const num2 = generateRand(0, 100);
  const operand = generateOper();
  console.log('What is the result of the expression?');
  console.log(`Question: ${num1} ${operand} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const corrAnswer = getCalc(num1, num2, operand);
  return [userAnswer, corrAnswer];
};

const runBrainCalc = () => {
  runGame(runRound);
};

export default runBrainCalc;
