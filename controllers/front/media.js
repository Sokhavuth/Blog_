//controllers/front/media.js
import settings from '../../settings.js'
import read from '../../models/multimedia/read.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ពហុព័ត៌មាន"
    mySettings.route = '/media'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.user = req.session.user
    
    res.render('base',{data:mySettings})
}