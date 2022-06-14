//models/book/getBooks.js

export default async (req,amount)=>{
    const type = req.params.type
    const pipeline = [{$match:{$and:[{bookCover:{$not:{$eq:''}}},{category:type}]}}]
    if(req.body.page){
        const page = req.body.page
        var books = await req.mydb.collection("books")
                            .aggregate(pipeline).sort({date:-1,_id:-1}).skip(amount*page)
                            .limit(amount).toArray()
    }else{
        var books = await req.mydb.collection("books")
                            .aggregate(pipeline).sort({date:-1,_id:-1}).limit(amount).toArray()
    }
    const count = await req.mydb.collection('books')
                            .count({bookCover:{$not:{$eq:''}},category:type})
    return {"books":books,"count":count}
}