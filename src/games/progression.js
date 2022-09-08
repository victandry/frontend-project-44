#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

const generateProgr = (length, startElem, interval) => {
  const progr = [];
  for (let i = 0; i < length; i += 1) {
    progr.push(startElem + interval * i);
  }
  return progr;
};

const runRound = () => {
  const length = generateRand(5, 10); // длина прогрессии от 5 до 10
  const replElemNum = generateRand(0, length - 1); // номер загадываемого элемента
  const startElem = generateRand(0, 100); // значение начального элемента
  const interval = generateRand(0, 50); // значение интервала прогрессии
  const progr = generateProgr(length, startElem, interval); // создание прогрессии
  const corrAnswer = progr[replElemNum]; // правильный ответ - заменяемый элемент прогрессии
  progr[replElemNum] = '..';
  console.log('What number is missing in the progression?');
  console.log(`Question: ${progr.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return [userAnswer, corrAnswer];
};

const runBrainProgression = () => {
  runGame(runRound);
};

export default runBrainProgression;
