//controllers/front/post.js
import settings from '../../settings.js'
import read from '../../models/post/read.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ការផ្សាយ"
    mySettings.route = '/post'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.user = req.session.user
    mySettings.randomJobs = await randomJobs(req)

    res.render('base',{data:mySettings})
}