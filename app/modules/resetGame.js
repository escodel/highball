/*jshint esversion: 6 */
const resetRack = require('./resetRack');
const matchPoints = require('./matchPoints');

const resetGame = (function() {
  const undoLastPointButton = document.querySelector('.undo-last-point');
  const resetGameButton = document.querySelector('.reset-game');
  const gameButtons = document.querySelector('.game-buttons');
  
  const undoLastPointDetails = function() {
    
    /*
    resetRack.displayNone();
    gameButtons.style.marginTop = '';
    gameButtons.style.display = 'none';
    gameButtons.classList.add('hidden');
    */

    matchPoints.undoLastPoint();
  };

  const resetGameDetails = function() {
    if (confirm('Are you sure you\'ve finished your game?')) {
      window.location.reload();
    } else {
      return;
    }
  };
  
  const showGameButtons = function() {
    resetRack.displayNone();
    gameButtons.style.marginTop = '.5rem';
    gameButtons.style.display = 'block';
    gameButtons.classList.remove('hidden');
  };
  
  const hideGameButtons = function() {
    gameButtons.classList.add('hidden');
  };
  undoLastPointButton.addEventListener('click', undoLastPointDetails);
  resetGameButton.addEventListener('click', resetGameDetails);
  
  return {
    showGameButtons: showGameButtons,
    hideGameButtons: hideGameButtons
  };
})();

module.exports = resetGame;