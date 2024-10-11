const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const playerChoice = e.target.alt;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        updateScore(winner);
        showResult(playerChoice, computerChoice, winner);
        animateChoice(e.target);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = `Player: ${playerScore}`;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    }
}

function showResult(playerChoice, computerChoice, winner) {
    if (winner === 'draw') {
        resultText.textContent = `It's a draw! You both chose ${playerChoice}`;
    } else if (winner === 'player') {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function animateChoice(choiceElement) {
    choiceElement.classList.add('glow');
    setTimeout(() => {
        choiceElement.classList.remove('glow');
    }, 1000);
}
