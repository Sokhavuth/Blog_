//models/post/randomVideos.js

export default async (req,amount)=>{
    const pipeline = [{$match:{category:'Video'}},{$sample:{size:amount}}]
    return await req.mydb.collection("posts").aggregate(pipeline).toArray()
}