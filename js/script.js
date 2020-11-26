'use strict';

let guessNumber = function () {
  let randomNumber = Math.ceil(Math.random() * 100);
  let attemptCounter = 10;

  let checkAnswer = function () {
    let insertNumber = prompt('Угадай число от 1 до 100');

    attemptCounter--;

    if (+insertNumber === randomNumber) {
      alert(`Поздравляю, Вы угадали! Загаданное число ${randomNumber}`);
      if (confirm('Хотели бы сыграть ещё?')) {
        guessNumber();
      } else {
        alert('Игра окончена');
      }
    } else if (insertNumber === null) {
      alert('Игра окончена');
    } else if (insertNumber < randomNumber) {
      if (attemptCounter) {
        alert(`Загаданное число больше. осталось попыток: ${attemptCounter}`);
        checkAnswer();
      } else {
        if (confirm('Попытки закончились, хотите сыграть ещё?')) {
          guessNumber();
        } else {
          alert('Игра окончена');
        }
      }
    } else if (insertNumber > randomNumber) {
      if (attemptCounter) {
        alert(`Загаданное число меньше. осталось попыток: ${attemptCounter}`);
        checkAnswer();
      } else {
        if (confirm('Попытки закончились, хотите сыграть ещё?')) {
          guessNumber();
        } else {
          alert('Игра окончена');
        }
      }
    } else {
      alert('Введи число!');
      checkAnswer();
    }
  };

  checkAnswer();
};

guessNumber();
