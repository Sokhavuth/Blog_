//routes/index.js
import express from 'express'
const index = express.Router()

index.get('/',async (req,res)=>{
    let module = await import('../settings.js')
    const settings = await module.default()
    settings.pageTitle = "ទំព័រ​ដើម"
    settings.route = '/'
    
    res.render('base',{data:settings})
})
 
export default index