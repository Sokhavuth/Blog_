//models/category/create.js

export default async (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
 
    let myCategory = {
        id: id, 
        title: req.body.label,
        thumb: req.body.thumb,
        date: new Date(req.body.datetime)
    }
 
    await req.mydb.collection("categories").insertOne(myCategory)
}