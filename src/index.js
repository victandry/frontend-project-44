import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isCorrect = (answers, name) => {
  const correct = answers[0] === answers[1];
  if (!correct) {
    console.log(`${answers[0]} is wrong answer ;(. Correct answer was ${answers[1]}.`);
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
  return correct;
};

export { isCorrect, greeting };
