const rackTable = (function () {
  const table = document.querySelector('.rack-table');
  const nineBall = document.querySelectorAll('.ball-9');
  const rackNumber = document.querySelector('.rack');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  const innings = document.querySelector('.number-innings');
  const deadBalls = document.querySelector('.dead-ball-score');

  const createCell = function(cell, text, style) {
    let div = document.createElement('div'); // create DIV element
    let txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    cell.appendChild(div); // append DIV to the table cell
  };
  const appendColumn = function(ev) {
    if(ev.target.classList.contains('neutral')) {
      createCell(table.rows[0].insertCell(table.rows[0].cells.length), rackNumber.innerHTML, 'col-' + 1);
      createCell(table.rows[1].insertCell(table.rows[1].cells.length), playerOneScore.innerHTML, 'col-' + 1);
      createCell(table.rows[2].insertCell(table.rows[2].cells.length), innings.innerHTML, 'col-' + 1);
      createCell(table.rows[3].insertCell(table.rows[3].cells.length), deadBalls.innerHTML, 'col-' + 1);
      createCell(table.rows[4].insertCell(table.rows[4].cells.length), playerTwoScore.innerHTML, 'col-' + 1);
    } else {
      deleteColumn();
    }
  };
  const deleteColumn = function() {
    let lastCol = table.rows[0].cells.length - 1;
    
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(lastCol);
    }
  };

//  for (let i = 0; i < nineBall.length; i++) {
//    nineBall[i].addEventListener('click', appendColumn);
//  }
  
  return {
    appendColumn: appendColumn
  };
})();

module.exports = rackTable;