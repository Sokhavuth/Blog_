//models/setting/read.js

export default async (req)=>{
    
    return await req.mydb.collection("settings").findOne()
}