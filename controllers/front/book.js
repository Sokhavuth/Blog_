//controllers/front/book.js
import settings from '../../settings.js'
import read from '../../models/book/read.js'
import getArticles from '../../models/book/getArticles.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​សៀវភៅ"
    mySettings.route = '/book'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.articles = await getArticles(req,mySettings.item.bookTitle)
    mySettings.randomJobs = await randomJobs(req)
    mySettings.user = req.session.user
    
    res.render('base',{data:mySettings})
}