let choices = ["Rock", "Paper", "Scissors"];
let WIN = 0,
  TIE = 0,
  LOSS = 0,
  COUNT = 0;

// query selectors
const buttons = document.querySelectorAll("button");
const messageContainer = document.querySelector(".display .container");

// created elements
const para = document.createElement("p");
const result = document.createElement("p");
const scoreboard = document.createElement("p");
const turnNumber = document.createElement("p");
const contentsDiv = document.createElement("div");

// TODO: get computer choice (randomised)
function getComputerChoice(choiceList) {
  let choice;
  choice = Math.floor(Math.random() * choices.length);
  return choiceList[choice]; // return the computer choice
}

function buttonClicked(event) {
  const playerChoice = event.target.name;
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
  para.textContent = outcome;
}

function bestOf5() {
  let outcome;
  if (WIN > LOSS || (WIN > LOSS && WIN <= TIE)) {
    outcome = "\nYOU WIN!";
  } else if (LOSS > WIN || (LOSS > WIN && LOSS <= TIE)) {
    outcome = "\nCOMPUTER WINS!";
  } else {
    outcome = "\nThe game is a TIE!";
  }
  result.textContent = outcome;
}

function displayScoreboard() {
  scoreboard.textContent = `\nWINS: ${WIN}    TIES: ${TIE}    LOSSES: ${LOSS}`;
}

function enableButton() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function disableButton() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function displayOnDOM() {
  messageContainer.appendChild(contentsDiv.appendChild(turnNumber));
  messageContainer.appendChild(contentsDiv.appendChild(scoreboard));
  messageContainer.appendChild(contentsDiv.appendChild(para));
  messageContainer.appendChild(contentsDiv.appendChild(result));
}

function game(playerChoice, choiceList) {
  turnNumber.textContent = `Round ${COUNT + 1}`;
  //   messageContainer.appendChild(contentsDiv.appendChild(turnNumber));
  playRound(playerChoice, choiceList);
  displayScoreboard();
  displayOnDOM();

  COUNT += 1;

  if (COUNT === 5) {
    disableButton();
    bestOf5();
  }
}

// event listeners
buttons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});

// TODO: display all the messages on the DOM
