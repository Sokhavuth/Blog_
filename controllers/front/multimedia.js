//controllers/front/multimedia.js
import settings from '../../settings.js'
import randomMultimedia from '../../models/multimedia/randomMultimedia.js'


export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ពហុព័ត៌មាន"
    mySettings.route = '/multimedia'
    
    mySettings.multimedia = await randomMultimedia(req,155)
    
    res.render('base',{data:mySettings})
}