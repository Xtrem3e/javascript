let max = 3;
let totalRounds = 5; // Total number of rounds
let currentRound = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * max);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`Round ${currentRound}:`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win this round! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        humanScore++;
    } else {
        console.log(`Computer wins this round! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        computerScore++;
    }

    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log("-------------------------------");

    currentRound++;

    if (currentRound > totalRounds) {
        declareWinner();
    } else {
        startNextRound();
    }
}

function declareWinner() {
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie game!");
    }
}

function startNextRound() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors:");
    if (humanChoice === null) {
        console.log("Game cancelled.");
        return;
    }
    humanChoice = humanChoice.trim();
    if (["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    } else {
        console.log("Not a valid option. Please choose Rock, Paper, or Scissors.");
        startNextRound();
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Start the first round
startNextRound();
