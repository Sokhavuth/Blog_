//controllers/admin/post/delete.js
import read from '../../../models/post/read.js'
import mydelete from '../../../models/post/delete.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default

    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.id === item.author)){
        await mydelete(req)
    }

    res.redirect('/admin/post')
}