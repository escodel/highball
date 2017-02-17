const diamond = (function() {
  const ball = document.querySelectorAll('.ball');
  
  for (let i = 0; i < ball.length; i++) {
      const mc = new Hammer(ball[i]);
      
      mc.on('press', function(ev) {
        console.log(ev.type);
      });
  }
  
})();

module.exports = diamond;