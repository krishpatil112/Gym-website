const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nikhildeshmukh170:zYreIG8OGuYLhjha@cluster0.wwqzw.mongodb.net/")
.then(()=>{
    console.log("db connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const LogInSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const connection = new mongoose.model("collection1",LogInSchema)

module.exports = connection