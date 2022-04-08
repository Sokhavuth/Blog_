//index.js
//npm install express
//npm install ejs

import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000
process.env.TZ = "Asia/Phnom_Penh"
const __dirname = path.resolve()
 
import index from './routes/index.js'
import admin from './routes/admin.js'

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
                                  
app.use('/',index) 
app.use('/admin',admin) 

app.listen(port,function(){
    console.log(`This application is listening to the port: ${port}`)
})

export default app