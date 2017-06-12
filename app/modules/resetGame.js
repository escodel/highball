/*jshint esversion: 6 */
const resetRack = require('./resetRack');
//const matchPoints = require('./matchPoints');

const resetGame = (function() {
  const undoLastPointButton = document.querySelector('.undo-last-point');
  const resetGameButton = document.querySelector('.reset-game');
  const gameButtons = document.querySelector('.game-buttons');
  
  let undoLastPoint = function() {
    //I'm ashamed of this fix, trying to get this done quickly.
    const finalScore = document.querySelector('.final-score');  
    const lastClicked = document.querySelector('#lastClicked');
    const lastClickedSelector = lastClicked.innerHTML;
    const lastClickedClass = document.getElementsByClassName(lastClickedSelector);
    lastClickedClass[0].classList.remove('active', 'inactive');
    lastClickedClass[0].classList.add('neutral');
    lastClickedClass[1].classList.remove('active', 'inactive');
    lastClickedClass[1].classList.add('neutral');
    resetRack.displayNone();
    gameButtons.style.marginTop = '';
    gameButtons.style.display = 'none';
    gameButtons.classList.add('hidden');
    finalScore.innerHTML = '';
    clickPreventUndo();
    //document.getElementsByClassName(lastClickedSelector)[0].click();
  };
  
  const undoLastPointDetails = function() {
    undoLastPoint();
  };
  
  const clickPreventUndo = function() {
    let inputs = document.querySelectorAll('.row');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('row-top')) {
        inputs[i].style.pointerEvents = 'auto';
      }
    }
  };

  const resetGameDetails = function() {
    if (confirm('Are you sure you\'ve finished your game?')) {
      window.location.reload();
    } else {
      return;
    }
  };
  
  const showGameButtons = function() {
    resetRack.displayNone;
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