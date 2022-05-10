//routes/index.js
import express from 'express'
const index = express.Router()

import indexRoute from './front/index.js'
index.use('/', indexRoute) 
 
export default index