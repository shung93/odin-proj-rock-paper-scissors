function playRound(playerRPS) {
    let playerSelection = playerRPS;
    playerSelection = playerSelection.toLowerCase();
    const initComputerSelection = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
        console.log('Please provide a valid option.')
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
        console.log('Rock beats scissors.')
        return 1
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Paper beats rock.')
        return 1
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Scissors beats paper.')
        return 1
    }  else if (playerSelection == computerSelection) {
        console.log('Tied...')
        return null
    } else {
        console.log('You lost the round. The computer chose ' + computerSelection + ' to beat you.')
        return 0
    }

}

function playGame() {
    console.log("We're only playing 5 rounds - too bad.") // change this to score box

    let playerScore = 0
    let computerScore = 0

    // for (let i = 0; i < 5; i++) { 
    //     let roundOutcome 
    //     roundOutcome = playRound(playerRPS = playerInput)
    //     if (roundOutcome == 1) {
    //         playerScore++ 
    //     } else if (roundOutcome == 0) {
    //         computerScore++
    //     }
    // }

    let button = document.getElementsByClassName("button");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("mouseover", function(event) {
            button[i].classList.add("hoverOut") // add hover to the CSS 
            event.target.style.color = "gray" // change font to gray
        });

        button[i].addEventListener("mouseout", function(event) {
            button[i].classList.add("hoverIn"); // remove hover to the CSS 

            setTimeout(function() {
                button[i].classList.remove("hoverOut");
                button[i].classList.remove("hoverIn");
                event.target.style.color = "" // revert font color
            }, 251);
        });
    };

    for (let i = 0; i < button.length; i++) { 
        let roundOutcome
        button[i].addEventListener("click", function(event) {
            roundOutcome = playRound(playerRPS = button[i]['id'])

            if (roundOutcome == 1) {
                playerScore++ 
            } else if (roundOutcome == 0) {
                computerScore++
            }

            document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;

            if (playerScore >= 5 || computerScore >= 5) {
                if (playerScore > computerScore) {
                    window.alert("Congrats..you won... You beat a PC at rock-paper-scissors...")
                } else if (computerScore > playerScore) {
                    window.alert("You lost...womp womp...")
                } else {
                    window.alert("You tied...how did you even get here...")
                }
                playerScore = 0;
                computerScore = 0;
                document.getElementById("playerScore").innerHTML = "";
                document.getElementById("computerScore").innerHTML = "";
            }

        });
    };

    
    

    // console.log("You scored: " + playerScore + " points.")
    // console.log("The computer scored: " + computerScore + " points.")

}

playGame()






// console.log(playGame())