let choices = ["Rock", "Paper", "Scissors"];
let WIN = 0,
  TIE = 0,
  LOSS = 0,
  COUNT = 0;

// query selectors
const buttons = document.querySelectorAll("button");

// created elements

// TODO: get computer choice (randomised)
function getComputerChoice(choiceList) {
  let choice;
  choice = Math.floor(Math.random() * choices.length);
  return choiceList[choice]; // return the computer choice
}

function buttonClicked(event) {
  const playerChoice = event.target.name;
  playRound(playerChoice, choices);
}

function playRound(playerChoice, choiceList) {
  let player1 = playerChoice;
  let computer = getComputerChoice(choiceList);
  //   determineOutcome(player1, computer);
  console.log("PlayRound Func");
  console.log(player1);
  console.log(computer);
}

function determineOutcome(playerChoice, compChoice) {
  // TIE outcome
  if (playerChoice == "rock" && compChoice == "rock") {
    TIE += 1;
    console.log("It's a TIE! Rock vs Rock");
  } else if (playerChoice == "paper" && compChoice == "paper") {
    TIE += 1;
    console.log("It's a TIE! Paper vs Paper");
  } else if (playerChoice == "scissors" && compChoice == "scissors") {
    TIE += 1;
    console.log("It's a TIE! Scissors vs Scissors");
  }

  // Win outcome
  else if (playerChoice == "rock" && compChoice == "scissors") {
    WIN += 1;
    console.log("You Win! Rock beats Scissors");
  } else if (playerChoice == "paper" && compChoice == "rock") {
    WIN += 1;
    console.log("You Win! Paper beats Rock");
  } else if (playerChoice == "scissors" && compChoice == "paper") {
    WIN += 1;
    console.log("You Win! Scissors beats Paper");
  }

  // Loss outcome
  else if (playerChoice == "scissors" && compChoice == "rock") {
    LOSS += 1;
    console.log("You Lose! Rock beats Scissors");
  } else if (playerChoice == "rock" && compChoice == "paper") {
    LOSS += 1;
    console.log("You Lose! Paper beats Rock");
  } else if (playerChoice == "paper" && compChoice == "scissors") {
    LOSS += 1;
    console.log("You Lose! Scissors beats Paper");
  }
}

// event listeners
buttons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});
