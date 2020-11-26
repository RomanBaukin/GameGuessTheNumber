'use strict';

// let randomNumberGeneration = function () {
//   return Math.ceil(Math.random() * 100);
// };
let guessNumber = function () {
  let randomNumber = Math.ceil(Math.random() * 100);

  let checkAnswer = function () {
    let insertNumber = prompt('Угадай число от 1 до 100');

    // console.log(randomNumber);
    // console.log(typeof insertNumber);

    if (+insertNumber === randomNumber) {
      alert(`Поздравляю, Вы угадали! Загаданное число ${randomNumber}`);
    } else if (insertNumber === null) {
      alert('Игра окончена');
    } else if (insertNumber < randomNumber) {
      alert('Загаданное число больше');
      checkAnswer();
    } else if (insertNumber > randomNumber) {
      alert('Загаданное число меньше');
      checkAnswer();
    } else {
      alert('Введи число!');
      checkAnswer();
    }
  };
  checkAnswer();
};

guessNumber();
