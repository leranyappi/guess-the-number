"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

const rnd = Math.ceil(Math.random() * 20);
console.log(rnd);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //когда не ввели число
  if (!guess || guess > 20) {
    displayMessage("Ошибка! Введите число от 1 до 20.");
  }
  //когда угадали
  else if (guess === rnd) {
    displayMessage("Победа!");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".highscore").textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } //когда не угадали
  else if (guess !== rnd) {
    if (score > 1) {
      if (guess > rnd) {
        displayMessage("Число больше загаданного");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < rnd) {
        displayMessage("Число меньше загаданного");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("Вы проиграли!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.background =
    "background: radial-gradient( circle, rgba(35, 34, 41, 1) 51%, rgba(56, 59, 60, 1) 100% )";
  score = 20;

  rnd = Math.ceil(Math.random() * 20);
  displayMessage("Начните угадывать");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
