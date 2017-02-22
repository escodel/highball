const incrementer = (function(){
  const incrementButton = document.querySelectorAll('.increment');
  const decrementButton = document.querySelectorAll('.decrement');
  
  const counter = (increment, context) => {
    if (increment) {
      var number = context.target.previousElementSibling;
      var numberHtml = number.innerHTML;
      numberHtml++;
    } else {
      var number = context.target.nextElementSibling;
      var numberHtml = number.innerHTML;
      if (numberHtml === '0') {
        return;
      }
      numberHtml--;
    }
    number.innerHTML = numberHtml;
  };
  
  for (let i = 0; i < incrementButton.length; i++) {
    incrementButton[i].addEventListener('click', counter.bind(null, true));
  }
  for (let i = 0; i < decrementButton.length; i++) {
    decrementButton[i].addEventListener('click', counter.bind(null, false));
  }
})();

module.exports = incrementer;