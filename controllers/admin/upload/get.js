//controllers/admin/upload/get.js

export default async (req,res)=>{
    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.pageTitle = 'ទំព័រ​ Upload'
    mySettings.route = '/admin/upload'

    res.render('base',{data:mySettings})
}