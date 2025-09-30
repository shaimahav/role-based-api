const express=require('express')
const dotenv=require('dotenv')
const productsRouter=require('./routes/products')
const errorHandler=require('./middleware/errorHandler')
const users=require('./routes/users')
const app=express()
dotenv.config({path:'./config/config.env'})
const PORT=process.env.PORT||3000
app.use(express.json());
app.use('/api/v1/products',productsRouter)
app.use('/api/v1/users',users)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Running in the ${process.env.NODE_ENV} Development And Listening in the PORT:${PORT}`)
})