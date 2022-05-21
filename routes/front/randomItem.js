//routes/front/randomItem.js
import express from 'express'
const randomItemRoute = express.Router()

randomItemRoute.post('/',async (req,res)=>{
    let module = await import('../../controllers/front/randomItem.js')
    module.default(req,res)
})
 
export default randomItemRoute