const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const ext = process.argv[3];

function filterListFiles() {
  fs.readdir(pathName, function(err, listOfFiles) {
    if (err) {
      return console.log(err);
    }
    for (let file of listOfFiles) {
      if (path.extname(file).slice(1) === ext) {
        console.log(file);
      }
    }
  })
}

filterListFiles();
