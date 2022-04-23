//controllers/admin/user/create.js
import create from '../../../models/user/create.js'

export default async (req,res)=>{
    if(req.session.user.role === 'Admin'){
        await create(req)
    }

    res.redirect('/admin/user')
}