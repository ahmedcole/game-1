const moveOutput = document.querySelector(".move-output");
const result = document.querySelector(".result");

const scoreWin = document.querySelector(".score :nth-child(1)");
const scoreDraw = document.querySelector(".score :nth-child(2)");
const scoreLose = document.querySelector(".score :nth-child(3)");

const scoreUpdate = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  draw: 0,
};

// generate a random number for computer move

function generatingComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerMove = "";
  if (randomNumber === 0) {
    computerMove = "rock";
  } else if (randomNumber === 1) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

// generatingComputerMove();

function compareMove(userMove) {
  const computerMove = generatingComputerMove();

  if (userMove === computerMove) {
    moveOutput.innerHTML = "Draw!";
    result.innerHTML = `You <img src="${userMove}-emoji.png" />
    <img src="${computerMove}-emoji.png" alt="" /> Computer`;
    scoreDraw.innerText = `Draw: ${++scoreUpdate.draw}`;
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    moveOutput.innerHTML = "You win!";
    result.innerHTML = `You <img src="${userMove}-emoji.png" />
    <img src="${computerMove}-emoji.png" alt="" /> Computer`;
    scoreWin.innerText = `Win: ${++scoreUpdate.win}`;
  } else {
    moveOutput.innerHTML = "You lose!";
    result.innerHTML = `You <img src="${userMove}-emoji.png" />
    <img src="${computerMove}-emoji.png" alt="" /> Computer`;
    scoreLose.innerText = `Lose: ${++scoreUpdate.lose}`;
  }

  localStorage.setItem("score", JSON.stringify(scoreUpdate));
}
scoreDraw.innerText = `Draw: ${scoreUpdate.draw}`;
scoreWin.innerText = `Win: ${scoreUpdate.win}`;
scoreLose.innerText = `Lose: ${scoreUpdate.lose}`;

function resetGame() {
  scoreUpdate.draw = 0;
  scoreUpdate.win = 0;
  scoreUpdate.lose = 0;
  scoreDraw.innerText = `Draw: ${scoreUpdate.draw}`;
  scoreWin.innerText = `Win: ${scoreUpdate.win}`;
  scoreLose.innerText = `Lose: ${scoreUpdate.lose}`;
  localStorage.removeItem("score");
}

// auto play

let autoPlay = false;
let intervalTime;

function autoPlayGame() {
  if (!autoPlay) {
    intervalTime = setInterval(() => {
      const autoMove = generatingComputerMove();
      compareMove(autoMove);
    }, 3000);
    autoPlay = true;
  } else {
    clearInterval(intervalTime);
    autoPlay = false;
  }
}
