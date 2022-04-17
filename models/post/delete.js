//models/post/delete.js

export default async (req)=>{
    const myquery = {id:req.params.id}
 
    await req.mydb.collection("posts").deleteOne(myquery)
}