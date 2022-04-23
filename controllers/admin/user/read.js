//controllers/admin/user/read.js
import settings from '../../../settings.js'
import read from '../../../models/user/read.js'
import count from '../../../models/count.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    mySettings.pageTitle = 'ទំព័រ​អ្នក​ប្រើប្រាស់'
    mySettings.route = '/admin/user'

    if(req.params.id){
        mySettings.item = await read(req,mySettings.dItemLimit,req.params.id)
        const date = mySettings.item.date.toLocaleDateString('fr-CA')
        const time = mySettings.item.date.toLocaleTimeString('it-IT')
        mySettings.item.date = date + 'T' +  time
        req.session.password = mySettings.item.password
    }

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.count = await count(req,'users')

    res.render('base',{data:mySettings})
}