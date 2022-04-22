//models/category/create.js

export default async (req)=>{
    const id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
 
    let myCategory = {
        id: id, 
        title: req.body.label,
        thumb: req.body.thumb,
        date: new Date(req.body.datetime)
    }
 
    await req.mydb.collection("categories").insertOne(myCategory)
}