//models/book/delete.js

export default async (req)=>{
    const myquery = {id:req.params.id}
 
    await req.mydb.collection("books").deleteOne(myquery)
}