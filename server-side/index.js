const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173',
        'https://readio-8ff82.web.app',
        'https://readio-8ff82.firebaseapp.com'
    ],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vxqz6e2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {

        const myDB = client.db("ReadioDB");
        const myColl = myDB.collection("bookCollection");
        const borrowBookCollection = myDB.collection("borrowBookCollection");

        // auth
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            console.log('user', user);
            const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1h' });
            res.send({ token });
        })

        app.post('/addBook', async (req, res) => {
            const newBook = req.body;
            // console.log(newBook);
            const result = await myColl.insertOne(newBook);
            res.send(result);
        })

        app.get('/bookList', async (req, res) => {
            const cursor = myColl.find();
            console.log(req.cookies.token);
            const spot = await cursor.toArray();
            res.send(spot);
        })

        // for update
        app.get('/bookList/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await myColl.findOne(query);
            res.send(result);
        })

        app.put('/bookList/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const option = { upsert: true };
            const updatedBook = req.body;
            const book = {
                $set: {
                    image: updatedBook.image,
                    name: updatedBook.name,
                    author: updatedBook.author,
                    category: updatedBook.category,
                    rating: updatedBook.rating
                }
            }
            const result = await myColl.updateOne(filter, book, option);
            console.log(result);
            res.send(result);
        })

        // book details
        app.get('/book-details/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await myColl.findOne(query);
            res.send(result);
        })

        //fetch by category
        app.get('/book/:category', async (req, res) => {
            const { category } = req.params;
            const products = await myColl.find({ category: category }).toArray();
            res.send(products);
        });


        app.get('/myBook/:email', async (req, res) => {
            console.log(req.params.email);
            const result = await borrowBookCollection.find({ email: req.params.email }).toArray();
            res.send(result);
        })

        // borrow book
        app.post('/borrowBook', async (req, res) => {
            const newBook = req.body;
            const result = await borrowBookCollection.insertOne(newBook);
            res.send(result);
        })

        // for delete
        app.delete('/borrowed-book/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await borrowBookCollection.deleteOne(query);
            res.send(result);
        })




        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Readio Data Server Running');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
