//controllers/home/index.js
import settings from '../../settings.js'
import randomArticles from '../../models/book/randomArticles.js'
import randomBooks from '../../models/book/randomBooks.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ដើម"
    mySettings.route = '/'
    mySettings.type = 'book'

    mySettings.randomArticles = await randomArticles(req,8)
    mySettings.randomBooks = await randomBooks(req,8)
    
    res.render('base',{data:mySettings})
}