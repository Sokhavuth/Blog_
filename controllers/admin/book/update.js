//controllers/admin/book/update.js
import settings from '../../../settings.js'
import read from '../../../models/book/read.js'
import update from '../../../models/book/update.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.userid === item.userid)){
        await update(req)
    }
    res.redirect('/admin/book')
}