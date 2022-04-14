//routes/admin/category.js
import express from 'express'
const category = express.Router()
import settings from '../../settings.js'

category.get('/',function(req,res){
    if(req.session.user){
        settings.pageTitle = 'ទំព័រ​ជំពូក'
        settings.route = '/admin/category'
        res.render('base',{data:settings})
    }else{
        res.redirect('/admin/login')
    }
})

export default category