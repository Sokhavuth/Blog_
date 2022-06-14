//routes/front/books.js
import express from 'express'
const booksRoute = express.Router()

booksRoute.get('/:type',async (req,res)=>{
    let module = await import('../../controllers/front/books.js')
    module.default(req,res)
})

booksRoute.post('/:type/paginate',async (req,res)=>{
    let module = await import('../../controllers/front/paginate.js')
    module.default(req,res)
})
 
export default booksRoute