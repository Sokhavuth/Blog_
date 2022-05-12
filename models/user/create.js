//models/user/create.js
//npm install bcryptjs
import bcrypt from 'bcryptjs'

export default async (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword = bcrypt.hashSync(req.body.password, 12)

    let myobj = {
        id: id, 
        title: req.body.title,
        password: hashPassword,
        email: req.body.email,
        role: req.body.category,
        thumb: req.body.thumb,
        info: req.body.content,
        video: req.body.entires,
        date: req.body.datetime
    }

    await req.mydb.collection("users").insertOne(myobj)
}