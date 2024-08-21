let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
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
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock": 
            lose(userChoice, computerChoice);
            break;
        default: 
            draw(userChoice);
    }
}

function win(userChoice, computerChoice) {
    const userChoice_classList = document.getElementById(userChoice).classList;
    console.log("User wins!");
    userScore++;
    userScore_span.innerHTML = userScore;
    // Make letter uppercase
    const upperUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.substring(1);

    result_p.innerHTML = `${upperUserChoice} beats ${computerChoice}. You win!`;
    userChoice_classList.add("green-glow");
    setTimeout(() => userChoice_classList.remove("green-glow"), 300);

}

function lose(userChoice, computerChoice) {
    const userChoice_classList = document.getElementById(userChoice).classList;
    console.log("User loses!");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    // Make letter uppercase
    const upperComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);

    result_p.innerHTML = `${upperComputerChoice} beats ${userChoice}. You lose!`;
    userChoice_classList.add("red-glow");
    setTimeout(() => userChoice_classList.remove("red-glow"), 300);
}

function draw(userChoice) {
    const userChoice_classList = document.getElementById(userChoice).classList;
    console.log("Draw!");
    const upperUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.substring(1);
    result_p.innerHTML = `You both threw ${userChoice}. Draw!`;
    userChoice_classList.add("gray-glow");
    setTimeout(function() {userChoice_classList.remove("gray-glow")}, 300);
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