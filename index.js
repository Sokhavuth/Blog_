//index.js
//npm install express
//npm install ejs
//npm install express-session
//npm install connect-mongo
//npm install dotenv

import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
import session from 'express-session'
import MongoStore from 'connect-mongo' 

const app = express()

app.use(session({
    store: MongoStore.create({mongoUrl:process.env.DATABASE_URI}),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

const port = process.env.PORT || 3000
process.env.TZ = "Asia/Phnom_Penh"
const __dirname = path.resolve()

import index from './routes/index.js'
import admin from './routes/admin.js'
import mydb from './models/conMongoDB.js'
import mydb1 from './models/conMongoDB1.js'
import mydb2 from './models/conMongoDB2.js'

app.use('/',async function(req,res,next){
    req.mydb = await mydb
    req.mydb1 = await mydb1
    req.mydb2 = await mydb2
    next()
})

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