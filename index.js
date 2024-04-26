const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");


// middleware
app.use(cors());
app.use(express.json())


// Mongodb username and password
// ih9066588
// IfqjUSDRTi0NdJV1


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ih9066588:IfqjUSDRTi0NdJV1@cluster0.houukfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const touristCollection = client.db("touristDB").collection("touristSpot");

    // get all allTouristSpot in DB
    app.get("/allTouristSpot", async (req, res) => {
      const cursor = touristCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    // add tourist spot in DB
    app.post("/addTouristSpot", async (req, res) => {
      const touristSpot = req.body;
      
      const result = await touristCollection.insertOne(touristSpot)
      res.send(result)

    })

    // My Added spots list Get
    app.get("/myAddedList/:email", async(req, res) => {
      const email = req.params.email;
   
      const query = {email: email};
      const result = await touristCollection.find(query).toArray();
      res.send(result)
    })

    // Spot delete in DB
    app.delete("/myAddedList/:id", async(req, res)=> {
      const id = req.params.id;
      console.log("Delete data this id:", id)
      const query = {_id: new ObjectId(id)};
      const result = await touristCollection.deleteOne(query);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("My server is running")
})

app.listen(port, () => {
  console.log("My server port is: ", port)
})