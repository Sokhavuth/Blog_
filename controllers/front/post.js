//controllers/front/post.js
import settings from '../../settings.js'
import read from '../../models/post/read.js'

export default async (req,res)=>{
    let mySettings = await settings()
    mySettings.pageTitle = "ទំព័រ​ការផ្សាយ"
    mySettings.route = '/post'

    mySettings.item = await read(req,false,req.params.id)
    mySettings.user = req.session.user

    res.render('base',{data:mySettings})
}