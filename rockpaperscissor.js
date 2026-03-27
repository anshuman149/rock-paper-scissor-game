let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choices button");

const compChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const playGame = (userChoice) => {
    const computerChoice = compChoice();

    // Show the move choices
    document.getElementById("move").innerText = `You chose ${userChoice}, Computer chose ${computerChoice}`;

    if (userChoice === computerChoice) {
        drawGame();
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        userscore++;
        document.getElementById("message").innerText = "You win this round!";
    } else {
        compscore++;
        document.getElementById("message").innerText = "Computer wins this round!";
    }

    document.getElementById("player-score").innerText = userscore;
    document.getElementById("computer-score").innerText = compscore;

    // Check overall winner (best of 5)
    showWinner();
};

const drawGame = () => {
    document.getElementById("message").innerText = "It's a draw!";
};

const showWinner = () => {
    if (userscore >= 5 || compscore >= 5) {
        if (userscore > compscore) {
            document.getElementById("message").innerText = "🎉 Congratulations! You are the overall winner!";
        } else if (compscore > userscore) {
            document.getElementById("message").innerText = "💻 Computer is the overall winner! Better luck next time!";
        } else {
            document.getElementById("message").innerText = "🤝 The game is a draw!";
        }
    }
};

// Reset game function
const resetGame = () => {
    userscore = 0;
    compscore = 0;
    document.getElementById("player-score").innerText = userscore;
    document.getElementById("computer-score").innerText = compscore;
    document.getElementById("message").innerText = "Game reset! Make your move!";
    document.getElementById("move").innerText = "Make your move!";
};

// Attach event listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
document.getElementById("reset").addEventListener("click", resetGame);