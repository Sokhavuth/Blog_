//routes/admin/login.js
import express from 'express'
const login = express.Router()
import settings from '../../settings.js'

login.get('/', async function(req, res, next) {
    settings.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
    settings.message = ''
    settings.route = 'admin/login'
  
    res.render('base', settings)
})

export default login