#!/usr/bin/env node

import run from '../index.js';
import { getRandomNumber, generateIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minLengthValue = 5;
const maxLengthValue = 10;
const minElementValue = 0;
const maxElementValue = 100;
const minIntervalValue = 1;
const maxIntervalValue = 50;

const generateProgression = (length, startElement, interval) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startElement + interval * i);
  }
  return progression;
};

const runRound = () => {
  const progressionLength = getRandomNumber(minLengthValue, maxLengthValue);
  const startElement = getRandomNumber(minElementValue, maxElementValue);
  const progressionInterval = getRandomNumber(minIntervalValue, maxIntervalValue);
  const progression = generateProgression(progressionLength, startElement, progressionInterval);
  const replacingElementIndex = generateIndex(progression);
  const correctAnswer = String(progression[replacingElementIndex]);
  progression[replacingElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(runRound, description);
};

export default runProgression;
