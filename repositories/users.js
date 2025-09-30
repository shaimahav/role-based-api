const pool=require('../config/db')
const userQueries=require('../query/users')
const {hashPassword}=require('../utils/passwordHelper')
const createUser=(first_name,second_name,username,dob, address, place, city, district, state, email ,password)=>{
     const hashedPassword=hashPassword(password)
    return new Promise((resolve,reject)=>{
        pool.query(userQueries.createUser,[first_name,second_name,username,dob, address, place, city, district, state, email ,hashedPassword],(error,results)=>{
            if(error){
                reject(error)
            } 
            
            else{
                console.log(results.rows)
                const userId=results.rows?results.rows[0].user_id:undefined
                resolve(userId)
            }
        })
    })
}
const getUserByUsername=(username)=>{
    return new Promise((resolve,reject)=>{
        pool.query(userQueries.getUserByUsername,[username],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })
}
const getUserByUserId=(userId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(userQueries.getUserByUserId,[userId],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })
}
const getUserRolesByUserId=(userId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(userQueries.getUserRolesByUserId,[userId],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })
}
module.exports={
    createUser,
    getUserByUsername,
    getUserByUserId,
    getUserRolesByUserId
}