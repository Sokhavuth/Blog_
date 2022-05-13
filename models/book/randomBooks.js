//models/book/randomBooks.js

export default async (req,amount)=>{
    const pipeline = [{$match:{bookCover:{$not:{$eq:''}}}},{$sample:{size:amount}}]
    return await req.mydb.collection("books").aggregate(pipeline).toArray()
}