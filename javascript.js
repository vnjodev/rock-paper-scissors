function playGame(){
    humanScore = 0
    computerScore = 0
    for (let i = 1; i <= 5; i++){
        console.log("Round " + (i));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Scores: You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log(`Player wins with ${humanScore} - ${computerScore}!`);
    } else if (computerScore > humanScore){
        console.log(`Computer wins with ${computerScore} - ${humanScore}!`);
    } else {
        console.log("It's a draw!");
    }
}
// console.log("Hello World!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let userChoice = prompt("Enter your choice between rock, paper, and scissors. ").toLowerCase();
    return userChoice.toLowerCase()
}

// console.log(getHumanChoice())

function playRound (humanChoice, computerChoice) {
    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        console.log(`You win this round! | ${humanChoice} beats ${computerChoice}!` );
        // console.log(humanChoice + " " + "beats" + " " + computerChoice);
        humanScore++;
    }
    else {
        console.log(`Computer won this round! | ${computerChoice} beats ${humanChoice}!`)
        // console.log(computerChoice + " " + "beats" + " " + humanChoice);
        computerScore++
    };

    // console.log("Your score: " + humanScore);
    // console.log("Computer score: " + computerScore);
    console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
}

playGame();