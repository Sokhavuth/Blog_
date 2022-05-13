//controllers/admin/setting/create.js
import create from '../../../models/setting/create.js'

export default async (req,res)=>{

    if(req.session.user.role === 'Admin'){
       await create(req)
    }

    res.redirect('/admin/book')
}