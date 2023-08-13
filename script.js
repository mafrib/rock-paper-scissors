function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  random = Math.floor(Math.random() * options.length);

  console.log(options[random]);
}
