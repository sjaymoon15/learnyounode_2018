const fs = require('fs');

function countNewLineAsync() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err) {
      return console.log(err);
    }
    const numOfNewLines = fileContents.toString().split('\n').length - 1;
console.log(numOfNewLines);
  })
}

countNewLineAsync();
