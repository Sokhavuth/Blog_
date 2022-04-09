//routes/admin/post.js
import express from 'express'
const post = express.Router()
import settings from '../../settings.js'

post.get('/',function(req,res){
    if(req.session.user){
        settings.pageTitle = 'ទំព័រ​ការផ្សាយ'
        settings.route = '/admin/post'
        res.render('base',settings)
    }else{
        res.redirect('/admin/login')
    }
    
})

export default post