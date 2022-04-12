const express = require('express')
const{MongoClient, objectID}=require('mongodb')
const bodyParser = require ('body-parser')
const assert = require ('assert')
const cors = require('cors')
const app =express()
const  ObjectID = require('mongodb').ObjectId;
var dattaa="";
app.use(bodyParser.json())
app.use(cors())
const mongo_url ='mongodb://localhost:27017'
const dataBase ='DBUSER'
MongoClient.connect(mongo_url,{
  useNewUrlParser :true,
  useUnifiedTopology:true  
},(err,client)=>{
assert.equal(err,null,'DB connection failed')
const db = client.db(dataBase)

app.get('/users',(req,res)=>{
    db.collection('user').find().toArray((err,data)=>{
    if(err) 
     res.send('Cannot fetch contacts')
    else
    
     res.send(data)
    })
    })
    
    app.get("/user/:name", (req, res) => {
         db.collection("user").findOne({email: req.params.name}).then((data) => {
            if(err) 
            console.send('Cannot fetch contacts')
           else
            res.send(data)
          });
      });
     
      app.get("/contact/:name", (req, res) => {
        let body = req.body;
        let contact = db
          .collection("user")
          .findOne({ _name: req.params.name })
          .then((data) => {
            res.send(data);
          });
      });
    
   app.post('/add_user',(req,res)=>{
        let newContact = req.body
        db.collection('user').insert(newContact,(err,data)=>{
        if(err){
        res.send('cannot add new contact')}
        else
        res.send('Contact added')
    })
    })
 app.put('/modify_contact/:id',(req,res)=>{
 db.collection('user').updateMany({_id:ObjectID(req.params.id)},
 {$set:{...req.body}},(err,data)=>{
    if(err)
    {res.send('Cannot update contact')
    console.log(err)}
    else
    res.send('Contact updated')
 }
 )
 })
 app.delete('/delete_user/:id',(req,res)=>{
    db.collection('user').remove({_id:ObjectID(req.params.id)},(err,data)=>{
        if(err)
    {res.send('Cannot delete contact')
    console.log(err)}
    else
    res.send('Contact deleted')
        
    })
 })
}
)
app.listen(5001,(err)=>{
    if(err){
        console.log('error while running server')
    } else {
        console.log('Server is running on port 5001')}})


            