const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}; 

function game(userChoice) {
   const computerChoice = getComputerChoice();
   let playerSelection = userChoice;

    if (playerSelection === computerChoice.toLowerCase()) {
        console.log("Tie! Play again.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
    }

   if (playerSelection === "rock" && computerChoice === "Paper") {
       computerScore++;
       console.log("You lose! Paper beats rock.");
       console.log(`The score is currently ${userScore} to ${computerScore}.`);
   } else if (playerSelection === "rock" && computerChoice === "Scissors") {
        userScore++;
        console.log("You win! Rock beats scissors.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
   }

   if (playerSelection === "scissors" && computerChoice === "Paper") {
        userScore++;
        console.log("You win! Scissors beats paper.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
    } else if (playerSelection === "scissors" && computerChoice === "Rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
    }

    if (playerSelection === "paper" && computerChoice === "Rock") {
        userScore++;
        console.log("You win! Paper beats rock.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
    } else if (playerSelection === "paper" && computerChoice === "Scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper.");
        console.log(`The score is currently ${userScore} to ${computerScore}.`);
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








