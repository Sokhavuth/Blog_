//controllers/admin/search/read.js
import read from '../../../models/search/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()
    
    mySettings.pageTitle = 'ទំព័រ​ស្វែង​រក'
    mySettings.route = '/admin/search'

    mySettings.result = await read(req,20)
    mySettings.type = req.body.type

    res.render('base',{data:mySettings})
}