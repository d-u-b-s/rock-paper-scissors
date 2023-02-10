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
    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = prompt("rock, paper, or scissors? ");
    playerChoice = playerChoice.toLowerCase();
        // if (playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors" || playerChoice !== "gun") {
        //     playerChoice = "Invalid";
        //     return playerChoice;
        // }
    console.log(playerChoice);
    return playerChoice;
}

function playRound() {
    let playerChoice = getPlayerChoice();    
    let computerChoice = getComputerChoice();
    
    
    let result = "null";
    if (computerChoice == "gun" && playerChoice != 'gun') {
        result = "lose";
        console.log(result);
        return result;
    } else if (computerChoice == "rock" && playerChoice == 'scissors') {
        result = "lose";
        console.log(result);
        return result;
    } else if (computerChoice == "scissors" && playerChoice == 'paper') {
            result = "lose";
            console.log(result);
            return result;
    } else if (computerChoice == "paper" && playerChoice == 'rock') {
        result = "lose";
        console.log(result);
        return result;
    } else if (computerChoice != "gun" && playerChoice == 'gun') {
            result = "win";
            console.log(result);
            return result;
    } else if (computerChoice == "rock" && playerChoice == 'paper') {
        result = "win";
        console.log(result);
        return result;
    } else if (computerChoice == "paper" && playerChoice == 'scissors') {
        result = "win";
        console.log(result);
        return result;
    } else if (computerChoice == "scissors" && playerChoice == 'rock') {
        result = "win";
        console.log(result);
        return result;
    } else if (computerChoice === playerChoice) {
        result = 'tie';
        console.log(result);
        return result;    
    }
    
};
