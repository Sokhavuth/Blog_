//models/category/read.js

export default async (req,amount=10,id=false)=>{
    if(id){
        return await req.mydb.collection("categories").findOne({id:id})
    }else if(req.body.page){
        const page = req.body.page
        return await req.mydb.collection("categories")
            .find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
    }else if(amount === 'all'){
        return await req.mydb.collection("categories")
            .find({}, {title:1,_id:0}).sort({title:1}).toArray()
    }else{
        return await req.mydb.collection("categories")
            .find().sort({date:-1,_id:-1}).limit(amount).toArray()
    }
}