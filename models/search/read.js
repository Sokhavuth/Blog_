//models/search/read.js

export default async (req,amount=10)=>{
    let collection = ''
    const querry = {$or:[{title:{"$regex": req.body.q}},{content:{"$regex":req.body.q}}]}
    if(req.body.type === 'ការផ្សាយ'){
        collection = 'posts'
        req.body.type = 'post'
    }else if(req.body.type === 'ជំពូក'){
        collection = "categories"
        req.body.type = 'category'
    }else if(req.body.type === 'សៀវភៅ'){
        collection = "books"
        req.body.type = 'book'
    }else if(req.body.type === 'អ្នក​ប្រើប្រាស់'){
        collection = "users"
        req.body.type = 'user'
    }

    return await req.mydb.collection(collection)
        .find(querry).sort({date:1,_id:-1}).limit(amount).toArray()
}