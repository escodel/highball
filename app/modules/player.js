/*jshint esversion: 6 */
const player = (function() {
  var playerOne = document.getElementById('player-1-Name');
  var nineBall = document.querySelectorAll('.ball-9');
  
  function checkPlayer() {
    var playerOneName = document.getElementById('player-1-Name');
    var playerTwoName = document.getElementById('player-2-Name');    
    
    if (playerOneName.innerHTML.toLowerCase() === 'art vandelay') {
      nineBall.forEach(function(ball) {
        ball.classList.add('av');
      })
    }
  }
  
  playerOne.addEventListener('blur', checkPlayer);
})();

module.exports = player;