//routes/front/book.js
import express from 'express'
const bookRoute = express.Router()

bookRoute.get('/:id',async (req,res)=>{
    let module = await import('../../controllers/front/book.js')
    module.default(req,res)
})
 
export default bookRoute