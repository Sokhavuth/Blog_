//controllers/admin/login/post.js
import settings from '../../../settings.js'
import checkUser from '../../../models/user/checkUser.js'

export default async (req,res)=>{
    let user = await checkUser(req)
      
    if(user){
        if(user.password == req.body.password){
            req.session.user = user
            res.redirect('/admin/post')
        }else{
            settings.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
            settings.route = '/admin/login'
            res.render('base',{data:settings})
        }
    }else{
        settings.message = 'Email មិន​ត្រឹមត្រូវទេ'
        settings.route = '/admin/login'
        res.render('base',{data:settings})
    }
}