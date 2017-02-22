const resetRack = (function() {
  const nineBall = document.querySelectorAll('.ball-9');
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
  
  function resetRack() {
    for (let i = 0; i < ballArray.length; i++) {
      ballArray[i].classList.remove('ball-active');
      ballArray[i].classList.remove('ball-inactive');
      ballArray[i].classList.remove('ball-dead');
    }
  }
  
  document.body.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('reset-rack')) {
      resetRack();
    }
  });

})();

module.exports = resetRack;