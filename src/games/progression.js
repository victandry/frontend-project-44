#!/usr/bin/env node

import run from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (length, startElement, interval) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startElement + interval * i);
  }
  return progression;
};

const runRound = () => {
  const progressionLength = getRandomNumber(5, 10); // длина прогрессии от 5 до 10
  const elementToReplace = getRandomNumber(0, progressionLength - 1); // номер загадыв. элемента
  const startElement = getRandomNumber(0, 100); // значение начального элемента
  const progressionInterval = getRandomNumber(0, 50); // значение интервала прогрессии
  const progression = generateProgression(progressionLength, startElement, progressionInterval);
  const correctAnswer = progression[elementToReplace]; // прав. ответ - заменяемый эл-т прогрессии
  progression[elementToReplace] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  run(runRound, gameDescription);
};

export default runProgression;
