/*jshint esversion: 6 */
const resetRack = (function() {
  const nineBall = document.querySelectorAll('.ball-9');
  var rack = document.querySelector('.rack');
  const ballArray = document.querySelectorAll('.ball');
  const rackButtons = document.querySelector('.rack-buttons');
  const resetRackLink = document.querySelector('.next-rack');
  const deadBallScore = document.querySelector('.dead-ball-score');
  
  const showRackButtons = function() {
    rackButtons.classList.remove('hidden');
  };
  
  const hideRackButtons = function() {
    rackButtons.classList.add('hidden');
  };
  
  const displayNone = function() {
    rackButtons.style.display = 'none';
  };
  
  const displayBlock = function() {
    rackButtons.style.display = 'block';
  };
  
  const resetRack = function() {
    for (let i = 0; i < ballArray.length; i++) {
      ballArray[i].classList.remove('active');
      ballArray[i].classList.remove('inactive');
      ballArray[i].classList.remove('dead');
      ballArray[i].classList.add('neutral');
    }
  };
  
  const resetInnings = function() {
    const innings = document.querySelector('.number-innings');
    innings.innerHTML = 0;
  };
  
  const resetDeadBalls = function() {
    deadBallScore.innerHTML = 0;
  };
  
  document.body.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('next-rack')) {
      resetRack();
      resetInnings();
      resetDeadBalls();
      rack.innerHTML++;      
      hideRackButtons();
      let inputs = document.querySelectorAll('.row');
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].classList.contains('row-top')){
		      inputs[i].style.pointerEvents = 'auto';
        }
      }
    }
  });
  
  return {
    showRackButtons: showRackButtons,
    hideRackButtons: hideRackButtons,
    displayNone: displayNone,
    displayBlock: displayBlock
  };

})();

module.exports = resetRack;