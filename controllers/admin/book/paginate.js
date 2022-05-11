//controllers/admin/book/paginate.js
import read from '../../../models/book/read.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.type = 'book'
    res.json(mySettings)
}