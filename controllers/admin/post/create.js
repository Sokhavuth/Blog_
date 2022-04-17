//controllers/admin/post/create.js
import create from '../../../models/post/create.js'

export default async (req,res)=>{
    await create(req)

    res.redirect('/admin/post')
}