//controllers/admin/upload/get.js
import settings from '../../../settings.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    mySettings.pageTitle = 'ទំព័រ​ Upload'
    mySettings.route = '/admin/upload'

    res.render('base',{data:mySettings})
}