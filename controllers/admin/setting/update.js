//controllers/admin/setting/update.js
import update from '../../../models/setting/update.js'

export default async (req,res)=>{
    if(req.session.user.role === 'Admin'){
        await update(req)
    }
    
    res.redirect('/admin/post')
}