// my solution
const http = require('http');
const url = process.argv[2];

http.get(url, function(response) {
  response.on('data', function(data) {
    console.log(data.toString());
  })
})

// official solution
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

