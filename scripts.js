// Rock paper Scissors
// The game will be accessed only from the console (right now)
// Player1 will play against the computer

let choices = ["rock", "paper", "scissors"];
let WIN = 0,
  TIE = 0,
  LOSS = 0;

// TODO: get computer choice (randomised)
function get_computer_choice(choice_list) {
  let choice;
  choice = Math.floor(Math.random() * choices.length);
  return choice_list[choice]; // return the computer choice
}

// TODO: get user choice
function get_player_choice(choice_list) {
  while (true) {
    let user_response = prompt("rock, paper, scissors? ").trim().toLowerCase();
    if (is_valid_choice(user_response, choice_list)) {
      return user_response;
    } else {
      console.log(`Player choice "${user_response}" invalid`);
    }
  }
}

// TODO: validate user choice and test for cases insensitivity
function is_valid_choice(user_response, choice_list) {
  if (choice_list.includes(user_response)) {
    return true;
  } else {
    return false;
  }
}

function determine_outcome(player_choice, comp_choice) {
  // TIE outcome
  if (player_choice == "rock" && comp_choice == "rock") {
    TIE += 1;
    console.log("It's a TIE! Rock vs Rock");
  } else if (player_choice == "paper" && comp_choice == "paper") {
    TIE += 1;
    console.log("It's a TIE! Paper vs Paper");
  } else if (player_choice == "scissors" && comp_choice == "scissors") {
    TIE += 1;
    console.log("It's a TIE! Scissors vs Scissors");
  }

  // Win outcome
  else if (player_choice == "rock" && comp_choice == "scissors") {
    WIN += 1;
    console.log("You Win! Rock beats Scissors");
  } else if (player_choice == "paper" && comp_choice == "rock") {
    WIN += 1;
    console.log("You Win! Paper beats Rock");
  } else if (player_choice == "scissors" && comp_choice == "paper") {
    WIN += 1;
    console.log("You Win! Scissors beats Paper");
  }

  // Loss outcome
  else if (player_choice == "scissors" && comp_choice == "rock") {
    LOSS += 1;
    console.log("You Lose! Rock beats Scissors");
  } else if (player_choice == "rock" && comp_choice == "paper") {
    LOSS += 1;
    console.log("You Lose! Paper beats Rock");
  } else if (player_choice == "paper" && comp_choice == "scissors") {
    LOSS += 1;
    console.log("You Lose! Scissors beats Paper");
  }
}

function play_round(choice_list) {
  let player1 = get_player_choice(choice_list);
  let computer = get_computer_choice(choice_list);
  determine_outcome(player1, computer);
}

function best_of_5() {
  if (WIN === 5 || (WIN >= 3 && LOSS <= 2) || (WIN >= 3 && TIE <= 2)) {
    console.log("\nYOU WIN!");
  } else if (LOSS === 5 || (LOSS >= 3 && WIN <= 2) || (LOSS >= 3 && TIE <= 2)) {
    console.log("\nCOMPUTER WINS!");
  } else {
    console.log("\nThe game is a TIE!");
  }
}

function display_scoreboard() {
  console.log(`\nWINS: ${WIN}    TIES: ${TIE}    LOSSES: ${LOSS}`);
}
