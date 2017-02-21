const scoring = (function() {
  const ball = document.querySelectorAll('.ball');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  
  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function() {
      const ballActiveLeft = document.querySelectorAll('.diamond-left .ball-active');
      const ballActiveRight = document.querySelectorAll('.diamond-right .ball-active')
      const nineBallLeft = document.querySelector('.diamond-left .ball-9');
      const nineBallRight = document.querySelector('.diamond-right .ball-9');
      
      playerOneScore.innerHTML = ballActiveLeft.length;
      playerTwoScore.innerHTML = ballActiveRight.length;
      
      if (nineBallLeft.classList.contains('ball-active')) {
        playerOneScore.innerHTML++
      } else if (nineBallRight.classList.contains('ball-active')) {
        playerTwoScore.innerHTML++
      }
    });
  }
  
})();

module.exports = scoring;