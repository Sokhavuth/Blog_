//routes/front/post.js
import express from 'express'
const postRoute = express.Router()

postRoute.get('/:id',async (req,res)=>{
    let module = await import('../../controllers/front/post.js')
    module.default(req,res)
})
 
export default postRoute