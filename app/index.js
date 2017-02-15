const incrementer = require('./modules/incrementer');

function component () {
  var element = document.createElement('div');

  element.innerHTML = ['Hello','individual'].join(' ');

  return element;
}

document.body.appendChild(component());