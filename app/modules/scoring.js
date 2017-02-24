const scoring = (function() {
  const ball = document.querySelectorAll('.ball');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  
  const increase = obj => obj + 1;
  const decrease = obj => obj - 1;

  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function(ev) {
      let evTarget = ev.target;
      // If ballLeft
      if (evTarget.classList.contains('left')) { 
        if (evTarget.classList.contains('neutral')) {
          playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
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
      
      
//      if (evTarget.classList.contains('neutral') && evTarget.classList.contains('left')) {
//        playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
//        return;
//      }
//      if (evTarget.classList.contains('active') && evTarget.classList.contains('left')) {
//        playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
//        return;
//      }
//      if (evTarget.classList.contains('neutral') && evTarget.classList.contains('right')) {
//        playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
//        return;
//      }
//      if (evTarget.classList.contains('active') && evTarget.classList.contains('right')) {
//        playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
//        return;
//      }
    });
  }
  
//  for (let i = 0; i < ball.length; i++) {
//    ball[i].addEventListener('click', function(ev) {
//      const ballActiveLeft = document.querySelectorAll('.diamond-left .ball-active');
//      const ballActiveRight = document.querySelectorAll('.diamond-right .ball-active');
//      const nineBallLeft = document.querySelector('.diamond-left .ball-9');
//      const nineBallRight = document.querySelector('.diamond-right .ball-9');
//      const deadBalls = document.querySelectorAll('.diamond-left .ball-dead');
//      const deadBallScore = document.querySelector('.dead-ball-score');
//      var rack = document.querySelector('.rack').innerHTML;
//
//      if (rack === '1') {
//        playerOneScore.innerHTML = ballActiveLeft.length;
//        playerTwoScore.innerHTML = ballActiveRight.length;
//      } else if (rack !== '1' && ev.target.parentElement.parentElement.classList.contains('diamond-left')) {
//        playerOneScore.innerHTML++;
//      } else {
//        playerTwoScore.innerHTML++;
//      }
//      deadBallScore.innerHTML = deadBalls.length;      
//      
//      if (nineBallLeft.classList.contains('active')) {
//        playerOneScore.innerHTML++
//      } else if (nineBallRight.classList.contains('active')) {
//        playerTwoScore.innerHTML++
//      }
//    });
//  }
  
  return {
    playerOneScore: playerOneScore,
    playerTwoScore: playerTwoScore,
    increase: increase
  }
  
})();

module.exports = scoring;