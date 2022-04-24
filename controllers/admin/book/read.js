//controllers/admin/book/read.js
import read from '../../../models/book/read.js'
import readCategory from '../../../models/category/read.js'
import count from '../../../models/count.js'

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.pageTitle = 'ទំព័រ​សៀវភៅ'
    mySettings.route = '/admin/book'

    if(req.params.id){
        mySettings.item = await read(req,mySettings.dItemLimit,req.params.id)
        const date = mySettings.item.date.toLocaleDateString('fr-CA')
        const time = mySettings.item.date.toLocaleTimeString('it-IT')
        mySettings.item.date = date + 'T' +  time
    }

    mySettings.items = await read(req,mySettings.dItemLimit)
    mySettings.count = await count(req,'books')
    mySettings.categories = await readCategory(req,'all')

    res.render('base',{data:mySettings})
}