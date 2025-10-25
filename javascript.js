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

function getHumanChoice() {
    let userChoice = prompt("Enter your choice between rock, paper, and scissors. ").toLowerCase();
    return userChoice.toLowerCase()
}

console.log(getHumanChoice())
console.log(getComputerChoice())