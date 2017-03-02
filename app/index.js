const incrementer = require('./modules/incrementer');
const diamond = require('./modules/diamond');
//const scoring = require('./modules/scoring');
const resetRack = require('./modules/resetRack');
//const rackTable = require('./modules/rackTable');

document.addEventListener('orientationchange', function() {
  console.log('changed');
  document.documentElement.webkitRequestFullscreen();
  screen.orientation.lock('landscape');
});