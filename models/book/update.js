//models/book/update.js

export default async (req)=>{
    const myquery = {id:req.params.id}
    let newvalue = {$set: {
        title: req.body.title,
        content: req.body.content,
        thumb: req.body.thumb,
        video: req.body.entries,
        category: req.body.category,
        date: new Date(req.body.datetime),
        bookTitle: req.body.bookTitle,
        bookCover: req.body.bookCover,
        bookChapter:  req.body.bookChapter
    }}
    
    await req.mydb.collection("books").updateOne(myquery,newvalue)
}