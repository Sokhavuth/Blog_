//controllers/admin/category/create.js
import create from '../../../models/category/create.js'

export default async (req,res)=>{
        if(req.session.user.role === 'Admin'){
       await create(req)
    }

    res.redirect('/admin/category')
}