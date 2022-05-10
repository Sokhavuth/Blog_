//routes/index.js
import settings from '../../settings.js'
import random from '../../models/post/random.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ដើម"
    mySettings.route = '/'
    mySettings.type = 'post'

    mySettings.random = await random(req,5)
    
    res.render('base',{data:mySettings})
}