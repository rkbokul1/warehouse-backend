const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

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
    res.send('Look Hero, This is wareHouse Project!')
});

// node nongo 

const uri = `mongodb+srv://${process.env.db_User}:${process.env.db_Pass}@cluster0.xbffn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// main api
const run = async () => {
    try {
        await client.connect();
        const stockCollection = client.db('ware-house').collection('stock');

        app.get('/stock', async (req, res) => {
            const query = {};
            const stock = stockCollection.find(query);
            const allStock = await stock.toArray();
            res.send(allStock);
        });

        app.get ('/stock/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const stock = await stockCollection.findOne(query)
            res.send(stock);
        })

        // updated stock
       



    }
    finally {

    }
}

run().catch(console.dir)



// app listening for test
app.listen(port, () => {
    console.log(`app is listening by ${port}`)
})