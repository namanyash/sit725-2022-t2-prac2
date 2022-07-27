const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/p/:test', function(req, res) {
    res.send("Output: " + req.params.test);
});

var port = process.env.port || 3001;

app.listen(port, ()=>{
    console.log("App is running on the port: "+ port)
})