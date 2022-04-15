//controllers/admin/category/read.js
import settings from '../../../settings.js'
import read from '../../../models/category/read.js'
import count from '../../../models/count.js'

export default async (req,res)=>{
    let mySettings = JSON.parse(JSON.stringify(settings))
    mySettings.pageTitle = 'ទំព័រ​ជំពូក'
    mySettings.route = '/admin/category'
    
    if(req.params.id){
        mySettings.item = await read(req,mySettings.dItemLimit,req.params.id)
        const date = mySettings.item.date.toLocaleDateString('fr-CA')
        const time = mySettings.item.date.toLocaleTimeString('it-IT')
        mySettings.item.date = date + 'T' +  time
    }

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.count = await count(req,'categories')

    res.render('base',{data:mySettings})
}