const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2yrmk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors());
const port = 5000;


app.get('/', (req, res) => {
    res.send("db it's working working")
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const serviceCollection =  client.db("creativeAgency").collection("service");

  app.post('/addService', (req, res) => {
    const service = req.body;
        serviceCollection.insertOne(service)
        .then(result => {
            res.send(result.insertedCount > 0)
        })
    });


});
   

    app.get('/login', (req, res) => {
        res.send("login")
    })





























app.listen(process.env.PORT || port)