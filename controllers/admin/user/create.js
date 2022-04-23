//controllers/admin/users/create.js
//npm install bcryptjs

import bcrypt from 'bcryptjs'

export default (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hash = bcrypt.hashSync('xxxxxx', 12)

    let myobj = {
        userid: id, 
        title: 'root',
        password: hash,
        email: 'vuthdevelop@gmail.com',
        role: 'Admin',
        thumb: '',
        info: '',
        video: '',
        date: new Date()
    }

    req.mydb.collection("users").insertOne(myobj,function(err, res){
        if (err) throw err
        console.log(`One document was inserted!`)
    })
}