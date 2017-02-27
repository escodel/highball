const rackTable = (function () {
  const table = document.querySelector('.rack-table');
  const nineBall = document.querySelectorAll('.ball-9');

  const createCell = function(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
      txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    cell.appendChild(div); // append DIV to the table cell
  };
  const appendColumn = function () {
    console.log('appendColumn');
    for (let i = 0; i < table.rows.length; i++) {
      createCell(table.rows[i].insertCell(table.rows[i].cells.length), i, 'col');
    }
  };

  for (let i = 0; i < nineBall.length; i++) {
    nineBall[i].addEventListener('click', appendColumn);
  }
})();