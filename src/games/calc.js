#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber, generateIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const minValue = 0;
const maxValue = 100;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = generateIndex(operators); // для выбора рандомного операнда
  return operators[index];
};

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const runRound = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const operation = getRandomOperator();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operation));
  return [question, correctAnswer];
};

const runCalc = () => {
  run(runRound, description);
};

export default runCalc;
