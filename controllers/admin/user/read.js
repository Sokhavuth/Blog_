//controllers/admin/user/read.js
import read from '../../../models/user/read.js'
import count from '../../../models/count.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.pageTitle = 'ទំព័រ​អ្នក​ប្រើប្រាស់'
    mySettings.route = '/admin/user'
    mySettings.type = 'user'

    if(req.params.id){
        mySettings.item = await read(req,mySettings.dItemLimit,req.params.id)
        req.session.password = mySettings.item.password
    }

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.count = await count(req,'users')

    res.render('base',{data:mySettings})
}