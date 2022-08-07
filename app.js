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
<<<<<<< HEAD
    let choices = ['Croc', 'Paper', 'Scissors'];
=======
    let choices = ['croc', 'paper', 'scissors'];
>>>>>>> eae1797249e6c3999c10adb31271e49279b4d340
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

const crocColor = () => {
    theCroc.style.border = '2.5px solid green';
    paper.style.border = '2.5px solid red';
    scissors.style.border = '2.5px solid red';
}

const paperColor = () => {
    theCroc.style.border = '2.5px solid red';
    paper.style.border = '2.5px solid green';
    scissors.style.border = '2.5px solid red';
}

const scissorsColor = () => {
    theCroc.style.border = '2.5px solid red';
    paper.style.border = '2.5px solid red';
    scissors.style.border = '2.5px solid green';
}

function pointSystem() {
    btnClick.forEach(btnClick => {
    btnClick.addEventListener('click', () => {     
       
    chosenItem.textContent = btnClick.childNodes[1].nextSibling.parentNode.value;
    
    const random = getComputerChoice();
    let tempValue = chosenItem.textContent;
    
        switch (tempValue + random) {
            case 'CrocScissors':
            case 'PaperCroc':
            case 'ScissorsPaper':
                correctAnswer.textContent = 'win';
                userCount++;
                crocColor();
                break;
            case 'CrocPaper':
            case 'PaperScissors':
            case 'ScissorsCroc':
                correctAnswer.textContent = 'loss';
                computerCount++;
                paperColor();
                break;
            case 'CrocCroc':
            case 'PaperPaper':
            case 'ScissorsScissors':
                correctAnswer.textContent = 'draw';
                scissorsColor();
                break;
        };

        
        compResult.textContent = random;
        playerOneScore.textContent = userCount;
        playerTwoScore.textContent = computerCount;
    });
});
};

pointSystem();