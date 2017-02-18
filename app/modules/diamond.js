const diamond = (function() {
  const ball = document.querySelectorAll('.ball');
  
  for (let i = 0; i < ball.length; i++) {
      const mc = new Hammer(ball[i]);
      
      mc.on('press', function(ev) {        
        const evTarget = ev.target;
        evTarget.classList.toggle('ball-active');
//        evTarget.nextSibling.classList.toggle('.ball-inactive');
      });
    
//    ball[i].addEventListener('touchstart', function(e) {
//      e.dataTransfer.effectAllowed = 'move';
//      e.dataTransfer.setData('text', e.target);
//      console.log(e);
//    });
//    
//    ball[i].addEventListener('touchend', function(e) {
//      console.log(e);
//      var data = e.dataTransfer.getData('text');
//      console.log(data);
//      e.target.appendChild(document.querySelector(data));
//    });
  }
  
})();

module.exports = diamond;