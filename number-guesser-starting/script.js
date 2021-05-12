let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9)
}

function compareGuesses(user, computer, target){
  if(Math.abs(user-target) < Math.abs(computer-target)){
    return true
  } else if(Math.abs(computer-target) < Math.abs(user-target)){
    return false
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore = humanScore + 1
  } else if(winner === 'computer'){
    computerScore = computerScore + 1
  }
}

function advanceRound(){
  currentRoundNumber = currentRoundNumber + 1
}

function getAbsoluteDistance(){
  
}


//console.log(generateTarget())
//console.log(compareGuesses(9, 4, 3))
