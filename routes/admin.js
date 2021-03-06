//routes/admin.js
import express from 'express'
const admin = express.Router()

import loginRoute from './admin/login.js'
admin.use('/login', loginRoute) 

import categoryRoute from './admin/category.js'
admin.use('/category', categoryRoute)

import postRoute from './admin/post.js'
admin.use('/post', postRoute) 

import bookRoute from './admin/book.js'
admin.use('/book', bookRoute)

import uploadRoute from './admin/upload.js'
admin.use('/upload', uploadRoute)

import userRoute from './admin/user.js'
admin.use('/user', userRoute)

import settingRoute from './admin/setting.js'
admin.use('/setting', settingRoute)

import searchRoute from './admin/search.js'
admin.use('/search', searchRoute)
 
export default admin