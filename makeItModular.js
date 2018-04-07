
const filterListFilesHelper = require('./makeItModularHelper');

const dirName = process.argv[2];
const ext = process.argv[3];

filterListFilesHelper(dirName, ext, function(err, data) {
  if (err) {
    return console.log(err);
  }
  data.forEach(fileName => console.log(fileName));
})
