const rackTable = require('./rackTable');
const resetRack = require('./resetRack');

const scoring = (function() {
  const ball = document.querySelectorAll('.ball');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  const deadBalls = document.querySelector('.dead-ball-score');
    
  const playerOneSkill = document.querySelector('.skill-level.left');
  const playerTwoSkill = document.querySelector('.skill-level.right');
  const playerOneGoal =  document.querySelector('#leftPlayerGoal');
  const playerTwoGoal =  document.querySelector('#rightPlayerGoal');
  
  const increase = obj => obj + 1;
  const decrease = obj => obj - 1;
  //calculates total number of dead balls in rack table and returns that value plus playerOneScore, playerTwoScore and current dead balls
  const calcScore = function() {
    let deadBallTable = document.querySelectorAll('.dead-ball-table') || 0;
    var deadBallTotal = 0;
    for (var i = 0; i < deadBallTable.length; i++) {
      deadBallTotal += Number(deadBallTable[i].innerHTML);
    }

    return Number(playerOneScore.innerHTML) + Number(playerTwoScore.innerHTML) + Number(deadBalls.innerHTML) + Number(deadBallTotal);
  };

  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function(ev) {
      let evTarget = ev.target;
      // If ballLeft, score left and increment 9 ball twice
      if (evTarget.classList.contains('left')) { 
        if (evTarget.classList.contains('neutral')) {
          playerOneScore.innerHTML = increase(Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = increase(Number(playerOneScore.innerHTML));
          }       
        }
        if (evTarget.classList.contains('active')) {
          playerOneScore.innerHTML = decrease(Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(Number(playerOneScore.innerHTML));
          }     
        }
        if (evTarget.classList.contains('inactive')) {
          playerTwoScore.innerHTML = decrease(Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(Number(playerTwoScore.innerHTML));
          }               
        }
      }
      // If ballRight, score right and increment 9 ball twice
      if (evTarget.classList.contains('right')) { 
        if (evTarget.classList.contains('neutral')) {
          playerTwoScore.innerHTML = increase(Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = increase(Number(playerTwoScore.innerHTML));
          }       
        }
        if (evTarget.classList.contains('active')) {
          playerTwoScore.innerHTML = decrease(Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(Number(playerTwoScore.innerHTML));
          }     
        }
        if (evTarget.classList.contains('inactive')) {
          playerOneScore.innerHTML = decrease(Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(Number(playerOneScore.innerHTML));
          }               
        }
      }
      
      // Calculate score on each click. If modulo 10, reset rack functionality.
      let currentScore = calcScore();
      if ((currentScore % 10) === 0) {
//    Add back once we decouple score and UI        
//        if (document.querySelectorAll('.neutral').length !== 0) {
//          return;
//        }
        rackTable.appendColumn(ev);
        resetRack.showRackButtons();
        let inputs = document.querySelectorAll('.row');
        for (let i = 0; i < inputs.length; i++) {
          if (!inputs[i].classList.contains('row-top')){
		    inputs[i].style.pointerEvents = 'none';
          }
        }
      }
    });
  }      

  playerOneSkill.addEventListener('change', function(ev) {
    switch(ev.currentTarget.value) {
      case "1" : playerOneGoal.innerHTML = 14;
      break;
      case "2": playerOneGoal.innerHTML = 19;
      break;
      case "3": playerOneGoal.innerHTML = 25;
      break;
      case "4": playerOneGoal.innerHTML = 31;
      break;
      case "5": playerOneGoal.innerHTML = 38;
      break;
      case "6": playerOneGoal.innerHTML = 46;
      break;
      case "7": playerOneGoal.innerHTML = 55;
      break;
      case "8": playerOneGoal.innerHTML = 65;
      break;
      case "9": playerOneGoal.innerHTML = 75;
      break;
    }
})
playerTwoSkill.addEventListener('change', function(ev) {
    switch(ev.currentTarget.value) {
      case "1" : playerTwoGoal.innerHTML = 14;
      break;
      case "2": playerTwoGoal.innerHTML = 19;
      break;
      case "3": playerTwoGoal.innerHTML = 25;
      break;
      case "4": playerTwoGoal.innerHTML = 31;
      break;
      case "5": playerTwoGoal.innerHTML = 38;
      break;
      case "6": playerTwoGoal.innerHTML = 46;
      break;
      case "7": playerTwoGoal.innerHTML = 55;
      break;
      case "8": playerTwoGoal.innerHTML = 65;
      break;
      case "9": playerTwoGoal.innerHTML = 75;
      break;
    }
})

})();

module.exports = scoring;