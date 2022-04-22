//controllers/admin/book/create.js
import create from '../../../models/book/create.js'

export default async (req,res)=>{
    await create(req)

    res.redirect('/admin/book')
}