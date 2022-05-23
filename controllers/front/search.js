//controllers/front/search.js
import read from '../../models/search/read.js'
import randomJobs from '../../models/job/randomJobs.js'

export default async (req,res)=>{
    let module = await import('../../settings.js')
    let mySettings = await module.default()
    
    mySettings.pageTitle = 'ទំព័រ​ស្វែង​រក'
    mySettings.route = '/search'

    mySettings.items = await read(req,20)
    mySettings.type = req.body.type
    mySettings.randomJobs = await randomJobs(req)

    res.render('base',{data:mySettings})
}