//models/user/delete.js

export default async (req)=>{
    const myquery = {id:req.params.id}
 
    await req.mydb.collection("users").deleteOne(myquery)
}