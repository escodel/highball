/*jshint esversion: 6 */
const resetRack = require('./resetRack');

const resetGame = (function() {
  const resetGameButton = document.querySelector('.reset-game');
  const gameButtons = document.querySelector('.game-buttons');
  
  const resetGameDetails = function() {
    confirm('Are you sure you\'ve finished your game?');
    window.location.reload();
  }
  
  const showGameButtons = function() {
    resetRack.displayNone();
    gameButtons.style.marginTop = '.5rem';
    gameButtons.style.display = 'block';
    gameButtons.classList.remove('hidden');
  }
  
  const hideGameButtons = function() {
    gameButtons.classList.add('hidden');
  }
  
  resetGameButton.addEventListener('click', resetGameDetails);
  
  return {
    showGameButtons: showGameButtons,
    hideGameButtons: hideGameButtons
  };
})();

module.exports = resetGame;