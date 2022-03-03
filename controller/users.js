const userModel = require('../model/users')
// const particularUserModel=require('../model/view')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
SECRET_KEY = "TECHNOELEVATE"
const register = async (req, res, next) => {
    let { fname, email, password, role } = req.body
    try {
        const emailExists = await userModel.findOne({ email: email })
        if (emailExists) {
            res.status(400).json({
                error: true,
                message: 'email already there',
                data: null  })
        }
        else {
            const saltround = 10
            const salt = await bcrypt.genSalt(saltround)
            const hashedPassword = await bcrypt.hash(password, salt)
            await userModel.insertMany([{
                fname,
                email,
                password: hashedPassword,
                role
            }])
            res.status(200).json({
                error: true,
                message: "register success",
                data: {
                    fname, role,email
                }
            })
        }
    }
    catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    let { email, password } = req.body
    try {
        const userData = await userModel.findOne({ email }).lean()
        if (userData) {
            let { fname, role } = userData
            const isPasswordMatch = await bcrypt.compare(password, userData.password)
            if (isPasswordMatch) {
                const payload = { fname, role }
                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: "5h"
                })
                res.status(200).json({
                    error: false,
                    message: "login successful",
                    data: {
                        fname, role, token,email,password
                    }
                })
            }
            else {
                res.status(401).json({
                    error: true,
                    message: "invalid password",
                    data: null
                })
            }
        }
    }
    catch (err) {
        next(err)
    }
}

const getAllSamples= async(req,res)=>{
    try{
        const samples= await userModel.find().lean();
        res.json({
            error:false,
            message:"",
            data:{
                samples
            }
        })
    }
    catch(err){
        next(err)
    }
}


const getParticularUser= async(req,res)=>{
    try{
        const views= await userModel.find().lean();
        res.json({
            error:false,
            message:"",
            data:{
                views
            }
        })
    }
    catch(err){
        next(err)
    }
}
const getUser=async(req,res)=>{
    console.log(req.params._id);
    _id=parseInt(req.params._id)
    try{

         const val=await userModel.findOne({_id:req.params._id}).lean()
        res.json({
            error:false,
            message:"get edit",
            data:{
                val
            }
        })
    }
    catch(err){
       next(err)    
   }
 }

const getUsers=async(req,res)=>{
    console.log(req.body)
    let {_id,fname,email}=req.body;
    try{
        const val1=await userModel.updateOne({_id},{$set:{fname,email}})
        res.json({
            error:false,
            message:"edit successful",
            data:{ val1 }
        })
    }
    catch(err){
        next(err)
    } 
}
module.exports = { login, register,getAllSamples ,getUser,getUsers,getParticularUser}