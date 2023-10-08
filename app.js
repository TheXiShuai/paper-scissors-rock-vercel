const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

document.getElementById("rock").addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("rock", computerSelection);
  document.getElementById("result").textContent = result;
  updateScore();
});

document.getElementById("paper").addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("paper", computerSelection);
  document.getElementById("result").textContent = result;
  updateScore();
});

document.getElementById("scissors").addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("scissors", computerSelection);
  document.getElementById("result").textContent = result;
  updateScore();
});
