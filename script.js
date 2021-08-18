const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let playerCounter, computerCounter = 0;

    // IF PLAYER CHOOSES ROCK:
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return ("Tie! Play again.");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return ("You lose! Paper beats rock.");
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return ("You win! Rock beats scissors.");
    } 

    // IF PLAYER CHOOSES PAPER:
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return ("You win! Paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return ("Tie! Play again.");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return ("You lose! Scissors beats paper.");
    }

    // IF PLAYER CHOOSES SCISSORS:
    if (playerSelection === "scissors" && computerSelection === "Rock") {
        return ("You lose! Rock beats scissors.");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return ("You win! Scissors beats paper.");
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return ("Tie! Play again.");
    }
}

let playerSelection = "rock";
const computerSelection = computerPlay();








