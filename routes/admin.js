//routes/admin.js
import express from 'express'
const admin = express.Router()

import loginRoute from './admin/login.js'
admin.use('/login', loginRoute) 

import postRoute from './admin/post.js'
admin.use('/post', postRoute) 

import categoryRoute from './admin/category.js'
admin.use('/category', categoryRoute)
 
export default admin