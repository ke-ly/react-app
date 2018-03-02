const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log(`mongoose connected ${DB_URL},连接成功！`);    
})

const models = {
    user:{
        name: {type:String,required:true},
        type:{type:String,required:true},
        pwd:{type:String,required:true},
        age:Number,
        date:String,
        desc:String,
        avatar:String,
        title:String,
        likes:Array,
        company:{type:String},
        money:{type:String}
    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}