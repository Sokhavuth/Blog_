//routes/admin/upload.js
//npm install multer
import path from 'path'
import express from 'express'
const uploadRoute = express.Router()
import multer from 'multer'

const __dirname = path.resolve()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/uploads/'))
    },
    filename: function (req, file, cb) {
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
        cb(null, id + '-' + file.originalname)
    }
})
  
const upload = multer({storage: storage})

uploadRoute.get('/',async function(req,res){
    if(req.session.user){
        const module = await import('../../controllers/admin/upload/get.js')
        module.default(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

uploadRoute.post('/',upload.single("uploadFile"),async function(req,res,next){
    if(req.session.user){
        const module = await import('../../controllers/admin/upload/read.js')
        module.default(req,res,next)
    }else{
        res.redirect('/admin/login')
    }
})

export default uploadRoute