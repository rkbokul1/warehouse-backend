const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(cors())
app.use(express.json())

/*--------------------------
database user and password
user: dbWareHouse
password: m0s2tcQuCwOwkkRR
 -------------------------*/

// api

app.get('/', (req, res) => {
    res.send('Look mama, this is wareHouse Project!')
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0.xbffn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});





// app listening for test
app.listen(port, () => {
    console.log(`app is listening by ${port}`)
})