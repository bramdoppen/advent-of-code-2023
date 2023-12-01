const fs = require("fs");

// for assignment 1: codes.txt
// for assignment 2: codes-2.txt
const inputFileName = "codes.txt";

const allFileContents = fs.readFileSync(inputFileName, "utf-8");

let totalNumber = 0;

allFileContents.split(/\r?\n/).forEach((line) => {
  const regexPattern = /(\d)/g;
  const numbersArray = line.match(regexPattern);

  let number = 0;

  number = parseInt(
    numbersArray[0] + "" + numbersArray[numbersArray.length - 1]
  );

  totalNumber += number;
});

console.log("TOTAL", totalNumber);
