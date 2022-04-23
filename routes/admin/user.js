//routes/admin/user.js
import express from 'express'
const routeUser = express.Router()

routeUser.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/user/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

routeUser.post('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/user/create.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

routeUser.get('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/user/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

routeUser.post('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/user/update.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

routeUser.get('/delete/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/user/delete.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default routeUser