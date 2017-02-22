const diamond = (function() {
  const ball = document.querySelectorAll('.ball');

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
            b.classList.add('ball-dead')
            b.classList.remove('ball-active')
        });
      } else {
        deadBallTarget.classList.remove('ball-dead');
        
        ballArray
          .filter(b => b.classList.contains(targetClass))
          .forEach(b => b.classList.remove('ball-dead'));
      }
    });
    
    // Active / Inactive
    ball[i].addEventListener('click', function (ev) {
      const evTarget = ev.target;
      if (!evTarget.classList.contains('ball-space')) {
          ev.target.classList.add('ball-inactive');
      }

      var ballArray = Array.from(ball);
      var classListArray = Array.from(ev.target.classList);
      var targetClass = classListArray[1];

      ballArray
        .filter(b => !b.classList.contains('ball-space'))
        .filter(b => !b.classList.contains('ball-dead'))
        .filter(b => b.classList.contains(targetClass))
        .forEach(function (b) {
          if (b.classList.contains('ball-active')) {
            b.classList.remove('ball-active');
            b.classList.add('ball-inactive');
          } else if (b.classList.contains('ball-inactive')) {
            b.classList.add('ball-active');
            b.classList.remove('ball-inactive');
          }

        if (!b.classList.contains('ball-active' || 'ball-inactive' || 'ball-dead')) {
          b.classList.add('ball-inactive');
          b.classList.remove('ball-active');
        }
      });
    });
  }
})();

module.exports = diamond;