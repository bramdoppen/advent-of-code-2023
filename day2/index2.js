const fs = require("fs");

const inputFileName = "input.txt";

const allFileContents = fs.readFileSync(inputFileName, "utf-8");

let totalSum = 0;

allFileContents.split(/\r?\n/).forEach((line) => {
  var cells = line.split(/\s+/); // Splits the string into an array of strings
  cells.splice(0, 1); // removes the 'game' text

  const blueAmounts = [];
  const redAmounts = [];
  const greenAmounts = [];
  const minimumAmounts = [];

  cells.forEach((cell, index) => {
    if (cell.includes("blue")) {
      blueAmounts.push(getValueForCell(cells, index));
    }
    if (cell.includes("red")) {
      redAmounts.push(getValueForCell(cells, index));
    }
    if (cell.includes("green")) {
      greenAmounts.push(getValueForCell(cells, index));
    }
  });

  // Check the minimum amount of cubes for each color and push it to the array
  minimumAmounts.push(Math.max(...blueAmounts));
  minimumAmounts.push(Math.max(...redAmounts));
  minimumAmounts.push(Math.max(...greenAmounts));

  // Multiply all values in array
  totalSum += minimumAmounts.reduce((a, b) => a * b);
});

// helper function
function getValueForCell(cells, index) {
  return cells[index - 1];
}

console.log(totalSum);
