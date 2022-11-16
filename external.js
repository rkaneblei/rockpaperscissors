//computer random selection

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("Player wins! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("Computer wins! Paper beats rock. You suck!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("Player wins! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("Computer wins! Scissors beat paper. You suck!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("Player wins! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("Computer wins! Rock beats scissors. You suck!");
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon").toLowerCase();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));