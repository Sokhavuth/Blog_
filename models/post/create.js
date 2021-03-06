//models/post/create.js

export default async (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()

    let mypost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        thumb: req.body.thumb,
        video: req.body.entries,
        category: req.body.category,
        date: req.body.datetime,
        author: req.session.user.id
    }
 
    await req.mydb.collection("posts").insertOne(mypost)
}