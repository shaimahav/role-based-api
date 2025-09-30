const userRepositories=require('../repositories/users')
const ErrorResponse=require('../utils/errorResponse')
const asyncHandler=require('../middleware/asyncHandler')
const {createJwt}=require('../utils/jwtHelper')
const {comaprePasswordWithHashedpassword}=require('../utils/passwordHelper')
const createUser=asyncHandler(async (req,res,next)=>{
  
    const {first_name,second_name,username,dob, address, place, city, district, state, email ,password}=req.body;
      const users= await userRepositories.getUserByUsername(username)
      if(users&&users.length>0)
      {
        return next(new ErrorResponse(`Username(${username} already taken) `,400))
      }
   
        const userId=await userRepositories.createUser(first_name,second_name,username,dob, address, place, city, district, state, email ,password)
        const token=createJwt(userId)
        console.log("UserId:",userId)
        if(userId)
        {
            res.status(201).json({message:"Users created successfully",username:username,token:token})
        }
})
const login=asyncHandler(async (req,res,next)=>{
  
    const {username,password}=req.body;
      const users= await userRepositories.getUserByUsername(username)
      if(!users || users.length==0)
      {
        return next(new ErrorResponse(`User not found `,400))
      }
   
        const user=users[0]
        const isValid=comaprePasswordWithHashedpassword(password,user.password)
        if(isValid)
        {
          const token=createJwt(users.user_id)
          res.status(200).json({message:"Logged in successfully ",user:{name:user.username},token:token})
        } 

     
})
module.exports={
    createUser,
    login
}