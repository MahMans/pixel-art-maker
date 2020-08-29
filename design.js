// Select size and color input
const HEIGHT = document.querySelector("#inputHeight");
const WIDTH = document.querySelector("#inputWidth");
const SUBMIT = document.querySelector("#submit");
const COLOR = document.querySelector("#colorPicker");
let table = document.querySelector("#pixelCanvas");

function makeGrid() {
  // get height and width values
  let height = HEIGHT.value, width = WIDTH.value;
  let rCell, cCell;

  let rows = document.getElementsByClassName("row-cell");

  // check if table is empty, and if not, empty it
  if (rows.length) {
    table.innerHTML= "";
  }

  // add row cells
  for(let r = 1; r <= height; r++){
    rCell = document.createElement('tr');
    rCell.className = "row-cell";
    table.appendChild(rCell);
  }

  // add column cells
  for(let i = 0; i <= rows.length-1; i++){
    for(let c = 1; c <= width; c++){
      cCell = document.createElement('td');
      rows[i].appendChild(cCell);
    }}

  table.addEventListener('click', function(evt){
  	if(evt.target.nodeName === "TD"){
  		evt.target.style.backgroundColor = COLOR.value;
  	}
    
  });
}

// When size is submitted by the user, call makeGrid()
SUBMIT.addEventListener('click', function(evt){
  evt.preventDefault();
  makeGrid();
});
