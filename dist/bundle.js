/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scoring = __webpack_require__(3);

var diamond = function () {
  var ball = document.querySelectorAll('.ball');
  var deadBallScore = document.querySelector('.dead-ball-score');

  var _loop = function _loop(i) {
    // Dead Balls
    var mc = new Hammer(ball[i]);

    mc.on('press', function (ev) {
      var deadBallTarget = ev.target;
      var ballArray = Array.from(ball);
      var classListArray = Array.from(ev.target.classList);
      var targetClass = classListArray[1];

      /*  Prevents ball-9 from being marked dead
          Toggles dead state */
      if (deadBallTarget.classList.contains('neutral') && !deadBallTarget.classList.contains('ball-9')) {

        ballArray.filter(function (b) {
          return b.classList.contains(targetClass);
        }).forEach(function (b) {
          b.classList.add('dead');
          b.classList.remove('neutral');
        });
      } else if (deadBallTarget.classList.contains('dead')) {
        deadBallTarget.classList.remove('dead');

        ballArray.filter(function (b) {
          return b.classList.contains(targetClass);
        }).forEach(function (b) {
          b.classList.remove('dead');
          b.classList.add('neutral');
        });
        ev.target.click(); //this is a really stupid temporary fix. please don't let this live for very long.
        var deadBalls = document.querySelectorAll('.left-grid .dead');
        deadBallScore.innerHTML = deadBalls.length;
      }
    });

    // Active / Inactive
    ball[i].addEventListener('click', function (ev) {
      var evTarget = ev.target;
      var clickedTargetClassList = evTarget.classList;
      var ballLeft = ball[i].classList.contains('left');
      var ballRight = ball[i].classList.contains('right');

      // Determine left or right, then inactive the opposite
      if (ballLeft && clickedTargetClassList.contains('neutral')) {
        var opposite = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        clickedTargetClassList.remove('neutral');
        opposite.classList.remove('neutral');
        opposite.classList.add('inactive');
        clickedTargetClassList.add('active');
        return;
      }
      if (ballLeft && clickedTargetClassList.contains('active')) {
        var _opposite = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        _opposite.classList.remove('inactive');
        clickedTargetClassList.remove('active');
        _opposite.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
      if (ballLeft && clickedTargetClassList.contains('inactive')) {
        var _opposite2 = document.querySelector('.' + clickedTargetClassList[1] + '.right');
        _opposite2.classList.remove('active');
        clickedTargetClassList.remove('inactive');
        _opposite2.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
      if (ballRight && clickedTargetClassList.contains('neutral')) {
        var _opposite3 = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        clickedTargetClassList.remove('neutral');
        _opposite3.classList.remove('neutral');
        _opposite3.classList.add('inactive');
        clickedTargetClassList.add('active');
        return;
      }
      if (ballRight && clickedTargetClassList.contains('active')) {
        var _opposite4 = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        _opposite4.classList.remove('inactive');
        clickedTargetClassList.remove('active');
        _opposite4.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
      if (ballRight && clickedTargetClassList.contains('inactive')) {
        var _opposite5 = document.querySelector('.' + clickedTargetClassList[1] + '.left');
        _opposite5.classList.remove('active');
        clickedTargetClassList.remove('inactive');
        _opposite5.classList.add('neutral');
        clickedTargetClassList.add('neutral');
        return;
      }
    });
  };

  for (var i = 0; i < ball.length; i++) {
    _loop(i);
  }
}();

module.exports = diamond;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var incrementer = function () {
  var incrementButton = document.querySelectorAll('.increment');
  var decrementButton = document.querySelectorAll('.decrement');

  var counter = function counter(increment, context) {
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

  for (var i = 0; i < incrementButton.length; i++) {
    incrementButton[i].addEventListener('click', counter.bind(null, true));
  }
  for (var _i = 0; _i < decrementButton.length; _i++) {
    decrementButton[_i].addEventListener('click', counter.bind(null, false));
  }
}();

module.exports = incrementer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resetRack = function () {
  var nineBall = document.querySelectorAll('.ball-9');
  var rack = document.querySelector('.rack');
  var ballArray = document.querySelectorAll('.ball');
  var resetRackLink = document.querySelector('.reset-rack');

  // Loop through nine balls
  for (var i = 0; i < nineBall.length; i++) {
    nineBall[i].addEventListener('click', function () {
      // Rack reset confirmation modal
      function component() {
        var element = document.createElement('a');

        element.innerHTML = ['Rack', 'reset'].join(' ');
        element.href = '#';
        element.classList = 'reset-rack';

        return element;
      }
      document.body.appendChild(component());
    });
  }

  var resetRack = function resetRack() {
    for (var _i = 0; _i < ballArray.length; _i++) {
      ballArray[_i].classList.remove('active');
      ballArray[_i].classList.remove('inactive');
      ballArray[_i].classList.remove('dead');
      ballArray[_i].classList.add('neutral');
    }
  };

  var resetInnings = function resetInnings() {
    var innings = document.querySelector('.number-innings');
    innings.innerHTML = 0;
  };

  document.body.addEventListener('click', function (ev) {
    if (ev.target.classList.contains('reset-rack')) {
      resetRack();
      resetInnings();
      rack.innerHTML++;
    }
  });
}();

module.exports = resetRack;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scoring = function () {
  var ball = document.querySelectorAll('.ball');
  var playerOneScore = document.querySelector('.player-one-score');
  var playerTwoScore = document.querySelector('.player-two-score');

  var playerOneSkill = document.querySelector('.skill-level.left');
  var playerTwoSkill = document.querySelector('.skill-level.right');
  var playerOneGoal = document.querySelector('#leftPlayerGoal');
  var playerTwoGoal = document.querySelector('#rightPlayerGoal');

  var increase = function increase(obj) {
    return obj + 1;
  };
  var decrease = function decrease(obj) {
    return obj - 1;
  };

  for (var i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function (ev) {
      var evTarget = ev.target;
      // If ballLeft
      if (evTarget.classList.contains('left')) {
        if (evTarget.classList.contains('neutral')) {
          playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
            return;
          }
          return;
        }
        if (evTarget.classList.contains('active')) {
          playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
            return;
          }
          return;
        }
        if (evTarget.classList.contains('inactive')) {
          playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
            return;
          }
          return;
        }
      }
      // If ballRight
      if (evTarget.classList.contains('right')) {
        if (evTarget.classList.contains('neutral')) {
          playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
            return;
          }
          return;
        }
        if (evTarget.classList.contains('active')) {
          playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
            return;
          }
          return;
        }
        if (evTarget.classList.contains('inactive')) {
          playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
          if (evTarget.classList.contains('ball-9')) {
            playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
            return;
          }
        }
      }
    });
  }

  playerOneSkill.addEventListener('change', function (ev) {
    switch (ev.currentTarget.value) {
      case "1":
        playerOneGoal.innerHTML = 14;
        break;
      case "2":
        playerOneGoal.innerHTML = 19;
        break;
      case "3":
        playerOneGoal.innerHTML = 25;
        break;
      case "4":
        playerOneGoal.innerHTML = 31;
        break;
      case "5":
        playerOneGoal.innerHTML = 38;
        break;
      case "6":
        playerOneGoal.innerHTML = 46;
        break;
      case "7":
        playerOneGoal.innerHTML = 55;
        break;
      case "8":
        playerOneGoal.innerHTML = 65;
        break;
      case "9":
        playerOneGoal.innerHTML = 75;
        break;
    }
  });
  playerTwoSkill.addEventListener('change', function (ev) {
    switch (ev.currentTarget.value) {
      case "1":
        playerTwoGoal.innerHTML = 14;
        break;
      case "2":
        playerTwoGoal.innerHTML = 19;
        break;
      case "3":
        playerTwoGoal.innerHTML = 25;
        break;
      case "4":
        playerTwoGoal.innerHTML = 31;
        break;
      case "5":
        playerTwoGoal.innerHTML = 38;
        break;
      case "6":
        playerTwoGoal.innerHTML = 46;
        break;
      case "7":
        playerTwoGoal.innerHTML = 55;
        break;
      case "8":
        playerTwoGoal.innerHTML = 65;
        break;
      case "9":
        playerTwoGoal.innerHTML = 75;
        break;
    }
  });
}();

module.exports = scoring;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var incrementer = __webpack_require__(1);
var diamond = __webpack_require__(0);
//const scoring = require('./modules/scoring');
var resetRack = __webpack_require__(2);

//function component () {
//  var element = document.createElement('div');
//
//  element.innerHTML = ['Hello','individual'].join(' ');
//
//  return element;
//}
//
//document.body.appendChild(component());

/***/ })
/******/ ]);