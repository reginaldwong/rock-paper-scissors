const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playSingleRound() {
    let playerSelection = prompt("Pick one of the following: rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay(); 

    // IF PLAYER CHOOSES ROCK:
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return ("Tie! Play again.");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return ("You lose! Paper beats rock.");
        computerCounter += 1;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return ("You win! Rock beats scissors.");
        playerCounter += 1;
    } 

    // IF PLAYER CHOOSES PAPER:
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return ("You win! Paper beats rock.");
        playerCounter += 1;
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return ("Tie! Play again.");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return ("You lose! Scissors beats paper.");
        computerCounter += 1;
    }

    // IF PLAYER CHOOSES SCISSORS:
    if (playerSelection === "scissors" && computerSelection === "Rock") {
        return ("You lose! Rock beats scissors.");
        computerCounter += 1;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return ("You win! Scissors beats paper.");
        playerCounter += 1;
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return ("Tie! Play again.");
    }
}

function endGame() {
    if (playerCounter <= 3) {
        return "Congratulations! You Win!"
    } else if (computerCounter <= 3) {
        return "You lose."
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        console.log(playSingleRound());
    }
};

console.log(game());









