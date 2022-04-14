//routes/admin/category.js
import express from 'express'
const category = express.Router()

category.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/category/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

category.post('/', async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/category/create.js')
        module.default(req,res)
    }else{
      res.redirect('/admin/login')
    }
})

export default category