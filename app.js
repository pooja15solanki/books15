const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended: true}))

const SERVER_PORT = process.env.PORT || 3333;


app.use(function  (req,  res,  next) {
    res.header("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/',express.static(path.join(__dirname, 'public')))


app.use(bodyParser.json());

app.use('/api',require('./route/api'))

app.listen(SERVER_PORT, function(){
	console.log("Server started at 3333")
})