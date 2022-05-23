//routes/index.js
import express from 'express'
const index = express.Router()

import indexRoute from './front/index.js'
index.use('/', indexRoute) 

import bookRoute from './front/book.js'
index.use('/book', bookRoute) 

import booksRoute from './front/books.js'
index.use('/books', booksRoute) 

import postRoute from './front/post.js'
index.use('/post', postRoute) 

import multimediaRoute from './front/multimedia.js'
index.use('/multimedia', multimediaRoute) 

import randomItemRoute from './front/randomItem.js'
index.use('/randomItem', randomItemRoute)

import jobRoute from './front/job.js'
index.use('/job', jobRoute)

import searchRoute from './front/search.js'
index.use('/search', searchRoute)
 
export default index