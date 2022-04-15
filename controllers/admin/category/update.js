//controllers/admin/category/update.js
import update from '../../../models/category/update.js'

export default async (req,res)=>{
    if(req.session.user.role === 'Admin'){
        update(req)
    }
    res.redirect('/admin/category')
}