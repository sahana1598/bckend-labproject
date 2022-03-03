const express=require('express')
const UserRouter=express.Router()
const UserController=require('../controller/users')
const auth=require('../middleware/auth')
UserRouter.post('/register', UserController.register)
UserRouter.post('/login',UserController.login)
UserRouter.get('/getAllSamples',UserController.getAllSamples)
UserRouter.get('/getUser/:_id',UserController.getUser)
UserRouter.put('/getUser',UserController.getUsers)
UserRouter.post("/getUser",UserController.getUsers)
// UserRouter.post('/ParticularUser',UserController.particualarUser)
UserRouter.get('/getParticularUser/:_id',UserController.getParticularUser)

module.exports=UserRouter;