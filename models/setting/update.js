//models/setting/update.js

export default async (req)=>{
    const myquery = {id:req.params.id}
    let newvalue = {$set: {
        siteTitle: req.body.siteTitle,
        description: req.body.description,
        dItemLimit: req.body.dItemLimit,
        indexPostLimit: req.body.indexPostLimit,
        categoryPostLimit: req.body.categoryPostLimit
    }}
 
    await req.mydb.collection("settings").updateOne(myquery,newvalue)
}