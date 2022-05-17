//controllers/admin/upload/read.js

export default async (req,res,next)=>{
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    let module = await import('../../../settings.js')
    let mySettings = await module.default()

    mySettings.pageTitle = 'ទំព័រ​ Upload'
    mySettings.route = '/admin/upload'
    mySettings.fileUrl = '/uploads/' + file.filename

    res.render('base',{data:mySettings})
 }