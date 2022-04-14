//controllers/admin/category/create.js
import settings from '../../../settings.js'
import create from '../../../models/category/create.js'

export default async (req,res)=>{
    settings.pageTitle = 'ទំព័រ​ជំពូក'
    settings.route = '/admin/category'
    if(req.session.user.role === 'Admin'){
        create(req)
    }

    res.redirect('/admin/category')
}