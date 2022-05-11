//models/book/getArticles.js

export default async (req,bookTitle)=>{
    const pipeline = [{$match: {bookTitle: bookTitle}}]
    return await req.mydb.collection('books').aggregate(pipeline).toArray()
}