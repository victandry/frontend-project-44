#!/usr/bin/env node

import readlineSync from 'readline-sync';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = (name) => {
  const num = Math.round(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const corrAnswer = checkEven(num);
  if (corrAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${corrAnswer}.`);
    console.log(`Let's try again, ${name}!`);
  }
  return corrAnswer === answer;
};

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
let success = 0;
while (success < 3) {
  success = brainEvenGame(name) ? success + 1 : 0;
}
console.log(`Congratulations, ${name}!`);
