//controllers/admin/category/paginate.js
import settings from '../../../settings.js'
import read from '../../../models/category/read.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    mySettings.items = await read(req,mySettings.dItemLimit)
    res.json(mySettings)
}