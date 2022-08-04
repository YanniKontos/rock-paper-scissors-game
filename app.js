const theCroc = document.getElementById('the-croc');   
const paper = document.getElementById('paper');         
const scissors = document.getElementById('scissors');  
const chosenItem = document.getElementById('decision');
const compResult = document.getElementById('computer-choice');
const correctAnswer = document.getElementById('correct-answer');
const btnClick = document.querySelectorAll('.item-decision');

let playerOneScore = document.getElementById('player-1-score');
let playerTwoScore = document.getElementById('player-2-score');
let temp = document.createElement('temp')
let userCount = 0;
let computerCount = 0;

function getComputerChoice() {
    let choices = ['croc', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length.toString())];
    return randomChoice;
};

function pointSystem() {
    btnClick.forEach(btnClick => {
    btnClick.addEventListener('click', () => {     

    const random = getComputerChoice();
    let tempValue = chosenItem.textContent;
    
        switch (tempValue + random) {
            case 'crocscissors':
            case 'papercroc':
            case 'scissorspaper':
                correctAnswer.textContent = 'win';
                userCount++;
                break;
            case 'crocpaper':
            case 'paperscissors':
            case 'scissorscroc':
                correctAnswer.textContent = 'loss';
                computerCount++;
                break;
            case 'croccroc':
            case 'paperpaper':
            case 'scissorsscissors':
                correctAnswer.textContent = 'draw';
                break;
        };

    chosenItem.textContent = btnClick.childNodes[1].nextSibling.parentNode.value;
    playerOneScore.textContent = userCount;
    playerTwoScore.textContent = computerCount;
    compResult.textContent = random;

        });
    });
};

pointSystem();