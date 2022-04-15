//controllers/admin/category/delete.js
import mydelete from '../../../models/category/delete.js'

export default async (req,res)=>{
    if(req.session.user.role === 'Admin'){
        mydelete(req)
    }
    
    res.redirect('/admin/category')
}