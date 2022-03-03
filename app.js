const express=require("express")
const app=express()
const mongoose=require("mongoose")
const userRoutes=require('./routes/users')
const cors=require('cors')
const dbUrl='mongodb+srv://sahana:sahana123@cluster0.mpsui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("db connected");
    }
})
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/users",userRoutes)

app.get("/error",(req,res)=>{
    res.status(500).send("something went wrong")
})
module.exports=app