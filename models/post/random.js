//models/post/random.js

export default async (req,amount=10)=>{
    const pipeline = [{$sample:{size: amount}}]
    const random = await req.mydb.collection("posts").aggregate(pipeline).toArray()
    return random
}