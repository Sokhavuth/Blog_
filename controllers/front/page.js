//controllers/front/page.js
import settings from '../../settings.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.route = '/page'

    mySettings.user = req.session.user
    mySettings.pageTitle = 'contact'

    res.render('base',{data:mySettings})
}