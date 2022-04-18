//routes/admin/book.js
import express from 'express'
const bookRoute = express.Router()

bookRoute.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default bookRoute