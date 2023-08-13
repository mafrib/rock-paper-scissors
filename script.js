function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie! Try again.";
  } else if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection.toUpperCase() == "PAPER")
      return "You Lose! Paper beats Rock";
    else if (computerSelection.toUpperCase() == "SCISSORS")
      return "You Win! Rock beats Scissors";
  } else if (playerSelecion.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK")
      return "You Win! Paper beats Rock";
    else if (computerSelection.toUpperCase() == "SCISSORS")
      return "You Lose! Scissors beats Paper";
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection.toUpperCase() == "ROCK")
      return "You Lose! Rock beats Scissors";
    else if (computerSelection.toUpperCase() == "PAPER")
      return "You Win! Scissors beats Paper";
  }
}
