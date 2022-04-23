//controllers/admin/user/paginate.js
import settings from '../../../settings.js'
import read from '../../../models/user/read.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    mySettings.items = await read(req,mySettings.dItemLimit)
    res.json(mySettings)
}