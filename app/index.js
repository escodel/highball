const incrementer = require('./modules/incrementer');
const diamond = require('./modules/diamond');
//const scoring = require('./modules/scoring');
const resetRack = require('./modules/resetRack');
//const rackTable = require('./modules/rackTable');

const lock = document.querySelector('.lock');

lock.addEventListener('click', function() {
  document.documentElement.webkitRequestFullscreen();
  screen.orientation.lock('landscape');
});

