// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
let pixelCanvas = document.getElementById('pixelCanvas');

// Change cell color on click event
function clickCell(event) {
    let targetCell = event.target;
    if (targetCell.tagName === 'TD') {
        targetCell.style.backgroundColor = colorPicker.value;
    }
};

// Generate pixel grid on submit event
function makeGrid(event) {
    // Width value from form
    let inputWidth = document.getElementById('inputWidth').value;
    //Height value from form
    let inputHeight = document.getElementById('inputHeight').value;
    // Prevent default action
    event.preventDefault();
    // Initialize the pixelCanvas
    pixelCanvas.innetHTML = "";
    // Build canvas from input width and height values
    for (let r = 0; r < inputHeight; r++) {
        let row = document.createElement('TR');
        pixelCanvas.appendChild(row);
        for (let c = 0; c < inputWidth; c++) {
            let cell = document.createElement('TD');
            row.appendChild(cell);
        }
    }
};

// Add event listener for submit button to call `makeGrid` function
sizePicker.addEventListener('submit', makeGrid);
// Add event listener for cell click event to call `clickCell` function
pixelCanvas.addEventListener('click', clickCell);