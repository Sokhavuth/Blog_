//models/search/read.js

export default async (req,amount=10)=>{
    let collection = ''
    const querry = {$or:[{category:req.body.q},{title:{"$regex": req.body.q}},{content:{"$regex":req.body.q}}]}
    
    if(req.body.adminType){
        if(req.body.adminType === 'ការផ្សាយ'){
            collection = 'posts'
            req.body.adminType = 'post'
        }else if(req.body.adminType === 'ជំពូក'){
            collection = "categories"
            req.body.adminType = 'category'
        }else if(req.body.adminType === 'សៀវភៅ'){
            collection = "books"
            req.body.adminType = 'book'
        }else if(req.body.adminType === 'អ្នក​ប្រើប្រាស់'){
            collection = "users"
            req.body.adminType = 'user'
        }

        return await req.mydb.collection(collection)
        .find(querry).sort({date:-1,_id:-1}).limit(amount).toArray()
    }else if(req.body.type){
        if(req.body.type === 'មេរៀន'){
            collection = 'books'
            req.body.type = 'book'
            return await req.mydb.collection(collection)
            .find(querry).sort({date:-1,_id:-1}).limit(amount).toArray()
        }else if(req.body.type === 'សៀវភៅ'){
            collection = 'books'
            req.body.type = 'book'
            const pipeline = [{$match:{$and:[{bookCover:{$not:{$eq:''}}},{$or:[{category:req.body.q},{bookTitle:{"$regex": req.body.q}}]}]}},{$limit:amount}]
            return await req.mydb.collection(collection).aggregate(pipeline).sort({date:-1,_id:-1}).toArray()
        }else if(req.body.type === 'Video'){
            collection = 'posts'
            req.body.type = 'post'
            const pipeline = [{$match:{$and:[{category:'Video'},{$or:[{title:{"$regex":req.body.q}},{content:req.body.q}]}]}},{$limit:amount}]
            return await req.mydb.collection(collection).aggregate(pipeline).sort({date:-1,_id:-1}).toArray()
        }else if(req.body.type === 'ការងារ'){
            collection = 'jobs'
            req.body.type = 'job'
            return await req.mydb2.collection(collection).find(querry).sort({date:-1,_id:-1}).limit(amount).toArray()
        }else if(req.body.type === 'ពហុព័ត៌មាន'){
            collection = 'posts'
            req.body.type = 'multimedia'
            return await req.mydb1.collection(collection).find(querry).sort({date:-1,_id:-1}).limit(amount).toArray()
        }
        
    }

    
}