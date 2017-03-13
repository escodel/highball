const rackTable = require('./rackTable');
const resetRack = require('./resetRack');

const dead9OTS = (function() {
  const nineOTSleft = document.querySelector('.nineOTS.left');
  const nineOTSright = document.querySelector('.nineOTS.right');
  const allBalls = document.querySelectorAll('.ball');
  const nineBall = document.querySelectorAll('.ball-9');
  const deadBallScore = document.querySelector('.dead-ball-score');
  
  const markDead = function(ev) {
    for (let i = 0; i < nineBall.length; i++) {
      if (nineBall[i].classList.contains('active')) {
        for (let j = 0; j < allBalls.length; j++) {
          if (!allBalls[j].classList.contains('active') && !allBalls[j].classList.contains('inactive') && !allBalls[j].parentElement.classList.contains('spacer')) {
            allBalls[j].classList.add('dead');
            allBalls[j].classList.remove('neutral');
            allBalls[j].classList.remove('inactive');
            rackTable.appendColumn(ev);
            resetRack.showRackButtons();
            let deadBalls = document.querySelectorAll('.left-grid .dead');
            deadBallScore.innerHTML = deadBalls.length;
          }
        }
      }
    }
  };
  
  nineOTSleft.addEventListener('click', markDead);
  nineOTSright.addEventListener('click', markDead);
})();

module.exports = dead9OTS;