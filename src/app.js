const express =require("express")
const hbs =require("hbs")
const app=express()
const routes=require('./routes/main')
const mongoose=require("mongoose")
app.use('/static',express.static("public"))
app.use('',routes)
hbs.registerPartials("views/partials")

//mongoose.connect("mongodb://localhost/website_tut",()=>{
//console.log("db connected")
//})
app.set('view engine','hbs')
app.set("views","views")
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})