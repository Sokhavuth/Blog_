//routes/admin/post.js
import express from 'express'
const post = express.Router()

post.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/post/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

post.post('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/post/create.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

post.get('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/post/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

post.post('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/post/update.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default post