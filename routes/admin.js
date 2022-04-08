//routes/admin.js
import express from 'express'
const admin = express.Router()

admin.get('/',(req,res)=>{
    res.render('base')
})
 
export default admin