//settings.js
import mydb from './models/conMongoDB.js'

async function getSetting(){
    let settings = {}
    let DB = await mydb
    let dbSetting = await DB.collection("settings").findOne()
    
    settings.siteTitle = dbSetting.siteTitle
    settings.pageTitle = ''
    settings.description = dbSetting.description
    settings.dLogo = ''
    settings.dItemLimit = parseInt(dbSetting.dItemLimit)
    settings.indexPostLimit = parseInt(dbSetting.indexPostLimit)
    settings.categoryPostLimit = parseInt(dbSetting.categoryPostLimit)
    settings.route = ''
    settings.fileUrl = ''
    return settings
}

export default getSetting()