const rackTable = (function () {
  const table = document.querySelector('.rack-table');
  const nineBall = document.querySelectorAll('.ball-9');
  const rackNumber = document.querySelector('.rack');
  const playerOneScore = document.querySelector('.player-one-score');
  const playerTwoScore = document.querySelector('.player-two-score');
  const deadBalls = document.querySelector('.dead-ball-score');

  const createCell = function(cell, text, style) {
    let div = document.createElement('div'); // create DIV element
    let txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    cell.appendChild(div); // append DIV to the table cell
  };
  const appendColumn = function(ev) {
    if(ev.target.classList.contains('active')) {
      for (let i = 0; i < table.rows.length; i++) {
        createCell(table.rows[i].insertCell(table.rows[i].cells.length), rackNumber.innerHTML, 'col');
      }
    } else {
      deleteColumn();
    }
  };
  const deleteColumn = function() {
    let lastCol = table.rows[0].cells.length - 1;
    
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(lastCol);
    }
  };

  for (let i = 0; i < nineBall.length; i++) {
    nineBall[i].addEventListener('click', appendColumn);
  }
})();