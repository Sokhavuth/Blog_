//routes/index.js
import settings from '../../settings.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ដើម"
    mySettings.route = '/'
    
    res.render('base',{data:mySettings})
}