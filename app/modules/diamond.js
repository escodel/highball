const scoring = require('./scoring');

const diamond = (function() {
  const ball = document.querySelectorAll('.ball');
  const deadBallScore = document.querySelector('.dead-ball-score');

  for (let i = 0; i < ball.length; i++) {
    // Dead Balls
    const mc = new Hammer(ball[i]);
    
    mc.on('press', function(ev){
      var deadBallTarget = ev.target;
      var ballArray = Array.from(ball);
      var classListArray = Array.from(ev.target.classList);
      var targetClass = classListArray[1];
      
      
      /*  Prevents ball-9 from being marked dead
          Toggles dead state */
      if (deadBallTarget.classList.contains('neutral') && !deadBallTarget.classList.contains('ball-9')) {

        ballArray
          .filter(b => b.classList.contains(targetClass))
          .forEach(b => {
            b.classList.add('dead')
            b.classList.remove('neutral')
            
        });
      } else if(deadBallTarget.classList.contains('dead')) {  
        deadBallTarget.classList.remove('dead');
        
        ballArray
          .filter(b => b.classList.contains(targetClass))
          .forEach(b => {
            b.classList.remove('dead')
            b.classList.add('neutral')
      })
      ev.target.click(); //this is a really stupid temporary fix. please don't let this live for very long.

      }
    let deadBalls = document.querySelectorAll('.left-grid .dead');
    deadBallScore.innerHTML = deadBalls.length;      
    })
    
    // Active / Inactive
    ball[i].addEventListener('click', function(ev) {
      const evTarget = ev.target;
      const clickedTargetClassList = evTarget.classList;
      const ballLeft = ball[i].classList.contains('left');
      const ballRight = ball[i].classList.contains('right');
      
      // Determine left or right, then inactive the opposite
      if (ballLeft && clickedTargetClassList.contains('neutral')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        clickedTargetClassList.remove('neutral');
        opposite.classList.remove('neutral');
        opposite.classList.add('inactive');
        clickedTargetClassList.add('active');
        return;
      }
      if (ballLeft && clickedTargetClassList.contains('active')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        opposite.classList.remove('inactive');
        clickedTargetClassList.remove('active');
        opposite.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
      if (ballLeft && clickedTargetClassList.contains('inactive')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        opposite.classList.remove('active');
        clickedTargetClassList.remove('inactive');
        opposite.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;        
      }
      if (ballRight && clickedTargetClassList.contains('neutral')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        clickedTargetClassList.remove('neutral');
        opposite.classList.remove('neutral');
        opposite.classList.add('inactive');
        clickedTargetClassList.add('active');
        return;
      }
      if (ballRight && clickedTargetClassList.contains('active')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        opposite.classList.remove('inactive');
        clickedTargetClassList.remove('active');
        opposite.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
      if (ballRight && clickedTargetClassList.contains('inactive')) {
        let opposite = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        opposite.classList.remove('active');
        clickedTargetClassList.remove('inactive');
        opposite.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;        
      }
    })
  }
})();

module.exports = diamond;