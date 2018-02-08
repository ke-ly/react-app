const express = require('express');
const mongoose = require('mongoose');


const app = express();
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log(`mongoose connected ${DB_URL},连接成功！`);    
})
const datajson = {
    name:'萧庭生',
    age:"61",
    type:"将军",
    desc:"我长林王府，无人恋栈权位",
    date:"10:00",
    avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2430565610,2590674444&fm=27&gp=0.jpg"
}
const UserSchema = mongoose.Schema({
    name: {type:String,required:true},
    age:Number,
    type:String,
    date:String,
    desc:String,
    avatar:String,
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
// app.get('/update',function(req,res){ 
//     User.update({age:18},{'$set':{"date":"15:00","avatar":"http://img1.imgtn.bdimg.com/it/u=2640120501,1363068424&fm=27&gp=0.jpg",'desc':"青蛙能说就就走，你却逃离表这生活"}},function(err,doc){
//         if(!err){
//             res.json(doc);
//         }else{
//             console.log(err);            
//         }
//     })
// })
app.get('/',function(req,res){
    res.send('<h1>express success</h1>');
})

let ser = app.listen(9092,function(){
    console.log('express success');    
})