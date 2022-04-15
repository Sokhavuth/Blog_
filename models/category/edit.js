//models/category/edit.js

export default async (req)=>{
    const myquery = {id:req.params.id}
    let newvalue = {$set: {
        title: req.body.label,
        thumb: req.body.thumb,
        date: new Date(req.body.datetime)
    }}
 
    req.mydb.collection("categories").updateOne(myquery,newvalue)
}