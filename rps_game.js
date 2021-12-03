/*
function playRound(playerSelection, computerSelection) {
    
    let playerSelectionPrompt = prompt("Please choose your weapon")
    let playerSelection = playerSelectionPrompt.toLowerCase()
    
    return playerSelection
    // return who won
}
*/

function playRound() {
    let playerSelection = prompt("Please choose your weapon");
    playerSelection = playerSelection.toLowerCase();
    const initComputerSelection = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
        console.log('Please provide a valid weapon.')
        return 
    }

    if (initComputerSelection == 1) {
        computerSelection = 'rock';
    } else if (initComputerSelection == 2) {
        computerSelection = 'paper';
    } else if (initComputerSelection == 3) {
        computerSelection = 'scissors';
    }

    let result = game_winner(playerSelection=playerSelection, computerSelection=computerSelection)

    return result
}

function game_winner(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('Rock beats scissors')
        return 1
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Paper beats rock')
        return 1
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Scissors beat paper')
        return 1
    } else {
        console.log('Sucks to suck - the computer chose ' + computerSelection + ' to beat you')
        return 0
    }

}

function playGame() {
    console.log("We're only playing 5 rounds - too bad.")

    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) { 
        let roundOutcome 
        roundOutcome = playRound()

        if (roundOutcome == 1) {
            playerScore++ 
        } else if (roundOutcome == 0) {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log("Congrats..you won... You beat a PC at rock-paper-scissors...")
    } else if (computerScore > playerScore) {
        console.log("You lost...really sucks to suck.")
    } else {
        console.log("You tied...how did you even get here...")
    }

    console.log("You scored: " + playerScore + " points.")
    console.log("The computer scored: " + computerScore + " points.")

}

console.log(playGame())