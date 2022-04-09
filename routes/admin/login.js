//routes/admin/login.js
import express from 'express'
const login = express.Router()

login.get('/',async function(req,res) {
    let module = await import('../../controllers/admin/login/get.js')
    module.default(req,res)
})

login.post('/',async function(req,res){
    const module = await import('../../controllers/admin/login/post.js')
    module.default(req,res)
})

export default login