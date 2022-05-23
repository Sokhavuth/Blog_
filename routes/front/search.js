//routes/front/search.js
import express from 'express'
const searchRoute = express.Router()

searchRoute.post('/',async function(req,res){
    const module = await import('../../controllers/front/search.js')
    module.default(req,res)
})

export default searchRoute