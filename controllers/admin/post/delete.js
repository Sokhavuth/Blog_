//controllers/admin/post/delete.js
import settings from '../../../settings.js'
import read from '../../../models/post/read.js'
import mydelete from '../../../models/post/delete.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if((req.session.user.role === 'Admin')||(req.session.user.userid === item.userid)){
        await mydelete(req)
    }

    res.redirect('/admin/post')
}