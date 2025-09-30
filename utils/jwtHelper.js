var jwt = require('jsonwebtoken');
var SECRET='hghhjjhhjhjgdsdhch'
function createJwt(userId){
    var token = jwt.sign({ userId:userId }, SECRET);
    return token
}
function verifyToken(token){
    const formattedToken=token.replace("Bearer ","")
    return new Promise((resolve,reject)=>{
        jwt.verify(formattedToken,SECRET,(err,decoded)=>{
        if(err) return reject({valid:false,error:err})
        resolve({valid:true,userId:decoded.userId})
    })
    })
}
module.exports={
    createJwt,
    verifyToken
}
