//controllers/front/post.js
import settings from '../../settings.js'
import read from '../../models/post/read.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.route = '/post'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.user = req.session.user
    mySettings.randomJobs = await randomJobs(req)
    mySettings.pageTitle = mySettings.item.title

    res.render('base',{data:mySettings})
}