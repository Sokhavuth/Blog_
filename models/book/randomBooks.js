//models/book/randomBooks.js

export default async (req,amount=8)=>{
    const pipeline = [{$match:{bookCover:{$not:{$eq:''}}}},{$sample:{size:amount}}]
    return await req.mydb.collection("books").aggregate(pipeline).toArray()
}