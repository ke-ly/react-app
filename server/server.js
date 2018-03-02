const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);


let ser = app.listen(9092,function(){
    console.log('express success！port:9092');    
})