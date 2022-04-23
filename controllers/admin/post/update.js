//controllers/admin/post/update.js
import settings from '../../../settings.js'
import read from '../../../models/post/read.js'
import update from '../../../models/post/update.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.id === item.author)){
        await update(req)
    }
    
    res.redirect('/admin/post')
}