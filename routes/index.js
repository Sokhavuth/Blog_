//routes/index.js
import express from 'express'
const index = express.Router()

import indexRoute from './front/index.js'
index.use('/', indexRoute) 

import bookRoute from './front/book.js'
index.use('/book', bookRoute) 
 
export default index