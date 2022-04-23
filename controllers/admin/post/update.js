//controllers/admin/post/update.js
import read from '../../../models/post/read.js'
import update from '../../../models/post/update.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default

    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.id === item.author)){
        await update(req)
    }
    
    res.redirect('/admin/post')
}