const scoring = require('./scoring');

const diamond = (function() {
  const ball = document.querySelectorAll('.ball');
  console.log(scoring);

  for (let i = 0; i < ball.length; i++) {
    // Dead Balls
    const mc = new Hammer(ball[i]);
    
    mc.on('press', function(ev){
      var deadBallTarget = ev.target;
      var ballArray = Array.from(ball);
      var classListArray = Array.from(ev.target.classList);
      var targetClass = classListArray[1];
      
      /*  Prevents ball-9 and ball-space from being marked dead
          Toggles ball-dead state */
      if (!deadBallTarget.classList.contains('ball-dead') && !deadBallTarget.classList.contains('ball-space') && !deadBallTarget.classList.contains('ball-9')) {

        ballArray
          .filter(b => b.classList.contains(targetClass))
          .forEach(b => {
            b.classList.add('dead')
            b.classList.remove('active')
        });
      } else {
        deadBallTarget.classList.remove('dead');
        
        ballArray
          .filter(b => b.classList.contains(targetClass))
          .forEach(b => b.classList.remove('dead'));
      }
    });
    
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
    
//    ball[i].addEventListener('click', function (ev) {
//      const evTarget = ev.target;
//      var ballArray = Array.from(ball);
//      var clickedTargetClassList = ev.target.classList;
//      var targetClass = clickedTargetClassList[1];
//
//      ballArray
//        .filter(b => !b.classList.contains('ball-space'))
//        .filter(b => !b.classList.contains('ball-dead'))
//        .filter(b => b.classList.contains(targetClass))
//        //not foreach
//        .forEach(function (b) {
//        //for clicked ball, activate it and deactivate its opponent equivalent
//        if (clickedTargetClassList.contains('neutral')){
//          if (clickedTargetClassList.contains('left')){
//            ev.target.classList.add('active');
//            ev.target.classList.remove('neutral');
//            return;
//          }
//          if (clickedTargetClassList.contains('right')){
//            ev.target.classList.add('active');
//            ev.target.classList.remove('neutral');
//            return;
//          }
//        }
//        if (!clickedTargetClassList.contains('neutral')){
//          if (clickedTargetClassList.contains('left')){
//            ev.target.classList.remove('active');
//            ev.target.classList.remove('inactive');
//            ev.target.classList.remove('dead');
//            ev.target.classList.add('neutral');
//            return;
//          }
//          if (clickedTargetClassList.contains('right')){
//            ev.target.classList.remove('active');
//            ev.target.classList.remove('inactive');
//            ev.target.classList.remove('dead');
//            ev.target.classList.add('neutral');
//            return;
//          }
//        }        
        
        
//          if (b.classList.contains('neutral') && b.classList.contains('left')) {
//            b.classList.add('active');
//            b.classList.remove('neutral');
//            return;
//          }
//          if (b.classList.contains('neutral') && b.classList.contains('right')) {
//            b.classList.add('inactive');
//            b.classList.remove('neutral');
//            return;
//          }
//          if (ev.target.classList.contains('active')) {
//            b.classList.remove('active');
//            b.classList.add('neutral');
//            return;
//          } 
//          if (b.classList.contains('inactive')) {
//            b.classList.add('neutral');
//            b.classList.remove('inactive');
//            return;
//          }

//        if (!b.classList.contains('active' || 'inactive' || 'ball-dead')) {
//          b.classList.add('inactive');
//          b.classList.remove('active');
//        }
//      });
//    });
  }
})();

module.exports = diamond;