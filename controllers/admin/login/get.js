//controllers/admin/login/get.js
import settings from '../../../settings.js'

export default (req,res)=>{
    if(req.session.user){
        res.redirect('/admin/post')
    }else{
        settings.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
        settings.message = ''
        settings.route = '/admin/login'
  
        res.render('base', {data:settings})
    }
}