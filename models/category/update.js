//models/category/update.js

export default async (req)=>{
    const myquery = {id:req.params.id}
    let newvalue = {$set: {
        title: req.body.label,
        thumb: req.body.thumb,
        date: req.body.datetime
    }}
 
    await req.mydb.collection("categories").updateOne(myquery,newvalue)
}