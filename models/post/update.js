//models/post/update.js

export default async (req)=>{
    const myquery = {id:req.params.id}
    let newvalue = {$set: {
        title: req.body.title,
        content: req.body.content,
        thumb: req.body.thumb,
        video: req.body.entries,
        category: req.body.category,
        date: req.body.datetime,
    }}
 
    await req.mydb.collection("posts").updateOne(myquery,newvalue)
}