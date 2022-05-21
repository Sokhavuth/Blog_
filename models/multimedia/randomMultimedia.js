//models/multimedia/randomMultimedia.js

export default async (req,amount)=>{
    const pipeline = [{$sample:{size:amount}}]
    return await req.mydb1.collection("posts").aggregate(pipeline).toArray()
}