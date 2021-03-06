//controllers/front/index.js
import settings from '../../settings.js'
import randomArticles from '../../models/book/randomArticles.js'
import randomBooks from '../../models/book/randomBooks.js'
import randomVideos from '../../models/post/randomVideos.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ដើម"
    mySettings.route = '/'
    mySettings.type = 'book'

    mySettings.randomArticles = await randomArticles(req,15)
    mySettings.randomBooks = await randomBooks(req,8)
    mySettings.randomVideos = await randomVideos(req,13)
    mySettings.randomJobs = await randomJobs(req,15)
    
    res.render('base',{data:mySettings})
}