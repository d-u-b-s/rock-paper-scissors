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
    console.log("computer chose " + computerChoice);
    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = prompt("rock, paper, or scissors? ");
    playerChoice = playerChoice.toLowerCase();
        // if (playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors" || playerChoice !== "gun") {
        //     playerChoice = "Invalid";
        //     return playerChoice;
        // }
    console.log("player chose " + playerChoice);
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

function game() {
    let wins = 0
    let losses = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result == "win") {
            wins += 1;
            console.log(result)
            console.log("wins: " + wins);
            console.log("losses: " + losses);
        } else if (result == "lose") {
            losses += 1;
            console.log(result)
            console.log("wins: " + wins);
            console.log("losses: " + losses);
        } else if (result == "tie") {
            wins += 1;
            losses += 1;
            console.log(result)
            console.log("wins: " + wins);
            console.log("losses: " + losses);
        }   
     }
    if (wins > losses) {
        console.log("YOU WIN");
    } else if (losses == wins) {
        console.log("TIE GAME");
    } else {
        console.log("YOU LOSE");
    }
} 
