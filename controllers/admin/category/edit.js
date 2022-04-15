//controllers/admin/category/edit.js
import settings from '../../../settings.js'
import edit from '../../../models/category/edit.js'

export default async (req,res)=>{
    settings.pageTitle = 'ទំព័រ​ជំពូក'
    settings.route = '/admin/category/edit'
    if(req.session.user.role === 'Admin'){
        edit(req)
    }

    res.redirect('/admin/category')
}