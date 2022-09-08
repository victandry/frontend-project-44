import readlineSync from 'readline-sync';

const runGame = (receiveAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const [userAnswer, corrAnswer] = receiveAnswers();
    const correct = userAnswer === corrAnswer;
    if (!correct) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${corrAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
