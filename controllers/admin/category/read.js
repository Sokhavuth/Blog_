//controllers/admin/category/read.js
import settings from '../../../settings.js'
import read from '../../../models/category/read.js'
import count from '../../../models/count.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res,id=0)=>{
    mySettings.pageTitle = 'ទំព័រ​ជំពូក'
    mySettings.route = '/admin/category'

    if(id){
        mySettings.item = await read(req,mySettings.dItemLimit,id)
        const date = mySettings.item.date.toLocaleDateString('fr-CA')
        const time = mySettings.item.date.toLocaleTimeString('it-IT')
        mySettings.item.date = date + 'T' +  time
    }

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.count = await count(req,'categories')

    res.render('base',{data:mySettings})
}