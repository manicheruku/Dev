let userScore = 0;
let compScore = 0;
const userScoreDisplay = document.getElementById("you");
const compScoreDisplay = document.getElementById("computer");
const resultDisplay = document.getElementById("result");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

$("#reset").click(function () {
  resetGame();
});

rockBtn.addEventListener("click", function () {
  playRound("rock");
});
paperBtn.addEventListener("click", function () {
  playRound("paper");
});
scissorBtn.addEventListener("click", function () {
  playRound("scissor");
});

function resetGame() {
  userScore = 0;
  compScore = 0;
  updateScoreDisplay();
  resultDisplay.textContent = "Pick Your Move...";
}

function playRound(userChoice) {
  const compChoice = compSelect();
  let roundResult = "";

  if (userChoice === compChoice) {
    roundResult = "It's a draw...";
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userScore++;
    roundResult = `You won against Computer....it was ${compChoice}`;
  } else {
    compScore++;
    roundResult = `Computer won against you....it was ${compChoice}`;
  }

  updateScoreDisplay();
  resultDisplay.textContent = roundResult;
}

function updateScoreDisplay() {
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}

function compSelect() {
  const selections = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}
