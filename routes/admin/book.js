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

bookRoute.post('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/create.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

bookRoute.get('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

bookRoute.post('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/update.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

bookRoute.get('/delete/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/delete.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

bookRoute.post('/paginate',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/book/paginate.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default bookRoute