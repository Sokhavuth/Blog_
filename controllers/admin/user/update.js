//controllers/admin/user/update.js
import read from '../../../models/user/read.js'
import update from '../../../models/user/update.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default

    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.id === item.id)){
        await update(req)
    }
    res.redirect('/admin/user')
}