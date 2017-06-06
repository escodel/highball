/*jshint esversion: 6 */
const player = (function() {
  var playerOne = document.getElementById('player-1-Name');
  var playerTwo = document.getElementById('player-2-Name');
  var nineBall = document.querySelectorAll('.ball-9');
  
  function checkPlayer() {
    var playerOneName = document.getElementById('player-1-Name');
    var playerTwoName = document.getElementById('player-2-Name');    
    
    if ('art vandelay' === playerOneName.innerHTML.toLowerCase() || playerTwoName.innerHTML.toLowerCase()) {
      nineBall.forEach(function(ball) {
        ball.classList.add('av');
      });
    }
    
    if ('ian malcolm' === playerOneName.innerHTML.toLowerCase() || playerTwoName.innerHTML.toLowerCase()) {
      nineBall.forEach(function(ball) {
        ball.classList.add('im');
      });
    }    
  }
  
  playerOne.addEventListener('blur', checkPlayer);
  playerTwo.addEventListener('blur', checkPlayer);
})();

module.exports = player;