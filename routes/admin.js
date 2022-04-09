//routes/admin.js
import express from 'express'
const admin = express.Router()

import loginRoute from './admin/login.js'
admin.use('/login', loginRoute) 
 
export default admin