const displayResult = document.querySelector('.displayResult');
const imageBtn = document.querySelectorAll('.image');
const scoreNumberUser = document.querySelector('.scoreNumberUser');
const scoreNumberCPU = document.querySelector('.scoreNumberCPU')
let win = true;
let userScore = 0
let cpuScore = 0
let gameArray = ['rock','paper', 'scissors']

imageBtn.forEach(button => {
  button.addEventListener('click', function () {
 const userOption = button.getAttribute('id')
 gameEngine(userOption)
  })
});

function gameEngine(userOption){
  let cpuRandomArray = randomNumber()
  console.log(userOption,cpuRandomArray);
 if(userOption === cpuRandomArray){
  drawGame()}
  else{
    if(userOption === 'rock'){
      win = cpuRandomArray === 'paper'? false : true
    }
    else if(userOption === 'paper'){
      win = cpuRandomArray === 'scissors' ? false:true 
    }
    else{
      win = cpuRandomArray === 'rock' ? false:true 
    }

  }
  showWinner(win)
}

function randomNumber() {
  let randomCpu = Math.floor(Math.random()*3) 
   return gameArray[randomCpu];
}
function drawGame() {
console.log('game draw');
}
function showWinner(winner) {
  if(winner){
    userScore++
    scoreNumberUser.innerText = userScore
      displayResult.innerHTML = 'You Win 👑 the game'
      displayResult.style.color = 'green' 
  }
  else{
    cpuScore++
    scoreNumberCPU.innerText = cpuScore
    displayResult.innerHTML = 'You Lose 🍌 the Game'
    displayResult.style.color = 'red' 
  }
}
