//controllers/admin/category/read.js
import settings from '../../../settings.js'
import read from '../../../models/category/read.js'
import count from '../../../models/count.js'

export default async (req,res)=>{
    settings.pageTitle = 'ទំព័រ​ជំពូក'
    settings.route = '/admin/category'
    settings.items = await read(req,settings.dItemLimit)
    settings.count = await count(req,'categories')

    res.render('base',{data:settings})
}