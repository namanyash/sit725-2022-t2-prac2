const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/addTwoNumbers', function(req, res) {
    // res.send("Output: " + req.params.test);
    console.log(req);
    const num1 =  parseInt(req.query.num1);
    const num2 =  parseInt(req.query.num2);
    const answer = num1 + num2 ; 
    res.send("Sum of numbers " + num1 + " & " + num2 + " is " + answer);
});

var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("App is running on the port: "+ port)
})