var express=require('express')
var router=express.Router()
var mongodb=require('mongodb')
router.post('/save-que',async function(req,res,next){// receive the req

    try{
    // take the data from req
        const dataObj=req.body.data
    // connect with db
        // const url="mongodb://localhost:27017"
        const url="mongodb+srv://nit9am:nit9am@9am.odctmdy.mongodb.net/"
        const mongodbClient=mongodb.MongoClient
        const server=await mongodbClient.connect(url)
        const db=server.db('school')
        const collection=db.collection('questions')
         //perform requred opearions
        const result=await collection.insertOne(dataObj)
        // prepare and send res back to client
        res.send(result)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

module.exports=router;