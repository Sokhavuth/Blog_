//controllers/front/index.js

export default async (req,res)=>{
    if(req.body.type === 'book'){
        const module = await import('../../models/book/randomArticles.js')
        const randomArticles = await module.default(req)
        res.json(randomArticles)
    }else if(req.body.type === 'books'){
        const module = await import('../../models/book/randomBooks.js')
        const randomBooks = await module.default(req)
        res.json(randomBooks)
    }else if(req.body.type === 'video'){
        const module = await import('../../models/post/randomVideos.js')
        const randomVideos = await module.default(req)
        res.json(randomVideos)
    }else if(req.body.type === 'job'){
        const module = await import('../../models/job/randomJobs.js')
        const randomJobs = await module.default(req)
        res.json(randomJobs)
    }
}