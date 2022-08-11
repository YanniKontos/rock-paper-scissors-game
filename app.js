const theCroc = document.getElementById('the-croc');   
const paper = document.getElementById('paper');         
const scissors = document.getElementById('scissors');  
const chosenItem = document.getElementById('decision');
const compResult = document.getElementById('computer-choice');
const correctAnswer = document.getElementById('correct-answer');
const btnClick = document.querySelectorAll('.item-decision');


let playerOneScore = document.getElementById('player-1-score');
let playerTwoScore = document.getElementById('player-2-score');
let userCount = 0;
let computerCount = 0;

function getComputerChoice() {
    let choices = ['Croc', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

const crocColor = () => {
    theCroc.style.border = '2.5px solid green';
    paper.style.border = '2.5px solid red';
    scissors.style.border = '2.5px solid red';
};

const paperColor = () => {
    theCroc.style.border = '2.5px solid red';
    paper.style.border = '2.5px solid green';
    scissors.style.border = '2.5px solid red';
};

const scissorsColor = () => {
    theCroc.style.border = '2.5px solid red';
    paper.style.border = '2.5px solid red';
    scissors.style.border = '2.5px solid green';
};

const drawColors = () => {
    theCroc.style.border = 'none';
    paper.style.border = 'none';
    scissors.style.border = 'none';
};

function pointSystem() {
    btnClick.forEach(btnClick => {
    btnClick.addEventListener('click', () => {     

        chosenItem.textContent = btnClick.childNodes[1].nextSibling.parentNode.value;
        const random = getComputerChoice();
        let tempValue = chosenItem.textContent;
    
    
        switch (tempValue + random) {
            case 'CrocScissors':
                crocColor();
                correctAnswer.textContent = 'win';
                userCount++;
                break;
                case 'PaperCroc':
                paperColor();
                correctAnswer.textContent = 'win';
                userCount++;
                break;
                case 'ScissorsPaper':
                scissorsColor();
                correctAnswer.textContent = 'win';
                userCount++;
                break;

            case 'CrocPaper':
                paperColor();
                correctAnswer.textContent = 'loss';
                computerCount++;
                break;
            case 'PaperScissors':
                scissorsColor();
                correctAnswer.textContent = 'loss';
                computerCount++;
                break;
            case 'ScissorsCroc':
                crocColor();
                correctAnswer.textContent = 'loss';
                computerCount++;
                break;
                
            case 'CrocCroc':
            case 'PaperPaper':
            case 'ScissorsScissors':
                correctAnswer.textContent = 'draw';
                drawColors();
                break;                
            };

        compResult.textContent = random;
        playerOneScore.textContent = userCount;
        playerTwoScore.textContent = computerCount;
        
        });
    });
};

pointSystem();