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


var diamond = function () {
  var ball = document.querySelectorAll('.ball');

  for (var i = 0; i < ball.length; i++) {
    // Dead Balls
    var mc = new Hammer(ball[i]);

    mc.on('press', function (ev) {
      var deadBallTarget = ev.target;
      var ballArray = Array.from(ball);
      var classListArray = Array.from(ev.target.classList);
      var targetClass = classListArray[1];

      /*  Prevents ball-9 and ball-space from being marked dead
          Toggles ball-dead state */
      if (!deadBallTarget.classList.contains('ball-dead') && !deadBallTarget.classList.contains('ball-space') && !deadBallTarget.classList.contains('ball-9')) {

        ballArray.filter(function (b) {
          return b.classList.contains(targetClass);
        }).forEach(function (b) {
          b.classList.add('ball-dead');
          b.classList.remove('active');
        });
      } else {
        deadBallTarget.classList.remove('ball-dead');

        ballArray.filter(function (b) {
          return b.classList.contains(targetClass);
        }).forEach(function (b) {
          return b.classList.remove('ball-dead');
        });
      }
    });

    // Active / Inactive
    ball[i].addEventListener('click', function (ev) {
      var evTarget = ev.target;
      var ballArray = Array.from(ball);
      var clickedTargetClassList = ev.target.classList;
      var targetClass = clickedTargetClassList[1];

      ballArray.filter(function (b) {
        return !b.classList.contains('ball-space');
      }).filter(function (b) {
        return !b.classList.contains('ball-dead');
      }).filter(function (b) {
        return b.classList.contains(targetClass);
      }).forEach(function (b) {
        if (clickedTargetClassList.contains('neutral')) {
          if (clickedTargetClassList.contains('left')) {
            ev.target.classList.add('active');
            ev.target.classList.remove('neutral');
            return;
          }
          if (clickedTargetClassList.contains('right')) {
            ev.target.classList.add('active');
            ev.target.classList.remove('neutral');
            return;
          }
        }
        if (!clickedTargetClassList.contains('neutral')) {
          if (clickedTargetClassList.contains('left')) {
            ev.target.classList.remove('active');
            ev.target.classList.remove('inactive');
            ev.target.classList.remove('dead');
            ev.target.classList.add('neutral');
            return;
          }
          if (clickedTargetClassList.contains('right')) {
            ev.target.classList.remove('active');
            ev.target.classList.remove('inactive');
            ev.target.classList.remove('dead');
            ev.target.classList.add('neutral');
            return;
          }
        }

        //          if (b.classList.contains('neutral') && b.classList.contains('left')) {
        //            b.classList.add('active');
        //            b.classList.remove('neutral');
        //            return;
        //          }
        //          if (b.classList.contains('neutral') && b.classList.contains('right')) {
        //            b.classList.add('inactive');
        //            b.classList.remove('neutral');
        //            return;
        //          }
        //          if (ev.target.classList.contains('active')) {
        //            b.classList.remove('active');
        //            b.classList.add('neutral');
        //            return;
        //          } 
        //          if (b.classList.contains('inactive')) {
        //            b.classList.add('neutral');
        //            b.classList.remove('inactive');
        //            return;
        //          }

        //        if (!b.classList.contains('active' || 'inactive' || 'ball-dead')) {
        //          b.classList.add('inactive');
        //          b.classList.remove('active');
        //        }
      });
    });
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
      ballArray[_i].classList.remove('ball-active');
      ballArray[_i].classList.remove('ball-inactive');
      ballArray[_i].classList.remove('ball-dead');
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

  for (var i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function (ev) {
      var ballActiveLeft = document.querySelectorAll('.diamond-left .ball-active');
      var ballActiveRight = document.querySelectorAll('.diamond-right .ball-active');
      var nineBallLeft = document.querySelector('.diamond-left .ball-9');
      var nineBallRight = document.querySelector('.diamond-right .ball-9');
      var deadBalls = document.querySelectorAll('.diamond-left .ball-dead');
      var deadBallScore = document.querySelector('.dead-ball-score');
      var rack = document.querySelector('.rack').innerHTML;

      if (rack === '1') {
        playerOneScore.innerHTML = ballActiveLeft.length;
        playerTwoScore.innerHTML = ballActiveRight.length;
      } else if (rack !== '1' && ev.target.parentElement.parentElement.classList.contains('diamond-left')) {
        playerOneScore.innerHTML++;
      } else {
        playerTwoScore.innerHTML++;
      }
      deadBallScore.innerHTML = deadBalls.length;

      if (nineBallLeft.classList.contains('ball-active')) {
        playerOneScore.innerHTML++;
      } else if (nineBallRight.classList.contains('ball-active')) {
        playerTwoScore.innerHTML++;
      }
    });
  }
}();

module.exports = scoring;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var incrementer = __webpack_require__(1);
var diamond = __webpack_require__(0);
var scoring = __webpack_require__(3);
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