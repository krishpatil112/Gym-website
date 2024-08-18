 const express = require("express")
 const mongoose = require("mongoose")
 const cors = require("cors")


 const app = express()
 app.use(express.json())
 app.use(cors())

 mongoose.connect("mongodb://127.0.0.1:27017/gym");
// HJe02qlAaRWm5F4W

app.listen(3001,() => {
    console.log("server is running")
})