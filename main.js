// var http = require('http')
//
// var app = http.createServer(function(req, res) {
// 	res.writeHead(200)
// 	res.end('Hello world\n')
// });
// app.listen(8080)
//

// var express = require('express')
// var app = express()
//
// app.get('/', function (req, res) {
//     res.send('Hello world with Express\n')
// })
// app.listen(8080)


var express = require('express')
var app = express()

app.get('/', (req, res) => res.send('Hello world with Express\n'))
app.listen(8080)