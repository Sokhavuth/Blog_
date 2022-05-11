//models/post/random.js

export default async (req,amount=10)=>{
    const pipeline = [{$sample:{size: amount}}]
    return await req.mydb.collection("posts").aggregate(pipeline).toArray()
}