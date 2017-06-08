/*jshint esversion: 6 */
const resetGame = require('./resetGame');

const matchPoints = (function() {

let lastClickedBall = "";

    let endOfMatch = function(winningPlayer) {
        let playerOneName = document.querySelector('#player-1-Name').innerHTML.toString();
        let playerTwoName = document.querySelector('#player-2-Name').innerHTML.toString();
        let playerOneSkillVal = document.querySelector('.skill-level.left option:checked').value;
        let playerTwoSkillVal = document.querySelector('.skill-level.right option:checked').value;
        const playerOneScore = document.querySelector('.player-one-score');
        const playerTwoScore = document.querySelector('.player-two-score');
        const score = document.querySelector('.score');
        lastClickedBall = event.currentTarget;

        if (!playerOneName) {
            playerOneName = "Player One";
        }
        else {
            playerOneName = playerOneName.replace(/&nbsp;/gi,'');
        }

        if (!playerTwoName) {
            playerTwoName = "Player Two";
        }

        else {
            playerTwoName = playerTwoName.replace(/&nbsp;/gi,'');
        }

        let inningsTable = document.querySelectorAll('.innings-table') || 0;
        var inningsTotal = 0;
        for (var i = 0; i < inningsTable.length; i++) {
            inningsTotal += Number(inningsTable[i].innerHTML);
        }
        inningsTotal += Number(document.querySelector(".number-innings").innerHTML);

        if (winningPlayer == 1) {
            let matchScore = calculateFinalScore(playerTwoSkillVal, playerTwoScore.innerHTML);
            let finalScore = document.createElement('span');
            finalScore.classList.add('final-score');
            finalScore.innerHTML = playerOneName + ' wins!<br/>MPE: ' + matchScore.winnerScore + ' - ' + matchScore.loserScore + '<br/>Total Innings: ' + inningsTotal;
            score.insertBefore(finalScore, score.firstChild);
            resetGame.showGameButtons();
            clickPrevent();
        }
        if (winningPlayer == 2) {
            let matchScore = calculateFinalScore(playerOneSkillVal, playerOneScore.innerHTML);
            let finalScore = document.createElement('span');
            finalScore.classList.add('final-score');
            finalScore.innerHTML = playerTwoName + ' wins!<br/>MPE: ' + matchScore.loserScore + ' - ' + matchScore.winnerScore + '<br/>Total Innings: ' + inningsTotal;
            score.insertBefore(finalScore, score.firstChild);
            resetGame.showGameButtons();
            clickPrevent();
        }
    };
  
    let clickPrevent = function() {
      let inputs = document.querySelectorAll('.row');
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].classList.contains('row-top')) {
          inputs[i].style.pointerEvents = 'none';
        }
      }
    };

    let undoLastPoint = function() {
        console.log(lastClickedBall);
    };

     let calculateFinalScore = function(loserSL, loserScore) {
        switch (loserSL) {
            case '1':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '3':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '4':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '5':
                    case '6':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '7':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '8':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '9':
                    case '10':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '11':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '12':
                    case '13':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };
                }
                break;
            case '2':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '4':
                    case '5':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '6':
                    case '7':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '8':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '9':
                    case '10':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '11':
                    case '12':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '13':
                    case '14':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '15':
                    case '16':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '17':
                    case '18':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }
                break;
            case '3':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '5':
                    case '6':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '7':
                    case '8':
                    case '9':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '10':
                    case '11':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '12':
                    case '13':
                    case '14':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '15':
                    case '16':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '17':
                    case '18':
                    case '19':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '20':
                    case '21':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '22':
                    case '23':
                    case '24':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }
                break;
            case '4':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '6':
                    case '7':
                    case '8':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '9':
                    case '10':
                    case '11':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '12':
                    case '13':
                    case '14':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '15':
                    case '16':
                    case '17':
                    case '18':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '19':
                    case '20':
                    case '21':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '22':
                    case '23':
                    case '24':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '25':
                    case '26':
                    case '27':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '28':
                    case '29':
                    case '30':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }

                break;
            case '5':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '11':
                    case '12':
                    case '13':
                    case '14':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '15':
                    case '16':
                    case '17':
                    case '18':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '19':
                    case '20':
                    case '21':
                    case '22':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '23':
                    case '24':
                    case '25':
                    case '26':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '27':
                    case '28':
                    case '29':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '30':
                    case '31':
                    case '32':
                    case '33':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '34':
                    case '35':
                    case '36':
                    case '37':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }

                break;
            case '6':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '9':
                    case '10':
                    case '11':
                    case '12':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '13':
                    case '14':
                    case '15':
                    case '16':
                    case '17':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '18':
                    case '19':
                    case '20':
                    case '21':
                    case '22':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '23':
                    case '24':
                    case '25':
                    case '26':
                    case '27':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '28':
                    case '29':
                    case '30':
                    case '31':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '32':
                    case '33':
                    case '34':
                    case '35':
                    case '36':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '37':
                    case '38':
                    case '39':
                    case '40':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '41':
                    case '42':
                    case '43':
                    case '44':
                    case '45':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }

                break;
            case '7':

                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '16':
                    case '17':
                    case '18':
                    case '19':
                    case '20':
                    case '21':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '22':
                    case '23':
                    case '24':
                    case '25':
                    case '26':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '27':
                    case '28':
                    case '29':
                    case '30':
                    case '31':
                    case '32':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '33':
                    case '34':
                    case '35':
                    case '36':
                    case '37':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '38':
                    case '39':
                    case '40':
                    case '41':
                    case '42':
                    case '43':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '44':
                    case '45':
                    case '46':
                    case '47':
                    case '48':
                    case '49':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '50':
                    case '51':
                    case '52':
                    case '53':
                    case '54':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }

                break;
            case '8':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                    case '11':
                    case '12':
                    case '13':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '14':
                    case '15':
                    case '16':
                    case '17':
                    case '18':
                    case '19':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '21':
                    case '22':
                    case '23':
                    case '24':
                    case '25':
                    case '26':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '27':
                    case '28':
                    case '29':
                    case '30':
                    case '31':
                    case '32':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '33':
                    case '34':
                    case '35':
                    case '36':
                    case '37':
                    case '38':
                    case '39':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '40':
                    case '41':
                    case '42':
                    case '43':
                    case '44':
                    case '45':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '46':
                    case '47':
                    case '48':
                    case '49':
                    case '50':
                    case '51':
                    case '52':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '53':
                    case '54':
                    case '55':
                    case '56':
                    case '57':
                    case '58':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '59':
                    case '60':
                    case '61':
                    case '62':
                    case '63':
                    case '64':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };

                }

                break;
            case '9':
                switch (loserScore) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                    case '16':
                    case '17':
                        return {
                            winnerScore: 20,
                            loserScore: 0
                        };

                    case '18':
                    case '19':
                    case '20':
                    case '21':
                    case '22':
                    case '23':
                    case '24':
                        return {
                            winnerScore: 19,
                            loserScore: 1
                        };

                    case '25':
                    case '26':
                    case '27':
                    case '28':
                    case '29':
                    case '30':
                    case '31':
                        return {
                            winnerScore: 18,
                            loserScore: 2
                        };

                    case '32':
                    case '33':
                    case '34':
                    case '35':
                    case '36':
                    case '37':
                    case '38':
                        return {
                            winnerScore: 17,
                            loserScore: 3
                        };

                    case '39':
                    case '40':
                    case '41':
                    case '42':
                    case '43':
                    case '44':
                    case '45':
                    case '46':
                        return {
                            winnerScore: 16,
                            loserScore: 4
                        };

                    case '47':
                    case '48':
                    case '49':
                    case '50':
                    case '51':
                    case '52':
                    case '53':
                        return {
                            winnerScore: 15,
                            loserScore: 5
                        };

                    case '54':
                    case '55':
                    case '56':
                    case '57':
                    case '58':
                    case '59':
                    case '60':
                        return {
                            winnerScore: 14,
                            loserScore: 6
                        };

                    case '60':
                    case '61':
                    case '62':
                    case '63':
                    case '64':
                    case '65':
                    case '66':
                    case '67':
                        return {
                            winnerScore: 13,
                            loserScore: 7
                        };

                    case '68':
                    case '69':
                    case '70':
                    case '71':
                    case '72':
                    case '73':
                    case '74':
                        return {
                            winnerScore: 12,
                            loserScore: 8
                        };
                }
        }
    };
    return {
            endOfMatch: endOfMatch,
            undoLastPoint: undoLastPoint
        };
})();

module.exports = matchPoints;