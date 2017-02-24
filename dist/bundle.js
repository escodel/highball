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
  console.log(scoring);

  var _loop = function _loop(i) {
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
          b.classList.add('dead');
          b.classList.remove('active');
        });
      } else {
        deadBallTarget.classList.remove('dead');

        ballArray.filter(function (b) {
          return b.classList.contains(targetClass);
        }).forEach(function (b) {
          return b.classList.remove('dead');
        });
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

    //    ball[i].addEventListener('click', function (ev) {
    //      const evTarget = ev.target;
    //      var ballArray = Array.from(ball);
    //      var clickedTargetClassList = ev.target.classList;
    //      var targetClass = clickedTargetClassList[1];
    //
    //      ballArray
    //        .filter(b => !b.classList.contains('ball-space'))
    //        .filter(b => !b.classList.contains('ball-dead'))
    //        .filter(b => b.classList.contains(targetClass))
    //        //not foreach
    //        .forEach(function (b) {
    //        //for clicked ball, activate it and deactivate its opponent equivalent
    //        if (clickedTargetClassList.contains('neutral')){
    //          if (clickedTargetClassList.contains('left')){
    //            ev.target.classList.add('active');
    //            ev.target.classList.remove('neutral');
    //            return;
    //          }
    //          if (clickedTargetClassList.contains('right')){
    //            ev.target.classList.add('active');
    //            ev.target.classList.remove('neutral');
    //            return;
    //          }
    //        }
    //        if (!clickedTargetClassList.contains('neutral')){
    //          if (clickedTargetClassList.contains('left')){
    //            ev.target.classList.remove('active');
    //            ev.target.classList.remove('inactive');
    //            ev.target.classList.remove('dead');
    //            ev.target.classList.add('neutral');
    //            return;
    //          }
    //          if (clickedTargetClassList.contains('right')){
    //            ev.target.classList.remove('active');
    //            ev.target.classList.remove('inactive');
    //            ev.target.classList.remove('dead');
    //            ev.target.classList.add('neutral');
    //            return;
    //          }
    //        }        


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
    //      });
    //    });
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
            playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
            return;
          }
        }
      }

      //      if (evTarget.classList.contains('neutral') && evTarget.classList.contains('left')) {
      //        playerOneScore.innerHTML = increase(new Number(playerOneScore.innerHTML));
      //        return;
      //      }
      //      if (evTarget.classList.contains('active') && evTarget.classList.contains('left')) {
      //        playerOneScore.innerHTML = decrease(new Number(playerOneScore.innerHTML));
      //        return;
      //      }
      //      if (evTarget.classList.contains('neutral') && evTarget.classList.contains('right')) {
      //        playerTwoScore.innerHTML = increase(new Number(playerTwoScore.innerHTML));
      //        return;
      //      }
      //      if (evTarget.classList.contains('active') && evTarget.classList.contains('right')) {
      //        playerTwoScore.innerHTML = decrease(new Number(playerTwoScore.innerHTML));
      //        return;
      //      }
    });
  }

  //  for (let i = 0; i < ball.length; i++) {
  //    ball[i].addEventListener('click', function(ev) {
  //      const ballActiveLeft = document.querySelectorAll('.diamond-left .ball-active');
  //      const ballActiveRight = document.querySelectorAll('.diamond-right .ball-active');
  //      const nineBallLeft = document.querySelector('.diamond-left .ball-9');
  //      const nineBallRight = document.querySelector('.diamond-right .ball-9');
  //      const deadBalls = document.querySelectorAll('.diamond-left .ball-dead');
  //      const deadBallScore = document.querySelector('.dead-ball-score');
  //      var rack = document.querySelector('.rack').innerHTML;
  //
  //      if (rack === '1') {
  //        playerOneScore.innerHTML = ballActiveLeft.length;
  //        playerTwoScore.innerHTML = ballActiveRight.length;
  //      } else if (rack !== '1' && ev.target.parentElement.parentElement.classList.contains('diamond-left')) {
  //        playerOneScore.innerHTML++;
  //      } else {
  //        playerTwoScore.innerHTML++;
  //      }
  //      deadBallScore.innerHTML = deadBalls.length;      
  //      
  //      if (nineBallLeft.classList.contains('active')) {
  //        playerOneScore.innerHTML++
  //      } else if (nineBallRight.classList.contains('active')) {
  //        playerTwoScore.innerHTML++
  //      }
  //    });
  //  }

  return {
    playerOneScore: playerOneScore,
    playerTwoScore: playerTwoScore,
    increase: increase
  };
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