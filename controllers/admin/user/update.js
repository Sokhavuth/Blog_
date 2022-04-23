//controllers/admin/user/update.js
import settings from '../../../settings.js'
import read from '../../../models/user/read.js'
import update from '../../../models/user/update.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.id === item.id)){
        await update(req)
    }
    res.redirect('/admin/user')
}