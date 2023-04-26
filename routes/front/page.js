//routes/front/page.js

import express from 'express'
const pageRoute = express.Router()

pageRoute.get('/',async (req,res)=>{
    let module = await import('../../controllers/front/page.js')
    module.default(req,res)
})
 
export default pageRoute