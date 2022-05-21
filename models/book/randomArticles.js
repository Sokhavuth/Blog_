//models/post/random.js

export default async (req,amount=15)=>{
    const pipeline = [{$sample:{size: amount}}]
    return await req.mydb.collection("books").aggregate(pipeline).toArray()
}