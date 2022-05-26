//models/book/getArticles.js

export default async (req,bookTitle)=>{
    const pipeline = [{$match: {bookTitle: bookTitle}}]
    return await req.mydb.collection('books').aggregate(pipeline).sort({date:1,_id:1}).toArray()
}