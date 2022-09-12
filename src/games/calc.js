#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperand = () => {
  const randomNumber = getRandomNumber() % 3; // для выбора рандомного операнда
  switch (randomNumber) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return '+';
  }
};

const getCalculation = (number1, number2, operand) => {
  switch (operand) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return 0;
  }
};

const runRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operand = getRandomOperand();
  const question = `Question: ${number1} ${operand} ${number2}`;
  const correctAnswer = getCalculation(number1, number2, operand);
  return [question, correctAnswer];
};

const runCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  run(runRound, gameDescription);
};

export default runCalc;
