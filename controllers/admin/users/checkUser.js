//controllers/admin/users/checkUser.js

export default async (req)=>{
    const query = {email:req.body.email}
    let user = await req.mydb.collection("users").findOne(query)
    return user
}
