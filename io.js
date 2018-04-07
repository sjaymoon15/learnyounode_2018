const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const bufferStr = buffer.toString();
console.log(bufferStr.split('\n').length - 1);

