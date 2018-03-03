const express = require('express');
// const unitls = require('utility');
const _filter = {pwd:0,__v:0};

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/info',(req,res)=>{

    const { userid } = req.cookies;
    
    if(!userid){
        return res.json({code:1})
    }

    User.findOne({_id:userid},_filter,(e,d)=>{
        if(e){
            return res.json({code:1,msg:'后端出错了'})
        }     
        if(d){
            return res.json({code:0,data:d})
        }
    })
})

Router.post('/update',(req,res)=>{
    const userid = req.cookies.userid;
    const body = req.body;
    if(!userid){
        return res.json({code:1})
    }
    User.findByIdAndUpdate(userid,body,function(err,doc){
        if(err){
            return res.json({code:1,msg:"后端出错"});
        }
        const data = Object.assign({},{
            name:doc.name,
            type:doc.type
        },body)

        return res.json({code:0,data:data})
    })
})

Router.post('/login',(req,res)=>{
    const {userName,pwd} = req.body;

    User.findOne({name:userName,pwd:pwd},_filter,(e,d)=>{
        if(!d){
            return res.json({code:1,msg:"用户名或者密码错误"});
        }

        res.cookie('userid',d._id);
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
            res.cookie('userid',_id);
            return res.json({code:0,data:{userName, type, _id}})
        })
    })
})


module.exports = Router;