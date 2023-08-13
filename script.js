function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie! Try again.");
    return 0;
  } else if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection.toUpperCase() == "PAPER") {
      console.log("You Lose! Paper beats Rock");
      return -1;
    } else if (computerSelection.toUpperCase() == "SCISSORS") {
      console.log("You Win! Rock beats Scissors");
      return 1;
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK") {
      console.log("You Win! Paper beats Rock");
      return 1;
    } else if (computerSelection.toUpperCase() == "SCISSORS") {
      console.log("You Lose! Scissors beats Paper");
      return -1;
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection.toUpperCase() == "ROCK") {
      console.log("You Lose! Rock beats Scissors");
      return -1;
    } else if (computerSelection.toUpperCase() == "PAPER") {
      console.log("You Win! Scissors beats Paper");
      return 1;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose your play: Rock, Paper or Scissors?");
    let result = playRound(playerSelection, getComputerChoice());
    if (result == 1) {
      playerScore++;
    } else if (result == -1) {
      computerScore++;
    }
    console.log("Score- You: " + playerScore + " | Computer: " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You Won!");
  } else {
    console.log("You Lost... Better luck next time");
  }
}
