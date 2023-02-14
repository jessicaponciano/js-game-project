let playerCount = 0;
let computerCount = 0;

function computerPlay() {
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
    let computerRandomSelection = computerOptions[Math.floor(Math.random() * 3)];
    return computerRandomSelection;
}

function userPlay(i) {
    alert(`Round ${i+1}\nPlayer = ${playerCount} x Computer = ${computerCount}`);
    let playerInput = window.prompt("Please, type your choise:\n - Rock\n - Paper\n - Scissors");
    if (playerInput) {
        playerInput = playerInput.toUpperCase();
        return playerInput;
    } else {
        alert("End Game");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert(`DRAW! ${playerSelection} = ${computerSelection}`);
        return "draw";
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        alert(`YOU WIN! ${playerSelection} BEATS ${computerSelection}`);
        return "win";
    } else {
        alert(`YOU LOSE! ${computerSelection} BEATS ${playerSelection}`);
        return "lose";
    }
}

function inputCheck(i, playerInput) {
    let playResult = "";
    let inputCheck = playerInput.replace(/\s*/g, "");

    if(/\b(rock|paper|scissors)\b/i.test(inputCheck) && /(rock|paper|scissors)/i.test(playerInput)) {
        let playerSelection = inputCheck;
        let computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}. You chose ${playerSelection}`);
       
        playResult = playRound(playerSelection, computerSelection);
        console.log(playResult);
        return playResult;
    } else {
        alert("Invalid input");
        return i;
    }
}

function game(){
    alert("Let's start a game! Rock, Paper or Scissors");
    for(let i=0; i<5; i++) {
        let playerInput = userPlay(i);
        let playResult = inputCheck(i, playerInput);

        if(typeof playResult === "number") {
            i--;
        } else {
            if(playResult.includes("win")) {
                playerCount++;
                console.log(`Your score: ${playerCount}`);
                console.log(`Computer score: ${computerCount}`);
            } else if(playResult.includes("lose")) {
                computerCount++;
                console.log(`Computer score: ${computerCount}`);
                console.log(`Your score: ${playerCount}`);
            } else if(playResult.includes("draw")) {
                    console.log(`Computer score: ${computerCount}`);
                    console.log(`Your score: ${playerCount}`);
            } else {
                console.log("Error");
            }
        }
    }
    finalResult(playerCount, computerCount);
}

function finalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert("Final result: You are the Winner!");
    } else if (playerScore < computerScore ) {
        alert("Final result: You Lost! Try again!");
    } else {
        alert("Final result: Draw!");
    }
}

game();