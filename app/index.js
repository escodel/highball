/*jshint esversion: 6 */
const incrementer = require("./modules/incrementer");
const diamond = require("./modules/diamond");
//const scoring = require('./modules/scoring');
const resetRack = require("./modules/resetRack");
//const rackTable = require('./modules/rackTable');
const dead9OTS = require("./modules/dead9OTS");
const player = require("./modules/player");

const rackNumberLabel = new Hammer(document.querySelector("#rackNumberLabel"));

const lockScreen = function () {
  document.documentElement.webkitRequestFullscreen();
  screen.orientation.lock("landscape");
};

rackNumberLabel.on("press", lockScreen);
