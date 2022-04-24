//controllers/admin/user/delete.js
import read from '../../../models/user/read.js'
import mydelete from '../../../models/user/delete.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if(req.session.user.role === 'Admin'){
        await mydelete(req)
    }

    res.redirect('/admin/user')
}