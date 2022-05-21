//models/job/randomJobs.js

export default async (req,amount=15)=>{
    const pipeline = [{$sample:{size:amount}}]
    return await req.mydb2.collection("jobs").aggregate(pipeline).toArray()
}