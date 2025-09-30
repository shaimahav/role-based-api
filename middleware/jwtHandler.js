const {verifyToken}=require('../utils/jwtHelper')
const userRepositories=require('../repositories/users')
const verifyTokenHandler=async (req,res,next)=>{
    const token=req.headers['authorization']
    if(token && token.includes('Bearer')){
        try{
            const result=await verifyToken(token)
            const userId=result.userId;
            req.userId=userId
            return next()
        }catch(error){
          res.status(401).json({message:"Token is invalid"})
    }
    }
    else{
        res.status(401).json({message:"Token not found"})
    }
}
const verifyRoles=(roles)=>{
    return async (req,res,next)=>{
        userId=req.userId;
        const userRoles=await userRepositories.getUserRolesByUserId(userId)
        let hasRole=false
        for(let role of userRoles)
        {
            if(roles.includes(role.role_name))
            {
                hasRole=true;
                break;
            }
        }
        if(hasRole){
            next()
        }
        else{
            res.status(403).json({message:"You don't have the permission"})
        }
    }
}
module.exports={
    verifyTokenHandler,
    verifyRoles
}