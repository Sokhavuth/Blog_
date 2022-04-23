//controllers/admin/user/delete.js
import settings from '../../../settings.js'
import read from '../../../models/user/read.js'
import mydelete from '../../../models/user/delete.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let item = await read(req,mySettings.dItemLimit,req.params.id)
    if(req.session.user.role === 'Admin'){
        await mydelete(req)
    }

    res.redirect('/admin/user')
}