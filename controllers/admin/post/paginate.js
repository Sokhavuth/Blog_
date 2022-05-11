//controllers/admin/post/paginate.js
import read from '../../../models/post/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.type = 'post'
    res.json(mySettings)
}