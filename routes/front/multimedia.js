//routes/front/multimedia
import express from 'express'
const multimediaRoute = express.Router()

multimediaRoute.get('/',async (req,res)=>{
    let module = await import('../../controllers/front/multimedia.js')
    module.default(req,res)
})

multimediaRoute.get('/:id',async (req,res)=>{
    let module = await import('../../controllers/front/media.js')
    module.default(req,res)
})
 
export default multimediaRoute