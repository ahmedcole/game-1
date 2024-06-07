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

let computerMove;

function generatingComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerMove = "rock";
  } else if (randomNumber === 1) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
}

// generatingComputerMove();

function compareMove(userMove) {
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
