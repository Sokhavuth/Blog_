//models/conMongoDB.js
//npm install mongodb
//npm install dotenv
 
import {MongoClient} from 'mongodb'
const mymongo = MongoClient
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DATABASE_URI
 
let resultPromise = new Promise(function(resolve,reject){
    mymongo.connect(url, {useUnifiedTopology:true}, function(err, db){
        if (err) throw err
        const mydb1 = db.db("multimedia")
        if(mydb1){
            resolve(mydb1)
            console.log('Connected to the second database!!')
        }else{
            reject("Error occured!")
        }
    })
})
 
async function awaitPromise(){
    let mydb1 = await resultPromise
    return mydb1
}
 
export default awaitPromise()