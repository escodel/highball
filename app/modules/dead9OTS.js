/*jshint esversion: 6 */
const rackTable = require('./rackTable');
const resetRack = require('./resetRack');
const scoring = require('./scoring');

const dead9OTS = (function () {
  const nineOTSleft = document.querySelector('.nineOTS.left');
  const nineOTSright = document.querySelector('.nineOTS.right');
  const allBalls = document.querySelectorAll('.ball');
  const nineBall = document.querySelectorAll('.ball-9');
  const nineBallLeft = document.querySelector('.ball-9.left.active');
  const nineBallRight = document.querySelector('.ball-9.right.active');
  const deadBallScore = document.querySelector('.dead-ball-score');

  const markDead = function (ev) {
//    if (position === 'left' && nineBallRight.length === 1) {
//      return;
//    }
//    if (position === 'right' && nineBallLeft.length === 1) {
//      return;
//    }
    if (ev.currentTarget.classList.contains('left') && document.querySelector('.ball-9.left.active') === null || ev.currentTarget.classList.contains('right') && document.querySelector('.ball-9.right.active') === null) {
      return;
    } else {
    for (let i = 0; i < nineBall.length; i++) {
      if (nineBall[i].classList.contains('active')) {
        for (let j = 0; j < allBalls.length; j++) {
          if (!allBalls[j].classList.contains('active') && !allBalls[j].classList.contains('inactive') && !allBalls[j].parentElement.classList.contains('spacer')) {
            allBalls[j].classList.add('dead');
            allBalls[j].classList.remove('neutral');
            allBalls[j].classList.remove('inactive');
            let deadBalls = document.querySelectorAll('.left-grid .dead');
            deadBallScore.innerHTML = deadBalls.length;
          }
        }
//          rackTable.appendColumn(ev);
//          resetRack.showRackButtons();
        scoring.checkRackEnd(ev);
      }
    }
    }
  };

  nineOTSleft.addEventListener('click', markDead);
  nineOTSright.addEventListener('click', markDead);
})();

module.exports = dead9OTS;