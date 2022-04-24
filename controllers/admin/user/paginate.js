//controllers/admin/user/paginate.js
import read from '../../../models/user/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.items = await read(req,mySettings.dItemLimit)
    res.json(mySettings)
}