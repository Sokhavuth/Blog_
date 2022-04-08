//routes/index.js
import express from 'express'
const index = express.Router()

index.get('/',(req,res)=>{
    res.render('base')
})
 
export default index