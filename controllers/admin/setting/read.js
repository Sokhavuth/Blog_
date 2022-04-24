//controllers/admin/setting/read.js
import read from '../../../models/setting/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.pageTitle = 'ទំព័រ​ Setting'
    mySettings.route = '/admin/setting'

    mySettings.item = await read(req)

    res.render('base',{data:mySettings})
}