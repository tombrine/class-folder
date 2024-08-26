const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const click = document.querySelector("#click_to");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");

const game_over = document.querySelector("#game_over");
const game_over1 = document.querySelector("#game_over1");

const computer = ["👊🏾", "🖐🏾", "✌🏾"];
let computerAnswer = computer[Math.floor(Math.random() * computer.length)];

let answer = "";
let whoWin = "";
let computerScores = "";
let playerScores = "";

click.addEventListener("click", () => {
  answer = "";
  computerOutput.innerHTML = "";
  playerOutput.innerHTML = "";
  winner.innerHTML = "";
  computerAnswer = computer[Math.floor(Math.random() * computer.length)];
});

rock.addEventListener("click", () => {
  if (answer === "") {
    playerOutput.innerHTML = "👊🏾";
    answer = "👊🏾";
    computerOutput.innerHTML = computerAnswer;
    winner1();
    score();
  }
});

paper.addEventListener("click", () => {
  if (answer === "") {
    playerOutput.innerHTML = "🖐🏾";
    answer = "🖐🏾";
    computerOutput.innerHTML = computerAnswer;
    winner1();
    score();
  }
  if (playerScores === "✅✅✅") {
    gameOver1();
  } else if (computerScores === "❌❌❌") {
    gameOver();
  }
});

scissors.addEventListener("click", () => {
  if (answer === "") {
    playerOutput.innerHTML = "✌🏾";
    answer = "✌🏾";
    computerOutput.innerHTML = computerAnswer;
    winner1();
    score();
  }
  if (playerScores === "✅✅✅") {
    gameOver1();
  } else if (computerScores === "❌❌❌") {
    gameOver();
  }
});

function winner1() {
  if (computerAnswer === answer) {
    winner.innerHTML = "TIE =";
    whoWin = winner.innerHTML;
  } else if (
    (computerAnswer === "👊🏾" && answer === "✌🏾") ||
    (computerAnswer === "✌🏾" && answer === "🖐🏾") ||
    (computerAnswer === "🖐🏾" && answer === "👊🏾")
  ) {
    winner.innerHTML = "YOU LOSE 😔";
    whoWin = winner.innerHTML;
  } else if (
    (answer === "👊🏾" && computerAnswer === "✌🏾") ||
    (answer === "✌🏾" && computerAnswer === "🖐🏾") ||
    (answer === "🖐🏾" && computerAnswer === "👊🏾")
  ) {
    winner.innerHTML = "YOU WIN 🏆";
    whoWin = winner.innerHTML;
  }
}

function score() {
  if (whoWin === "YOU LOSE 😔") {
    computerScore.innerHTML += "❌";
    computerScores = computerScore.innerHTML;
    playerScore.innerHTML += "";
  } else if (whoWin === "YOU WIN 🏆") {
    playerScores = playerScore.innerHTML;
    playerScore.innerHTML += "✅";
    computerScore.innerHTML += "";
  } else if (whoWin === "TIE =") {
    computerScore.innerHTML += "";
    playerScore.innerHTML += "";
  }
  console.log(playerScores);
  if (playerScores === "✅✅✅") {
    gameOver1();
  } else if (computerScores === "❌❌❌") {
    gameOver();
  }
}

function gameOver() {
  game_over.className = "shown";
}

function gameOver1() {
  game_over1.className = "shown1";
}
