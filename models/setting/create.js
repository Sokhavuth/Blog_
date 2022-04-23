//models/setting/create.js

export default async (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()

    let mypost = {
        id: id,
        siteTitle: req.body.siteTitle,
        description: req.body.description,
        dItemLimit: req.body.dItemLimit,
        indexPostLimit: req.body.indexPostLimit,
        categoryPostLimit: req.body.categoryPostLimit
    }
 
    await req.mydb.collection("settings").insertOne(mypost)
}