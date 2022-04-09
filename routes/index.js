//routes/index.js
import express from 'express'
const index = express.Router()
import settings from '../settings.js'

index.get('/',(req,res)=>{
    res.render('base',settings)
})
 
export default index