let choices = ["Rock", "Paper", "Scissors"];
let WIN = 0,
  TIE = 0,
  LOSS = 0,
  COUNT = 0;

// query selectors
const buttons = document.querySelectorAll("button");
const messageContainer = document.querySelector(".display .container");
const playerCompDiv = document.querySelector(".player-comp");
const pc = document.querySelector(".pc");
const cc = document.querySelector(".cc");
const player = document.querySelector(".pc-span");
const computer = document.querySelector(".cc-span");
const screen = document.querySelector("#screen");
const body = document.querySelector("body");

// created elements
const intro = document.createElement("h3");
const introMsg = document.createElement("h3");
const para = document.createElement("h5");
const result = document.createElement("h3");
const scoreboard = document.createElement("h4");
const turnNumber = document.createElement("h4");
const contentsDiv = document.createElement("div");
const playDiv = document.createElement("div");
const playButton = document.createElement("button");

function getComputerChoice(choiceList) {
  let choice;
  choice = Math.floor(Math.random() * choices.length);
  return choiceList[choice];
}

function buttonClicked(event) {
  const playerChoice = event.target.name;
  game(playerChoice, choices);
}

function displayPlayerCompChoice(playerChoice, compChoice) {
  pc.textContent = "Player: ";
  cc.textContent = "Computer: ";
  player.textContent = playerChoice;
  computer.textContent = compChoice;
  player.style.border = "5px dashed salmon";
  computer.style.border = "5px dashed salmon";
  pc.appendChild(player);
  cc.appendChild(computer);

  pc.style.color = "skyblue";
  cc.style.color = "lightpink";
  playerCompDiv.appendChild(pc);
  playerCompDiv.appendChild(cc);
}

function playRound(playerChoice, choiceList) {
  const player1 = playerChoice;
  const comp = getComputerChoice(choiceList);

  displayPlayerCompChoice(player1, comp);
  determineOutcome(player1, comp);
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
  if (WIN > LOSS || (WIN > LOSS && WIN <= TIE)) {
    result.textContent = "\nYOU WIN!";
  } else if (LOSS > WIN || (LOSS > WIN && LOSS <= TIE)) {
    result.textContent = "\nCOMPUTER WINS!";
  } else {
    result.textContent = "\nThe game is a TIE!";
  }
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
  messageContainer.appendChild(playerCompDiv);
  messageContainer.appendChild(contentsDiv.appendChild(para));
  messageContainer.appendChild(contentsDiv.appendChild(result));
}

function pressPlay(btn) {
  btn.addEventListener("click", () => {
    screen.classList.toggle("disabled");
    console.log(screen);
    playButton.remove();
    displayInstructions();
  });
}

function displayInstructions() {
  intro.textContent = "Best of 5 Rounds, Winner Takes All!";
  introMsg.textContent = "Choose your weapon";
  messageContainer.appendChild(intro);
  messageContainer.appendChild(introMsg);
}

function clearScreen() {
  result.remove();
  turnNumber.remove();
  scoreboard.remove();
  para.remove();
  playerCompDiv.remove();
  contentsDiv.remove();
}

function playAgain() {
  resetScore();
  clearScreen();
  screen.classList.toggle("disabled");
  playButton.textContent = "Play Again?";
  body.appendChild(playButton);
  playButton.addEventListener("click", () => {
    screen.classList.remove("disabled");
    playButton.remove();
    enableButton();
  });
}

function resetScore() {
  (WIN = 0), (TIE = 0), (LOSS = 0), (COUNT = 0);
  result.textContent = "";
}

function playGame() {
  playButton.textContent = "Play Game";
  playButton.classList.add("play-game-style");
  body.classList.add("play-container");
  body.appendChild(playButton);
  pressPlay(playButton);
}

function game(playerChoice, choiceList) {
  turnNumber.textContent = `Round ${COUNT + 1}`;
  playRound(playerChoice, choiceList);
  displayScoreboard();
  displayOnDOM();
  COUNT += 1;

  if (COUNT === 5) {
    disableButton();
    bestOf5();
    setTimeout(resetScore, 2000);
    setTimeout(clearScreen, 2000);
    setTimeout(playAgain, 2000);
  }
}

// event listeners
if (screen.classList.contains("disabled")) {
  playGame();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    intro.remove();
    introMsg.remove();
  });
  button.addEventListener("click", buttonClicked);
});
