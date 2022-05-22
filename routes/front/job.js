//routes/front/job.js
import express from 'express'
const jobRoute = express.Router()

jobRoute.get('/:id',async (req,res)=>{
    let module = await import('../../controllers/front/job.js')
    module.default(req,res)
})
 
export default jobRoute