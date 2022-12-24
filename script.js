let choiceArray = ['rock', 'scissors', 'paper'];

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let score = 0;

let optionContainer = document.querySelector('.option-select');
let gameArea = document.querySelector('.game-started');
let playerOptionDiv = document.querySelector('.player-option');
let botOptionDiv = document.querySelector('.bot-option');
let resetBtn = document.querySelector('.play-again')
let resetBtnSmall = document.querySelector('.play-again-small')
let scoreDiv = document.querySelector('.score-display')
let winDiv = document.getElementById('win')
let winDivSmall = document.getElementById('winSmall')

let currentChoice = ''
let botChoice = ''

rock.addEventListener('click', () => {
  currentChoice = 'rock'
  optionClickHandler('rock');
})

scissors.addEventListener('click', () => {
  currentChoice = 'scissors'
  optionClickHandler('scissors');
})

paper.addEventListener('click', () => {
  currentChoice = 'paper'
  optionClickHandler('paper');
})

resetBtn.addEventListener('click', () => {
  resetGame()
})

resetBtnSmall.addEventListener('click', () => {
  resetGame()
})

let optionClickHandler = (playerOption) => {
  let pcChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
  botChoice = pcChoice;
  optionContainer.style.display = 'none'
  gameArea.style.display = 'block'
  playerOptionDiv.classList.add(currentChoice)
  botOptionDiv.classList.add(pcChoice)
  displayChoices(playerOption, pcChoice)
  checkWinConditions(playerOption, pcChoice)
}

let checkWinConditions = (player, bot) => {
  if(bot === 'scissors' && player === 'paper') {
    updateScore(-1)
  } else if (bot === 'scissors' && player === 'rock') {
    updateScore(1)
  } else if (bot === 'paper' && player === 'rock') {
    updateScore(-1)
  } else if (bot === 'paper' && player === 'scissors') {
    updateScore(1)
  } else if (bot === 'rock' && player === 'scissors') {
    updateScore(-1)
  } else if (bot === 'rock' && player === 'paper') {
    updateScore(1)
  } else if (bot === player) {
    updateScore(0);
    return;
  }
}

let updateScore = (value) => {
  score += value
  if(score < 0) {
    score = 0;
  }
  scoreDiv.innerText = score;

  if(value < 0) {
    winDiv.innerText = 'Lose'
    winDivSmall.innerText = 'Lose'
  } else if (value === 0) {
    winDiv.innerText = 'Draw'
    winDivSmall.innerText = 'Draw'
  }
  else {
    winDiv.innerText = 'Win'
    winDivSmall.innerText = 'Win'
  }
}

let resetGame = () => {
  optionContainer.style.display = 'block'
  gameArea.style.display = 'none'
  playerOptionDiv.classList.remove(currentChoice)
  botOptionDiv.classList.remove(botChoice)
}

let displayChoices = (playerOption, botOption) => {
  playerOptionDiv.src = `./images/icon-${playerOption}.svg`;
  botOptionDiv.src = `./images/icon-${botOption}.svg`
}