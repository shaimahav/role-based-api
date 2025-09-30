const { Pool }=require('pg')
const pool=new Pool({
    user:'products-user',
    password:'shaimahav',
    database:'products_db',
    host:'localhost',
    port:5433
})
module.exports=pool