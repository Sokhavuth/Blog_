//controllers/front/books.js
import settings from '../../settings.js'
import getBooks from '../../models/book/getBooks.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​សៀវភៅ"
    mySettings.route = `/books/${req.params.type}`

    const result = await getBooks(req,mySettings.categoryPostLimit)
    mySettings.books = result.books
    mySettings.count = result.count
    mySettings.randomJobs = await randomJobs(req)
    
    res.render('base',{data:mySettings})
}