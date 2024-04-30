const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");


// middleware
app.use(cors());
app.use(express.json())

require("dotenv").config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.houukfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const touristCollection = client.db("touristDB").collection("touristSpot");
    const countriesCollection = client.db("touristDB").collection("countries");

    // get all allTouristSpot in DB
    app.get("/allTouristSpot", async (req, res) => {
      const cursor = touristCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    
    // get all countriesCollection in DB
    app.get("/countriesCollection", async (req, res) => {
      const cursor = countriesCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    // add tourist spot in DB
    app.post("/addTouristSpot", async (req, res) => {
      const touristSpot = req.body;

      // const result = await touristCollection.insertOne(touristSpot)
      const result = await touristCollection.insertOne(touristSpot)
      res.send(result)

    })

    // My Added spots list Get by email
    app.get("/myAddedList/:email", async (req, res) => {
      const email = req.params.email;

      const query = { email: email };
      const result = await touristCollection.find(query).toArray();
      res.send(result)
    })

    // Countries collection from Get by countryName
    app.get("/countriesCollection/:country", async (req, res) => {
      const country = req.params.country;

      const query = { country_Name: country };
      const result = await touristCollection.find(query).toArray();
      res.send(result)
    })


    // touristSpot get by id
    app.get("/touristSpot/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await touristCollection.findOne(query);
      res.send(result)
    })


    // touristSpot a data update or PUT korbo
    app.put("/touristSpot/:id", async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      console.log(updateInfo)
      
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateTouristInfo = {
        $set: {
          country_Name: updateInfo.U_country_Name,
          image: updateInfo.U_image,
          email: updateInfo.U_email,
          name: updateInfo.U_name,
          tourists_spot_name: updateInfo.U_tourists_spot_name,
          average_cost: updateInfo.U_average_cost,
          seasonality: updateInfo.U_seasonality,
          totalVisitorsPerYear: updateInfo.U_totalVisitorsPerYear,
          location: updateInfo.U_location,
          shortDescription: updateInfo.U_shortDescription,
          travel_time: updateInfo.U_travel_time,
        }
      }

      const result = await touristCollection.updateOne(filter, updateTouristInfo, options);
      res.send(result)
    })


    
    // Spot delete in DB
    app.delete("/myAddedList/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Delete data this id:", id)
      const query = { _id: new ObjectId(id) };
      const result = await touristCollection.deleteOne(query);
      res.send(result)
    })

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