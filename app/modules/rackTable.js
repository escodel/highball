const resetRack = require('./resetRack');

const rackTable = (function () {
  const table = document.querySelector('.rack-table');
  const nineBall = document.querySelectorAll('.ball-9');
  const rackNumber = document.querySelector('.rack');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  const innings = document.querySelector('.number-innings');
  const deadBalls = document.querySelector('.dead-ball-score');
  const editScore = document.querySelector('.edit-score');
  const nextRack = document.querySelector('.next-rack');

  const createCell = function (cell, text, style) {
    let div = document.createElement('div'); // create DIV element
    let txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    cell.appendChild(div); // append DIV to the table cell
  };
  const appendColumn = function (ev) {
    if (ev.target.classList.contains('neutral')) {
      createCell(table.rows[0].insertCell(table.rows[0].cells.length), rackNumber.innerHTML, 'label');
      createCell(table.rows[1].insertCell(table.rows[1].cells.length), playerOneScore.innerHTML, 'col-' + 1);
      createCell(table.rows[2].insertCell(table.rows[2].cells.length), innings.innerHTML, 'col-' + 1);
      createCell(table.rows[3].insertCell(table.rows[3].cells.length), deadBalls.innerHTML, 'dead-ball-table');
      createCell(table.rows[4].insertCell(table.rows[4].cells.length), playerTwoScore.innerHTML, 'col-' + 1);
    }
    
    //adds rack-table-sm class to rack-table in order to restrict width and add scroll
    if (table.offsetWidth >= 250) {
      table.classList.add('rack-table-sm');
    }
  };
  const deleteColumn = function () {
    let lastCol = table.rows[0].cells.length - 1;

    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(lastCol);
    }
  };
  //decrements the score by 2 based on which nine ball is active, marks both nine balls neutral
  const nineBallsNeutral = function () {
    for (var i = 0; i < nineBall.length; i++) {
      if (nineBall[i].classList.contains('active') && nineBall[i].classList.contains('left')) {
        playerOneScore.innerHTML = decrementPlayerScore(playerOneScore.innerHTML);
      }
      if (nineBall[i].classList.contains('active') && nineBall[i].classList.contains('right')) {
        playerTwoScore.innerHTML = decrementPlayerScore(playerTwoScore.innerHTML);
      }
      nineBall[i].classList.remove('active');
      nineBall[i].classList.remove('inactive');
      nineBall[i].classList.add('neutral');
    }
  };
  const decrementPlayerScore = obj => obj - 2;

  editScore.addEventListener('click', function () {
    deleteColumn();
    nineBallsNeutral();
    resetRack.hideRackButtons();
    let inputs = document.querySelectorAll('.row');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('row-top')){
        inputs[i].style.pointerEvents = 'auto';
      }
    }
  });

  return {
    appendColumn: appendColumn,
    deleteColumn: deleteColumn
  };
})();

module.exports = rackTable;