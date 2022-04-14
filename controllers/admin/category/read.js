//controllers/admin/category/read.js
import settings from '../../../settings.js'
import read from '../../../models/category/read.js'

export default async (req,res)=>{
    settings.pageTitle = 'ទំព័រ​ជំពូក'
    settings.route = '/admin/category'
    settings.categories = read(req,settings.dItemLimit)

    res.render('base',{data:settings})
}