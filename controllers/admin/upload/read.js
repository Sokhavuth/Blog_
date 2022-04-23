//controllers/admin/upload/read.js
import settings from '../../../settings.js'

let mySettings = JSON.parse(JSON.stringify(settings))

export default (req,res,next)=>{
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    mySettings.pageTitle = 'ទំព័រ​ Upload'
    mySettings.route = '/admin/upload'
    mySettings.fileUrl = '/uploads/' + file.filename

    res.render('base',{data:mySettings})
 }