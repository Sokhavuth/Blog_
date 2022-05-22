//models/job/randomJobs.js

export default async (req,amount=15)=>{
    let pipeline = null
    if(req.params.id){
        pipeline = [{$match:{id:{$not:{$eq:req.params.id}}}},{$sample:{size:amount}}]
    }else{
        pipeline = [{$sample:{size:amount}}]
    }
    
    return await req.mydb2.collection("jobs").aggregate(pipeline).toArray()
}