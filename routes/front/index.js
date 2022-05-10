//routes/index.js
import express from 'express'
const indexRoute = express.Router()

indexRoute.get('/',async (req,res)=>{
    let module = await import('../../controllers/front/index.js')
    module.default(req,res)
})
 
export default indexRoute