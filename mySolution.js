let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return (Math.floor(Math.random()*10))
}


  

function compareGuesses(humanGuess, computerGuess, target){
  if (0 < humanGuess > 9){
    return console.log('out of range')
  }
  if (Math.abs(humanGuess === computerGuess)) {
    return true;
  }else if ( Math.abs(humanGuess - target === computerGuess - target)) {
    return true;
  }else if (Math.abs(humanGuess - target < computerGuess - target)){
    return true;
  } else {
    return false
  } 
}

function updateScore(winner){
 if (winner === 'human'){
   humanScore += 1
 }else {
   computerScore += 1
 }
}

function advanceRound() {
return currentRoundNumber = currentRoundNumber + 1;
}