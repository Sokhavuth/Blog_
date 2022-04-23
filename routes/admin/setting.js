//routes/admin/setting.js
import express from 'express'
const settingRoute = express.Router()

settingRoute.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/setting/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

settingRoute.post('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/setting/create.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

settingRoute.post('/edit/:id',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/setting/update.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default settingRoute