#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgr = (length, startElem, interval) => {
  const progr = [];
  for (let i = 0; i < length; i += 1) {
    progr.push(startElem + interval * i);
  }
  return progr;
};

const runRound = () => {
  const lengthProgr = getRandomNumber(5, 10); // длина прогрессии от 5 до 10
  const replElemNum = getRandomNumber(0, lengthProgr - 1); // номер загадываемого элемента
  const startElem = getRandomNumber(0, 100); // значение начального элемента
  const intervalProgr = getRandomNumber(0, 50); // значение интервала прогрессии
  const progr = generateProgr(lengthProgr, startElem, intervalProgr); // создание прогрессии
  const corrAnswer = progr[replElemNum]; // правильный ответ - заменяемый элемент прогрессии
  progr[replElemNum] = '..';
  const question = `Question: ${progr.join(' ')}`;
  return [question, corrAnswer];
};

const runProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  run(runRound, gameDescription);
};

export default runProgression;
