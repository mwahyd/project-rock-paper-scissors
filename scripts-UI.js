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
  //   playRound(playerChoice, choices);
  game(playerChoice, choices);
}

function playRound(playerChoice, choiceList) {
  const player1 = playerChoice;
  const computer = getComputerChoice(choiceList);
  determineOutcome(player1, computer);
}

function determineOutcome(playerChoice, compChoice) {
  let outcome;

  playerChoice = playerChoice.toLowerCase();
  compChoice = compChoice.toLowerCase();
  // TIE outcome
  if (playerChoice == "rock" && compChoice == "rock") {
    TIE += 1;
    outcome = "It's a TIE! Rock vs Rock";
  } else if (playerChoice == "paper" && compChoice == "paper") {
    TIE += 1;
    outcome = "It's a TIE! Paper vs Paper";
  } else if (playerChoice == "scissors" && compChoice == "scissors") {
    TIE += 1;
    outcome = "It's a TIE! Scissors vs Scissors";
  }

  // Win outcome
  else if (playerChoice == "rock" && compChoice == "scissors") {
    WIN += 1;
    outcome = "You Win! Rock beats Scissors";
  } else if (playerChoice == "paper" && compChoice == "rock") {
    WIN += 1;
    outcome = "You Win! Paper beats Rock";
  } else if (playerChoice == "scissors" && compChoice == "paper") {
    WIN += 1;
    outcome = "You Win! Scissors beats Paper";
  }

  // Loss outcome
  else if (playerChoice == "scissors" && compChoice == "rock") {
    LOSS += 1;
    outcome = "You Lose! Rock beats Scissors";
  } else if (playerChoice == "rock" && compChoice == "paper") {
    LOSS += 1;
    outcome = "You Lose! Paper beats Rock";
  } else if (playerChoice == "paper" && compChoice == "scissors") {
    LOSS += 1;
    outcome = "You Lose! Scissors beats Paper";
  }
  console.log(outcome);
}

function bestOf5() {
  if (WIN > LOSS || (WIN > LOSS && WIN <= TIE)) {
    console.log("\nYOU WIN!");
  } else if (LOSS > WIN || (LOSS > WIN && LOSS <= TIE)) {
    console.log("\nCOMPUTER WINS!");
  } else {
    console.log("\nThe game is a TIE!");
  }
}

function displayScoreboard() {
  console.log(`\nWINS: ${WIN}    TIES: ${TIE}    LOSSES: ${LOSS}`);
}

function game(playerChoice, choiceList) {
  console.log(`Round ${COUNT + 1}`);
  playRound(playerChoice, choiceList);
  displayScoreboard();

  COUNT += 1;

  if (COUNT === 5) {
    bestOf5();
  }
}

// event listeners
buttons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});
