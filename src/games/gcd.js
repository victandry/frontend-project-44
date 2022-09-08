import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

const getGcd = (num1, num2) => {
  let gcd = 1; // НОД по умолчанию
  let remn = -1; // остаток от деления
  let absNum1 = Math.abs(num1);
  let absNum2 = Math.abs(num2);
  if (Math.sign(absNum1 - absNum2) < 0) {
    absNum1 = absNum2;
    absNum2 = Math.abs(num1);
  }
  while (remn !== 0 && remn !== 1) { // алгоритм Евклида
    remn = absNum1 % absNum2; // если будет = 0, то НОД = absnum2; если = 1, то вз-простые числа
    gcd = absNum2;
    absNum1 = absNum2;
    absNum2 = remn;
    if (remn === 1) {
      gcd = 1;
    }
  }
  return gcd;
};

const runRound = () => {
  const num1 = generateRand(0, 100);
  const num2 = generateRand(0, 100);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const corrAnswer = getGcd(num1, num2);
  return [userAnswer, corrAnswer];
};

const runBrainGcd = () => {
  runGame(runRound);
};

export default runBrainGcd;
