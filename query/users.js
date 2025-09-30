const createUser='INSERT INTO users(first_name,second_name,username,dob, address, place, city, district, state, email ,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING user_id'
const getUserByUsername='SELECT user_id,username,password FROM users WHERE username=$1'
const getUserByUserId='SELECT user_id,first_name,username,password FROM users WHERE username=$1'
const getUserRolesByUserId='SELECT r.role_name FROM roles r INNER JOIN userroles ur ON r.id=ur.role_id WHERE user_id=$1;'
module.exports={
    createUser,
    getUserByUsername,
    getUserByUserId,
    getUserRolesByUserId
}