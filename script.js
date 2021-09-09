const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");
const gameMessage = document.querySelector("#game-message");

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}; 

function win() {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    if (userScore >= 5) {
        endGame();
    } 
}

function lose() {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    if (computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    if (userScore >= 5) {
    alert("Game over! You win!")
    } else if (computerScore >= 5) {
        alert("Game over! Computer wins.")
    }
 } ;

function game(userChoice) {
   const computerChoice = getComputerChoice();
   let playerSelection = userChoice;

    if (playerSelection === computerChoice.toLowerCase()) {
        gameMessage.innerHTML = "Tie! Play again."
    }

   if (playerSelection === "rock" && computerChoice === "Paper") {
       lose();
       gameMessage.innerHTML = "You lose! Paper beats rock."
   } else if (playerSelection === "rock" && computerChoice === "Scissors") {
        win();
        gameMessage.innerHTML = "You win! Rock beats scissors."
   }

   if (playerSelection === "scissors" && computerChoice === "Paper") {
        win();
        gameMessage.innerHTML = "You win! Scissors beats paper."
    } else if (playerSelection === "scissors" && computerChoice === "Rock") {
        lose();
        gameMessage.innerHTML = "You lose! Rock beats scissors."
    }

    if (playerSelection === "paper" && computerChoice === "Rock") {
        win();
        gameMessage.innerHTML = "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerChoice === "Scissors") {
        lose(); 
        gameMessage.innerHTML = "You lose! Scissors beats paper."
    }
};

game();

function main() {
    const rock = document.querySelector("#rock")
        rock.addEventListener('click', () => {
        game("rock");
    });

    const paper = document.querySelector("#paper")
        paper.addEventListener('click', () => {
        game("paper");
    });

    const scissors = document.querySelector("#scissors")
        scissors.addEventListener('click', () => {
        game("scissors");
    });
};

main();








