const jwt=require('jsonwebtoken')
SECRET_KEY = "TECHNOELEVATE"
const authorizeUserAdmin=async(req,res,next)=>{
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token=req.headers['authorization'].split(' ')[1]
        const payload=await jwt.verify(token,SECRET_KEY)
        if(payload.role==='users' || payload.role==='admin'){
            next();
        }
        else{
            res.status(401).json({
                error:true,
                message:"not authorized",
                data:null
            })
        }
    }
}
const authorizeAdmin=async(req,res,next)=>{
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token=req.headers['authorization'].split('')[1]
        const payload=await jwt.verify(token,SECRET_KEY)
        if( payload==='admin'){
            next()
        }
        else{
            res.status(401).json({
                error:true,
                message:"not authorized",
                data:null
            })
        }
    }
}

module.exports={
    authorizeAdmin,authorizeUserAdmin
}