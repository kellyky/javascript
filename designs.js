// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let size = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid(height.value, width.value);
});

// Colors the grid cells
grid.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color.value;
});

// Creates empty grid to specifications entered
function makeGrid() {
  grid.innerHTML = "";
  for(row = 0; row < height.value; row++) {
    let row = grid.insertRow(0);
    for(cell= 0; cell < width.value; cell++) {
      let cell = row.insertCell(0);
    }
  }
}
