const fs = require("fs");

const inputFileName = "input.txt";

const availableCubes = {
  red: 12,
  blue: 14,
  green: 13,
};

const gamesToPlay = [];

const allFileContents = fs.readFileSync(inputFileName, "utf-8");

allFileContents.split(/\r?\n/).forEach((line) => {
  var cells = line.split(/\s+/); // Splits the string into an array of strings
  cells.splice(0, 1); // removes the 'game' text
  const gameId = parseInt(cells[0]);

  const isPlayable = []; // array of booleans

  cells.forEach((cell, index) => {
    if (cell.includes("blue")) {
      isPlayable.push(checkerPerColor("blue", cells, index));
    }
    if (cell.includes("red")) {
      isPlayable.push(checkerPerColor("red", cells, index));
    }
    if (cell.includes("green")) {
      isPlayable.push(checkerPerColor("green", cells, index));
    }
  });

  const allItemsPlayable = (arr) => arr.every((v) => v === true);
  if (allItemsPlayable(isPlayable)) {
    gamesToPlay.includes(gameId) ? null : gamesToPlay.push(gameId);
  }
});

// helper function
function checkerPerColor(color, cells, index) {
  const valueOf = cells[index - 1];
  return valueOf <= availableCubes[color];
}

// These games can be played
console.log(gamesToPlay);

// Calculate the sum of all the elements in an array
const totalSum = gamesToPlay.reduce((a, b) => a + b, 0);
console.log(totalSum);
