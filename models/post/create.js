//models/post/create.js

export default async (req)=>{
    const id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)

    let mypost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        thumb: req.body.thumb,
        video: req.body.entries,
        category: req.body.category,
        date: new Date(req.body.datetime),
        author: req.session.user.userid
    }
 
    await req.mydb.collection("posts").insertOne(mypost)
}