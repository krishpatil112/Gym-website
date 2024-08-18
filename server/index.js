 const express = require("express")
 const mongoose = require("mongoose")
 const cors = require("cors")
 const CustomerModel = require("./models/customer")


 const app = express()
 app.use(express.json())
 app.use(cors())

 mongoose.connect("mongodb://127.0.0.1:27017/gym");

 app.post('/login', (req, res) => {
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("User doesn't Exits")
        }
    })
 })

 app.post('/register', (req, res) => {
    CustomerModel.create(req.body)
    .then(customer => res.json(customer))
    .catch(err => res.json(err))
 })

app.listen(3001,() => {
    console.log("server is running")
})