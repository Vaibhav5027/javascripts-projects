"use strict";

let secreatNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;
const messageSelector = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "#222";
  //   document.querySelector(".message").textContent = "Start Geussing Number";
  messageSelector("Start Geussing Number");
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener(
  "click",
  function () {
    let guess = Number(document.querySelector(".guess").value);

    if (!guess) {
      //   document.querySelector(".message").textContent = "😢Not Number";
      messageSelector("😢Not Number");
    } else if (guess === secreatNumber) {
      //   document.querySelector(".message").textContent = "🏆 Correct Guess";
      messageSelector("🏆 Correct Guess");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secreatNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secreatNumber ? "😱 Too High " : "😢 Too Low ";

      messageSelector(guess > secreatNumber ? "😱 Too High " : "😢 Too Low ");
      score--;
      document.querySelector(".score").textContent = score;
      //   } else if (guess > secreatNumber) {
      //     if (score > 1) {
      //       document.querySelector(".message").textContent = "😱 Too High ";
    } else {
      //   document.querySelector(".message").textContent = "👎👎You Loose The Game";
      messageSelector("👎👎You Loose The Game");
      document.querySelector(".score").textContent = 0;
    }
    //   } else if (guess < secreatNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "😢 Too Low  ";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "👎👎You Loose The Game";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
  // }
);
