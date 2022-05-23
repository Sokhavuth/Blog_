//routes/admin/search.js
import express from 'express'
const search = express.Router()

search.post('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/search/read.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

export default search