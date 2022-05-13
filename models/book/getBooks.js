//models/book/getBooks.js

export default async (req,amount)=>{
    const type = req.params.type
    const pipeline = [{$match:{$and:[{bookCover:{$not:{$eq:''}}},{category:type}]}},
    {$limit:amount}]
    return await req.mydb.collection("books").aggregate(pipeline)
    .sort({date:-1,_id:-1}).toArray()
}