//controllers/book.js
import settings from '../../settings.js'
import read from '../../models/book/read.js'
import random from '../../models/book/random.js'
import getArticles from '../../models/book/getArticles.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​សៀវភៅ"
    mySettings.route = '/book'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.articles = await getArticles(req,mySettings.item.bookTitle)
    mySettings.random = await random(req,10)
    mySettings.user = req.session.user
    
    res.render('base',{data:mySettings})
}