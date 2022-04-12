//routes/index.js
import express from 'express'
const index = express.Router()
import settings from '../settings.js'

index.get('/',(req,res)=>{
    settings.pageTitle = "ទំព័រ​ដើម"
    settings.route = '/'
    res.render('base',{data:settings})
})
 
export default index