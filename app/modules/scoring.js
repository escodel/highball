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
  const calcScore = function() {
    let deadBallTable = document.querySelectorAll('.dead-ball-table') || 0;
//    let lastDeadBall = deadBallTable[deadBallTable.length - 1] || 0;
    let deadBallTotal = 0;
    for (var i = 0; i < deadBallTable.length; i++) {
      let deadBallTotal = deadBallTable[i].innerHTML;
          console.log(deadBallTotal);
    }

    return Number(playerOneScore.innerHTML) + Number(playerTwoScore.innerHTML) + Number(deadBalls.innerHTML) + Number(deadBallTotal);
  };

  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function(ev) {
      let evTarget = ev.target;
      // If ballLeft
      if (evTarget.classList.contains('left')) { 
        if (evTarget.classList.contains('neutral')) {
          playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
            let currentScore = calcScore();
            if ((currentScore % 10) === 0) {
              rackTable.appendColumn(ev);
              resetRack.showRackButtons();
            }
            return;
          }       
        return;          
        }
        if (evTarget.classList.contains('active')) {
          playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
            return;
          }     
        return;
        }
        if (evTarget.classList.contains('inactive')) {
          playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
            return;
          }               
          return;
        }
      }
      // If ballRight
      if (evTarget.classList.contains('right')) { 
        if (evTarget.classList.contains('neutral')) {
          playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
            let currentScore = calcScore();
            if ((currentScore % 10) === 0) {
              rackTable.appendColumn(ev);
              resetRack.showRackButtons();
            }
            return;
          }       
        return;          
        }
        if (evTarget.classList.contains('active')) {
          playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
            return;
          }     
        return;
        }
        if (evTarget.classList.contains('inactive')) {
          playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
            return;
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