//controllers/front/job.js
import settings from '../../settings.js'
import read from '../../models/job/read.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.route = '/job'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.randomJobs = await randomJobs(req,20)
    mySettings.user = req.session.user
    mySettings.pageTitle = mySettings.item.title

    res.render('base',{data:mySettings})
}