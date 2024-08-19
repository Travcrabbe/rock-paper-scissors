let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function newRound(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("User wins!");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock": 
            console.log("CPU wins!");
            break;
        default: 
            console.log("It's a draw!")
    }
}

rock_div.addEventListener("click", function() {
    newRound("rock");
})

paper_div.addEventListener("click", function() {
    newRound("paper");
})
scissors_div.addEventListener("click", function() {
    newRound("scissors");
})