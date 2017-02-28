const resetRack = (function() {
  const nineBall = document.querySelectorAll('.ball-9');
  var rack = document.querySelector('.rack');
  const ballArray = document.querySelectorAll('.ball');
  const rackButtons = document.querySelector('.rack-buttons');
  const resetRackLink = document.querySelector('.next-rack');
  const deadBallScore = document.querySelector('.dead-ball-score');
  
  // Loop through nine balls
//  for (let i = 0; i < nineBall.length; i++) {
//    nineBall[i].addEventListener('click', function(){
//      // Rack reset confirmation modal
  const showRackButtons = function() {
    rackButtons.classList.remove('hidden');
  }
  
  const hideRackButtons = function() {
    rackButtons.classList.add('hidden');
  }
//    });
//  }
  
  const resetRack = function() {
    for (let i = 0; i < ballArray.length; i++) {
      ballArray[i].classList.remove('active');
      ballArray[i].classList.remove('inactive');
      ballArray[i].classList.remove('dead');
      ballArray[i].classList.add('neutral');
    }
  }
  
  const resetInnings = function() {
    const innings = document.querySelector('.number-innings');
    innings.innerHTML = 0;
  }
  
  const resetDeadBalls = function() {
    deadBallScore.innerHTML = 0;
  }
  
  document.body.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('next-rack')) {
      resetRack();
      resetInnings();
      resetDeadBalls();
      rack.innerHTML++;
      hideRackButtons();
    }
  });
  
  return {
    showRackButtons: showRackButtons,
    hideRackButtons: hideRackButtons
  }

})();

module.exports = resetRack;