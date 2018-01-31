const express = require('express');
const mongoose = require('mongoose');


const app = express();
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log(`mongoose connected ${DB_URL},连接成功！`);    
})
const datajson = {
    name:'haha',
    age:"22",
    type:"ITs",
}
const UserSchema = mongoose.Schema({
    name: {type:String,required:true},
    age:Number,
    type:String,
    likes:Array
});
const User = mongoose.model('user', UserSchema);

// app.get('/create',function(req,res){
//     User.create(datajson,function(err,doc){
//         if(!err){
//             res.send(doc)          
//         }else{
//             res.send(err)         
//         }
//     })
// })

app.get('/data',function(req,res){ 
    User.find({},function(err,doc){
        if(!err){
            res.json(doc)
        }else{
            console.log(err);            
        }
    })
})
app.get('/del',function(req,res){ 
    User.remove({age:22},function(err,doc){
        if(!err){
            res.json(doc)
        }else{
            console.log(err);            
        }
    })
})
app.get('/one',function(req,res){ 
    User.findOne({age:15},function(err,doc){
        if(!err){
            res.json(doc)
        }else{
            console.log(err);            
        }
    })
})
app.get('/update',function(req,res){ 
    User.update({age:22},{'$set':{"name":"蜗牛"}},function(err,doc){
        if(!err){
            res.json(doc);
        }else{
            console.log(err);            
        }
    })
})
app.get('/',function(req,res){
    res.send('<h1>express success</h1>');
})
let ser = app.listen(9092,function(){
    console.log('express success');    
})