// Rock paper Scissors
// The game will be accessed only from the console (right now)
// Player1 will play against the computer

let choices = ["rock", "paper", "scissors"];

// TODO: get computer choice (randomised)
function get_computer_choice(choice_list) {
  let choice;
  choice = Math.floor(Math.random() * choices.length);
  return choice_list[choice]; // return the computer choice
}

// TODO: get user choice
function get_player_choice(choice_list) {
  let user_response = prompt("rock, paper, scissors? ").trim().toLowerCase();
  if (is_valid_choice(user_response, choice_list)) {
    console.log(`Player choice ${user_response} is valid`);
  } else {
    console.log(`Player choice "${user_response}" invalid`);
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

get_player_choice(choices);
