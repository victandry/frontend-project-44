import readlineSync from 'readline-sync';

const run = (receiveQnA, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = receiveQnA();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = userAnswer === String(correctAnswer);
    if (!correct) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
