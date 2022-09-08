import readlineSync from 'readline-sync';
import runGame from '../index.js';
import generateRand from '../utils.js';

const getGcd = (num1, num2) => {
  let gcd = 1;
  let remn = -1; // остаток от деления
  let absnum1 = Math.abs(num1);
  let absnum2 = Math.abs(num2);
  if (Math.sign(absnum1 - absnum2) < 0) {
    absnum1 = absnum2;
    absnum2 = Math.abs(num1);
  }
  while (remn !== 0 && remn !== 1) { // алгоритм Евклида
    remn = absnum1 % absnum2; // если будет = 0, то НОД = absnum2; если = 1, то вз-простые числа
    gcd = absnum2;
    absnum1 = absnum2;
    absnum2 = remn;
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
