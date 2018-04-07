const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extname, callback) {
  fs.readdir(dirName, function(err, listOfFiles) {
    if (err) {
      return callback(err);
    }
    const extnameWithDot = '.' + extname;
    return callback(null, listOfFiles.filter(file => path.extname(file) === extnameWithDot));
  })
}
