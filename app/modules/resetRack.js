const resetRack = (function() {
  const nineBall = document.querySelectorAll('.ball-9');
  var rack = document.querySelector('.rack');
  const ballArray = document.querySelectorAll('.ball');
  const resetRackLink = document.querySelector('.reset-rack');
  
  // Loop through nine balls
  for (let i = 0; i < nineBall.length; i++) {
    nineBall[i].addEventListener('click', function(){
      // Rack reset confirmation modal
      function component () {
        var element = document.createElement('a');

        element.innerHTML = ['Rack','reset'].join(' ');
        element.href = '#';
        element.classList = 'reset-rack';

        return element;
      }
      document.body.appendChild(component());
    });
  }
  
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
  
  document.body.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('reset-rack')) {
      resetRack();
      resetInnings();
      rack.innerHTML++;
    }
  });

})();

module.exports = resetRack;