const express = require('express');
// const unitls = require('utility');

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list',(req,res)=>{
    User.find({},(e,d)=>{
        return res.json(d)
    })
})

Router.post('/login',(req,res)=>{
    const {userName,pwd} = req.body;

    User.findOne({name:userName,pwd:pwd},(e,d)=>{
        if(!d){
            return res.json({code:1,msg:"用户名或者密码错误"});
        }

        return res.json({code:0,data:d})
    })
})

Router.post('/register',(req,res)=>{    
    const {userName, pwd, type} = req.body;
    
    User.findOne({name:userName},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }

        const userModel = new User({name:userName,type,pwd:pwd});
        userModel.save((e,d)=>{
            if(e){
                return res.json({code:1,msg:"后端出错"});
            }

            const {user, type, _id} = d;

            return res.json({code:0,data:{userName, type, _id}})
        })
    })
})


module.exports = Router;