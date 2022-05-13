//controllers/admin/login/get.js
//import settings from '../../../settings.js'

export default async (req,res)=>{
    if(req.session.user){
        res.redirect('/admin/book')
    }else{
        let module = await import('../../../settings.js')
        let mySettings = await module.default()

        mySettings.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
        mySettings.message = ''
        mySettings.route = '/admin/login'
  
        res.render('base', {data:mySettings})
    }
}