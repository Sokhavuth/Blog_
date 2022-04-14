//models/count.js

export default async (req,col)=>{
    return await req.mydb.collection(col).countDocuments()
}