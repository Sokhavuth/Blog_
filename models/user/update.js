//models/user/update.js
import bcrypt from 'bcryptjs'

export default async (req)=>{
    const myquery = {id:req.params.id}

    if(req.body.password !== req.session.password){
        var hashPassword = bcrypt.hashSync(req.body.password, 12)
    }else{
        var hashPassword = req.body.password
    }
    
    let newvalue = {$set: {
        title: req.body.title,
        info: req.body.content,
        thumb: req.body.thumb,
        video: req.body.entries,
        role: req.body.category,
        date: new Date(req.body.datetime),
        email: req.body.email,
        password: hashPassword,
    }}
 
    await req.mydb.collection("users").updateOne(myquery,newvalue)
}