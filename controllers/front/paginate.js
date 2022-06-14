import settings from '../../settings.js'
import getBooks from '../../models/book/getBooks.js'

export default async (req,res)=>{
    const mySettings = await settings()
    mySettings.route = `/books/${req.params.type}`

    const result = await getBooks(req,mySettings.categoryPostLimit)
    mySettings.count = result.count
    mySettings.books = result.books

    res.json(mySettings)
}