
let secretNumber = Math.trunc(Math.random()*20) +1

const input = document.querySelector('#input-box');
console.log(input.value);
const scorep = document.querySelector('.clue');
const guess = document.querySelector('.guess');
const secretBox = document.querySelector('.middle');
const checkButton = document.querySelector('#check-button');
const reset = document.querySelector('.button-reset');
const highScore = document.querySelector('.high-number');

let score = 20;
let highValue = 0;

checkButton.addEventListener('click',function(){
     
    if(input.value == secretNumber){
        secretBox.textContent = secretNumber;
        highScore.textContent = (score > highValue) ? `High Score : ${score}`:`High Score : ${highValue}`;
        guess.textContent = "Mached";
        scorep.textContent = `Score : ${score--}`
    }else if(input.value > secretNumber){
        guess.textContent = "Too High"
        scorep.textContent = `Score : ${score--}`
    }else{
        guess.textContent = "Too Low"
        scorep.textContent = `Score : ${score--}`
    }


})

reset.addEventListener('click',function(){
    score = 20;
    scorep.textContent = `Score : ${score}`;
    secretBox.textContent = `?`;
    secretNumber = Math.trunc(Math.random()*20) +1;
    guess.textContent = "Start Guessing Number ...";
})
