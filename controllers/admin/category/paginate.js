//controllers/admin/category/paginate.js
import read from '../../../models/category/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.type = 'category'
    res.json(mySettings)
}