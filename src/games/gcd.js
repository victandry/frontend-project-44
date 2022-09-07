import readlineSync from 'readline-sync';
import { isCorrect, greeting } from '../index.js';

const generateRand = () => (Math.round(Math.random() * 100));

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

const brainGcdRound = () => {
  const num1 = generateRand();
  const num2 = generateRand();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const corrAnswer = getGcd(num1, num2);
  return [userAnswer, corrAnswer];
};

const brainGcdGame = () => {
  const name = greeting();
  for (let i = 0; i < 3; i += 1) {
    if (!isCorrect(brainGcdRound(), name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainGcdGame;