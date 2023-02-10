function getComputerChoice() {
    let computerChoice = ""
    const roll = Math.random();
    if (roll > 0 && roll <= 0.33) {
        computerChoice = "rock";
    } else if (roll > 0.33 && roll <= 0.66) {
        computerChoice = "paper";
    } else if (roll > 0.66 && roll <= 0.99) {
        computerChoice = "scissors";
    } else {
        computerChoice = "gun";
    }
    console.log(computerChoice);
};
console.log(getComputerChoice())



function playRound(computerChoice, playerChoice)