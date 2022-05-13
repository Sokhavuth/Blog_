//routes/index.js
import express from 'express'
const index = express.Router()

import indexRoute from './front/index.js'
index.use('/', indexRoute) 

import bookRoute from './front/book.js'
index.use('/book', bookRoute) 

import booksRoute from './front/books.js'
index.use('/books', booksRoute) 
 
export default index