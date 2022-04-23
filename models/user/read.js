//models/user/read.js

export default async (req,amount=10,id=false)=>{
    if(id){
        return await req.mydb.collection("users").findOne({id:id})
    }else if(req.body.page){
        const page = req.body.page
        return await req.mydb.collection("users")
            .find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
    }else{
        return await req.mydb.collection("users")
            .find().sort({date:-1,_id:-1}).limit(amount).toArray()
    }
}