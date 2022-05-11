//controllers/index.js
import settings from '../../settings.js'
import random from '../../models/book/random.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ដើម"
    mySettings.route = '/'
    mySettings.type = 'book'

    mySettings.random = await random(req,5)
    
    res.render('base',{data:mySettings})
}