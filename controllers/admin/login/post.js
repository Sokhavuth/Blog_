//controllers/admin/login/post.js
import settings from '../../../settings.js'
import checkUser from '../../../models/user/checkUser.js'
import bcrypt from 'bcryptjs'

let mySettings = JSON.parse(JSON.stringify(settings))

export default async (req,res)=>{
    let user = await checkUser(req)
      
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            req.session.user = user
            res.redirect('/admin/post')
        }else{
            mySettings.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
            mySettings.route = '/admin/login'
            res.render('base',{data:mySettings})
        }
    }else{
        mySettings.message = 'Email មិន​ត្រឹមត្រូវទេ'
        mySettings.route = '/admin/login'
        res.render('base',{data:mySettings})
    }
}